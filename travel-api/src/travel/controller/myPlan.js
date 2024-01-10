// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require('node-fetch');
const config = require('config');
const stream = require('stream');

const { AWS } = require('../../fileUpload/middlewares');
const models = require('../../db');

const { Op } = models.Sequelize;

// 이미지 URL에서 다운로드 하는 함수
async function uploadImageToS3(url) {
  const response = await fetch(url); // 실제 이미지 다운

  if (!response.ok) throw new Error('Network response was not ok');

  const pass = new stream.PassThrough(); // 이미지 다운로드과정
  response.body.pipe(pass);

  // 다운로드된 pass를 params에 넣어준다.
  const params = {
    Bucket: config.uploader.bucket,
    Key: `${Date.now()}`,
    Body: pass
  };

  // AWS S3버캣에 넣어준다.
  return new AWS.S3().upload(params).promise();
}

module.exports.detail = async (req, res) => {
  const { id } = req.params;
  const travel = await models.MyPlan.findOne({
    where: {
      id
    },
    attributes: { exclude: ['userId', 'updatedAt', 'deletedAt'] },
    include: [
      {
        model: models.MyPlanDetail,
        as: 'details',
        include: [
          {
            model: models.Attachment,
            as: 'image'
          }
        ],
        attributes: { exclude: ['updatedAt'] }
      }
    ],
    order: [['details', 'order', 'ASC']]
  });
  res.send(travel);
};

module.exports.daylist = async (req, res) => {
  const { day } = req.params;
  const where = { userId: req.user.id };

  if (day) {
    where.startAt = { [Op.lte]: new Date(day) };
    where.endAt = { [Op.gte]: new Date(day) };
  }
  let travelByDay = await models.MyPlan.findOne({
    where,
    attributes: { exclude: ['userId', 'updatedAt', 'deletedAt'] },
    order: [[{ model: models.MyPlanDetail, as: 'details' }, 'order', 'ASC']],
    include: [
      {
        model: models.MyPlanDetail,
        as: 'details',
        where: {
          date: day
        },
        include: [
          {
            model: models.Attachment,
            as: 'image'
          }
        ],
        attributes: { exclude: ['updatedAt'] }
      }
    ]
  });
  if (travelByDay === null) {
    travelByDay = await models.MyPlan.findOne({
      where
    });
  }
  res.send(travelByDay);
};

module.exports.list = async (req, res) => {
  const { order } = req.query;
  const where = { userId: req.user.id };

  let orderWhere = {};
  if (order === 'asc') {
    orderWhere = [['startAt', 'ASC']];
  } else {
    orderWhere = [['startAt', 'DESC']];
  }

  const travels = await models.MyPlan.findAll({
    where,
    attributes: { exclude: ['userId', 'updatedAt', 'deletedAt'] },
    order: orderWhere,
    include: {
      model: models.MyPlanDetail,
      as: 'details',
      include: [
        {
          model: models.Attachment,
          as: 'image'
        }
      ]
    }
  });
  res.send(travels);
};

module.exports.myPlanDetails = async (req, res) => {
  const { myPlanId } = req.params;
  const { date } = req.query;

  let where = { myPlanId };
  if (date) {
    where = {
      myPlanId,
      date
    };
  }
  const myPlanDetail = await models.MyPlanDetail.findAll({
    where,
    attributes: { exclude: ['myPlanId', 'updatedAt'] },
    include: [
      {
        model: models.Attachment,
        as: 'image'
      }
    ],
    order: [
      ['date', 'ASC'],
      ['time', 'ASC']
    ]
  });
  res.send(myPlanDetail);
};

module.exports.myPlanDetail = async (req, res) => {
  const { id } = req.params;
  const where = { id };

  // 불러올 때 my PlanId가 필요할 수 있습니다!
  const myPlanDetail = await models.MyPlanDetail.findOne({
    where,
    attributes: { exclude: ['updatedAt'] },
    include: [
      {
        model: models.Attachment,
        as: 'image'
      }
    ],
    order: [
      ['date', 'ASC'],
      ['time', 'ASC']
    ]
  });
  res.send(myPlanDetail);
};

module.exports.myDetailDelete = async (req, res) => {
  const { id } = req.params;
  await models.MyPlanDetail.destroy({
    where: {
      id
    }
  });
  res.send('성공');
};

module.exports.add = async (req, res) => {
  const { title, startAt, endAt } = req.body;

  const where = {
    userId: req.user.id,
    [Op.or]: [
      { startAt: { [Op.between]: [startAt, endAt] } },
      { endAt: { [Op.between]: [startAt, endAt] } },
      { startAt: { [Op.lte]: endAt }, endAt: { [Op.gte]: endAt } }
    ]
  };
  const { count } = await models.MyPlan.findAndCountAll({
    where
  });

  if (count) {
    throw new Error('해당 날짜 사이에 여행계획이 이미 존재합니다.');
  }

  const myPlan = await models.MyPlan.create({
    userId: req.user.id,
    title,
    startAt,
    endAt
  });

  res.send(myPlan);
};

