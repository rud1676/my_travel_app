const { Op } = require('sequelize');
const models = require('../../db');

module.exports.travelPackageList = async (req, res) => {
  const { search } = req.query;
  const offset = parseInt(req.query.offset, 10) || 0;
  const limit = parseInt(req.query.limit, 10) || 10;

  let where = {};

  // 검색어 있다면 최신 검색어 업로드 해주고, 유저의 최근 검색어 저장하기
  if (search) {
    where = {
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${search}%`
          }
        },
        {
          subtitle: {
            [Op.like]: `%${search}%`
          }
        }
      ]
    };
  }

  const results = await models.TravelPackage.findAndCountAll({
    where,
    offset,
    limit,
    order: [['createdAt', 'DESC']]
  });

  res.send(results);
};

module.exports.reserveList = async (req, res) => {
  const { search } = req.query;
  const offset = parseInt(req.query.offset, 10) || 0;
  const limit = parseInt(req.query.limit, 10) || 10;

  let where = {};

  if (search) {
    where = {
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${search}%`
          }
        },
        {
          subtitle: {
            [Op.like]: `%${search}%`
          }
        }
      ]
    };
  }

  const results = await models.ReservedTravelPackage.findAndCountAll({
    where,
    offset,
    limit,
    include: [
      {
        model: models.User,
        as: 'user',
        required: true
      },
      {
        model: models.TravelPackage,
        as: 'travelPackage'
      },
      {
        model: models.TravelPackageOption,
        as: 'travelPackageOption'
      }
    ],
    order: [['createdAt', 'DESC']]
  });

  res.send(results);
};
