const bcrypt = require('bcrypt');
const models = require('../../db');
const { emptySuccessResponse, saltRounds } = require('../../define');

module.exports.add = async (req, res) => {
  const { nickname, phone, name, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = await models.User.create({
    phone,
    nickname,
    name,
    email,
    password: passwordHash,
    admin: true,
    provider: 'admin'
  });

  return res.send(user);
};

module.exports.list = async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;

  const users = await models.User.findAndCountAll({
    limit,
    offset,
    attributes: [
      'id',
      'email',
      'nickname',
      'name',
      'phone',
      'gender',
      'birth',
      'provider',
      'admin'
    ],
    order: [['createdAt', 'DESC']]
  });

  res.send(users);
};

module.exports.detail = async (req, res) => {
  const { id } = req.params;

  const user = await models.User.findOne({
    where: { id },
    include: [
      {
        model: models.Attachment,
        as: 'image'
      }
    ]
  });
  res.send(user);
};

module.exports.myUpdate = async (req, res) => {
  const { id } = req.user;

  const { name, email, phone, birth, gender } = req.body;

  let imageId;
  if (req.file) {
    const attachment = await models.Attachment.create({
      originalname: req.file.originalname,
      key: req.file.key,
      location: req.file.location
    });
    imageId = attachment.id;
  }

  await models.User.update(
    {
      name,
      email,
      phone,
      birth,
      gender,
      imageId
    },
    {
      where: { id }
    }
  );

  res.send(emptySuccessResponse);
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, birth, gender } = req.body;
  let imageId;
  if (req.file) {
    const attachment = await models.Attachment.create({
      originalname: req.file.originalname,
      key: req.file.key,
      location: req.file.location
    });
    imageId = attachment.id;
  }

  await models.User.update(
    {
      name,
      email,
      phone,
      birth,
      gender,
      imageId
    },
    {
      where: { id }
    }
  );

  res.send(emptySuccessResponse);
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;

  const transaction = await models.sequelize.transaction();

  try {
    const findUser = await models.User.findOne({
      where: { id },
      transaction
    });

    await models.User.update(
      {
        removedEmail: findUser.email,
        email: null
      },
      {
        where: { id },
        transaction
      }
    );

    await models.User.destroy({
      // paranoid 설정시 삭제되지 않고 자동으로 deltedAt 작성
      where: { id },
      transaction
    });

    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
  }

  res.send(emptySuccessResponse);
};

module.exports.withdraw = async (req, res) => {
  const { id } = req.user;

  const transaction = await models.sequelize.transaction();

  try {
    const findUser = await models.User.findOne({
      where: { id },
      transaction
    });

    await models.User.update(
      {
        removedEmail: findUser.email,
        email: null
      },
      {
        where: { id },
        transaction
      }
    );

    await models.User.destroy({
      // paranoid 설정시 삭제되지 않고 자동으로 deltedAt 작성
      where: { id },
      transaction
    });

    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
  }

  res.send(emptySuccessResponse);
};

module.exports.userInfo = async (req, res) => {
  const { email } = req.body;
  const user = await models.User.findOne({
    where: {
      email
    },
    include: [
      {
        model: models.Attachment,
        as: 'image'
      }
    ]
  });

  res.send(user);
};
