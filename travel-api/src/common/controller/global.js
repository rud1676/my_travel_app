const bcrypt = require('bcrypt');
const passport = require('passport');
const _ = require('lodash');
const config = require('config');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const models = require('../../db');
const { saltRounds } = require('../../define');
const { CFErr, ErrInfo } = require('../../err');

// 회원가입
module.exports.join = async (req, res) => {
  const { nickname, phone, name, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const isUser = await models.User.findAndCountAll({
    where: {
      [models.Sequelize.Op.or]: {
        email,
        nickname
      }
    }
  });
  console.log(isUser);

  if (isUser.count) {
    res.status(404).send('이미 존재하는 이메일이나 닉네임입니다.');
  } else {
    const user = await models.User.create({
      phone,
      nickname,
      name,
      email,
      password: passwordHash,
      admin: true,
      provider: 'admin'
    });
    res.send(user);
  }
};

// sns 회원가입
module.exports.snsJoin = async (req, res) => {
  const { phone, name, email, provider, snsId, birth, gender } = req.body;
  console.log(req.body);

  const findUser = await models.User.findOne({
    where: { provider, snsId }
  });

  if (findUser) {
    throw new CFErr(ErrInfo.UserExist);
  }

  let imageId;
  if (req.file) {
    const attachment = await models.Attachment.create({
      originalname: req.file.originalname,
      key: req.file.key,
      location: req.file.location
    });
    imageId = attachment.id;
  }

  const newUser = await models.User.create({
    phone,
    name,
    email,
    provider,
    snsId,
    birth,
    gender,
    imageId
  });

  const jwtToken = jwt.sign({ id: newUser.id }, config.JWT.JWT_SECRET, {
    expiresIn: '7d'
  });
  return res.send({ isJoin: true, token: jwtToken, user: newUser });
};

// local 로그인
module.exports.login = async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }

    await models.User.update(
      {
        lastLoginAt: models.sequelize.fn('NOW')
      },
      {
        where: { id: user.id }
      }
    );

    const token = jwt.sign({ id: user.id }, config.JWT.JWT_SECRET, {
      expiresIn: '3d'
    });

    return res.send({ token });
  })(req, res, next);
};

// admin로그인
module.exports.adminLogin = async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (info) {
      return res.status(401).send(info.reason);
    }

    if (!user.admin) {
      return res.status(401).send('관리자가 아닙니다.');
    }

    await models.User.update(
      {
        lastLoginAt: models.sequelize.fn('NOW')
      },
      {
        where: { id: user.id }
      }
    );

    const token = jwt.sign({ id: user.id }, config.JWT.JWT_SECRET, {
      expiresIn: '3d'
    });

    return res.send({ token });
  })(req, res, next);
};

module.exports.profile = (req, res) => {
  if (req.user) {
    const sendRes = _.pick(req.user, [
      'id',
      'nickname',
      'phone',
      'admin',
      'gender',
      'birth',
      'nation',
      'alarm',
      'snsId',
      'name',
      'email',
      'nickname',
      'provider',
      'image'
    ]);
    return res.send(sendRes);
  }
  throw new CFErr(ErrInfo.NotFound);
};

module.exports.modifyProfile = async (req, res) => {
  const { name, phone, email, birth, gender, file } = req.body;
  console.log(name, phone, email, birth, gender, file);
  console.log(req.user.id);
  const transaction = await models.sequelize.transaction();
  try {
    const modifyUser = await models.User.update(
      {
        name,
        phone,
        email,
        birth,
        gender
      },
      transaction,
      {
        where: {
          id: req.user.id
        }
      }
    );

    let fileData;
    if (req.file) {
      fileData = {
        userId: modifyUser.id,
        originalname: file.originalname,
        key: file.key,
        location: file.location
      };
    }
    if (fileData) {
      await models.UserImage.bulkCreate(fileData, { transaction });
    }
    await transaction.commit();
    return res.send(modifyUser);
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

module.exports.kakaoLogin = async (req, res) => {
  const { code } = req.body;
  const grantType = 'authorization_code';
  const clientId = process.env.KAKAO_KEY;

  try {
    const {
      data: { access_token }
    } = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${clientId}&code=${code}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }
    );

    const { data } = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    console.log(data);
    const { id: snsId } = data;

    const findUser = await models.User.findOne({
      where: { provider: 'kakao', snsId }
    });

    if (findUser) {
      const jwtToken = jwt.sign({ id: findUser.id }, config.JWT.JWT_SECRET, {
        expiresIn: '7d'
      });
      return res.send({ isJoin: true, token: jwtToken, user: findUser });
    }
    return res.send({
      isJoin: false,
      provider: 'kakao',
      id: snsId
    });

    // const newUser = await models.User.create({
    //   provider: 'kakao',
    //   snsId
    // });

    // const jwtToken = jwt.sign({ id: newUser.id }, config.JWT.JWT_SECRET, {
    //   expiresIn: '3d'
    // });

    // return res.send({ token: jwtToken, user: newUser });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    throw err;
  }
};

module.exports.naverLogin = async (req, res) => {
  const { token } = req.body;
  const {
    data: {
      response: { id: snsId }
    }
  } = await axios.get('https://openapi.naver.com/v1/nid/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const findUser = await models.User.findOne({
    where: { provider: 'naver', snsId }
  });

  if (findUser) {
    const jwtToken = jwt.sign({ id: findUser.id }, config.JWT.JWT_SECRET, {
      expiresIn: '7d'
    });
    return res.send({ token: jwtToken, user: findUser });
  }
  return res.send({
    isJoin: false,
    provider: 'naver',
    id: snsId
  });
};