// 여행 세부계획 - 구글 이미지 받아서 이미지 S3에 저장하고 Attachment에 붙이는 과정 있음.
module.exports.addDetail = async (req, res) => {
  const { id } = req.params;
  const {
    detailId,
    travelId,
    title,
    color,
    memo,
    location,
    locationName,
    date,
    time,
    imgsrc,
    phoneNumber
  } = req.body;
  const point = { type: 'Point', coordinates: [location.latitude, location.longitude] }; // GeoJson format: [lng, lat]
  let result;

  // detailId값을 받았으면 이것은 수정입니다.
  if (detailId) {
    // 만약 지정장소를 건들이지 않았다면 사진 업로드처리, 사진보여주는 이미지를 굳이 새로 생성할 필요가 없습니다.
    const find = await models.MyPlanDetail.findOne({
      where: {
        id: detailId
      }
    });

    // 지정 장소를 건드리지 않는 업데이트라면...(img주소가 없거나, 로케이션 이름이 같거나)
    if (find.locationName === locationName || !imgsrc) {
      result = await models.MyPlanDetail.update(
        {
          myPlanId: id,
          title,
          color,
          memo,
          location: point,
          locationName,
          date,
          time,
          mainPhoneNumber: phoneNumber
        },
        {
          where: {
            id: detailId
          }
        }
      );
    } // 지정 장소를 건드렸다면 사진을 새로 업로드 해야합니다.
    else {
      let attachment = null;
      if (imgsrc) {
        // 근대 지정장소가 이미지가 없을 수 도 있으므로 추가.
        // 업로드가 된결과를 반환할거임
        const uploadResult = await uploadImageToS3(imgsrc);

        attachment = await models.Attachment.create({
          originalname: 'googleDownloadImage',
          key: uploadResult.key,
          location: uploadResult.Location // url
        });
      }

      result = await models.MyPlanDetail.update(
        {
          myPlanId: id,
          title,
          color,
          memo,
          location: point,
          locationName,
          date,
          time,
          googleImgSrc: imgsrc,
          imageId: attachment !== null ? attachment.id : null,
          mainPhoneNumber: phoneNumber
        },
        {
          where: {
            id: detailId
          }
        }
      );
    }
  } else if (travelId) {
    // 없고, 여행계획만 존재한다면 세부여행계획을 셍성하는 것입니다.
    const { count } = await models.MyPlanDetail.findAndCountAll({
      where: { myPlanId: id, date }
    });

    // 이미지 주소가 있다면 구글 이미지 파일을 업로드 해야합니다.
    let attachment;
    if (imgsrc) {
      // 업로드가 된결과를 반환할거임
      const uploadResult = await uploadImageToS3(imgsrc);

      attachment = await models.Attachment.create({
        originalname: 'googleDownloadImage',
        key: uploadResult.key,
        location: uploadResult.Location // url
      });
    }
    result = await models.MyPlanDetail.create({
      myPlanId: id,
      title,
      color,
      memo,
      location: point,
      locationName,
      date,
      time,
      googleImgSrc: imgsrc,
      order: count + 1,
      imageId: attachment !== null ? attachment.id : null,
      mainPhoneNumber: phoneNumber
    });
  }

  res.send(result);
};

// 여행 계획 수정
module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { step, planid, title, startAt, endAt } = req.body;

  // 제목 수정
  if (step === 1) {
    const where = {
      userId: req.user.id,
      [Op.or]: [
        { startAt: { [Op.between]: [startAt, endAt] } },
        { endAt: { [Op.between]: [startAt, endAt] } },
        { startAt: { [Op.lte]: endAt }, endAt: { [Op.gte]: endAt } }
      ],
      id: {
        [Op.ne]: planid
      }
    };
    const { count } = await models.MyPlan.findAndCountAll({
      where
    });
    if (count) {
      throw new Error('해당 날짜 사이에 여행계획이 이미 존재합니다.');
    }
  }
  const result = await models.MyPlan.update(
    {
      title,
      startAt,
      endAt
    },
    {
      where: {
        id
      }
    }
  );

  res.send(result);
};

// 여행 계획 삭제
module.exports.remove = async (req, res) => {
  const { id } = req.params;
  await models.MyPlan.destroy({
    where: {
      id
    }
  });
  res.send('성공');
};

module.exports.detailOrdring = async (req, res) => {
  const details = req.body;
  for (let i = 1; i <= details.length; i += 1) {
    await models.MyPlanDetail.update(
      {
        order: i
      },
      {
        where: {
          id: details[i - 1].id
        }
      }
    );
  }
  res.send('성공');
};
