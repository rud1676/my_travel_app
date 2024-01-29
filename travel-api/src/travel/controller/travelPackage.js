const { Op } = require('sequelize');
const models = require('../../db');
const { emptySuccessResponse, reservedTravelPackageStatus } = require('../../define');
const { CFErr, ErrInfo } = require('../../err');

module.exports.detail = async (req, res) => {
  const { id } = req.params;
  const travel = await models.TravelPackage.findOne({
    where: {
      id
    },
    include: [
      {
        model: models.TravelPackageOption,
        as: 'options',
        attributes: { exclude: ['updatedAt', 'TravelPackageId'] }
      },
      {
        model: models.TravelPackageCategory,
        as: 'categories',
        attributes: { exclude: ['updatedAt', 'TravelPackageId'] }
      },
      {
        model: models.TravelPackageCourse,
        as: 'courses',
        attributes: { exclude: ['updatedAt', 'TravelPackageId'] },
        include: [
          {
            model: models.TravelPackageCourseDayContent,
            as: 'contents',
            attributes: { exclude: ['updatedAt', 'TravelPackageCourseId'] },
            order: [['order', 'ASC']]
          }
        ]
      },
      {
        model: models.TravelPackageImage,
        as: 'images',
        attributes: { exclude: ['updatedAt', 'TravelPackageId'] }
      }
    ],
    attributes: { exclude: ['deletedAt', 'isTemp', 'isPublic'] }
  });

  if (travel) {
    await models.TravelPackage.update(
      {
        viewCount: travel.viewCount + 1
      },
      {
        where: { id }
      }
    );
  }

  res.send(travel);
};

module.exports.list = async (req, res) => {
  const { order, search } = req.query;

  let orderBy = [];
  if (order === 'viewCount') {
    // 조회수 내림차순
    orderBy = [['viewCount', 'DESC']];
  } else if (order === 'createdAt') {
    // 최신순
    orderBy = [['createdAt', 'DESC']];
  }

  let searchWhere = {};

  // 검색어 있다면 최신 검색어 업로드 해주고, 유저의 최근 검색어 저장하기
  if (search) {
    searchWhere = {
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
        },
        {
          location: {
            [Op.like]: `%${search}%`
          }
        }
      ]
    };

    const popularSearch = await models.PopularSearch.findOrCreate({
      where: {
        search
      },
      defaults: {
        search,
        count: 0
      }
    });

    await models.PopularSearch.update(
      {
        count: popularSearch[0].count + 1
      },
      {
        where: {
          id: popularSearch[0].id
        }
      }
    );

    if (req.user) {
      const recentSearch = await models.RecentSearch.findOne({
        where: {
          search,
          userId: req.user.id
        }
      });
      if (!recentSearch) {
        await models.RecentSearch.create({
          search,
          userId: req.user.id
        });
      } else {
        await models.RecentSearch.update(
          {
            createdAt: models.sequelize.fn('NOW')
          },
          {
            where: {
              id: recentSearch.id
            }
          }
        );
      }
    }
  }

  const travels = await models.TravelPackage.findAll({
    where: searchWhere,
    attributes: ['id', 'title', 'subtitle', 'viewCount', 'location'],
    include: [
      {
        model: models.TravelPackageOption,
        as: 'options',
        attributes: { exclude: ['createdAt', 'updatedAt', 'travelPackageId'] },
        limit: 1,
        order: [['price', 'ASC']]
      },
      {
        model: models.TravelPackageImage,
        as: 'images',
        separate: true,
        attributes: ['location']
      }
    ],
    order: orderBy
  });
  // 가격은 Option로 받아와서 배열로 다시정렬
  if (order === 'priceAsc') {
    travels.sort((a, b) => {
      if (a.options[0] && b.options[0]) {
        return b.options[0].price - a.options[0].price;
      }
      if (a.options[0]) return 1; // if only a has an option, put a before b
      if (b.options[0]) return -1; // if only b has an option, put a after b
      return 0; // if neither has an option, don't change order
    });
  } else if (order === 'priceDesc') {
    // 가격 내림차순
    travels.sort((a, b) => {
      if (a.options[0] && b.options[0]) {
        return a.options[0].price - b.options[0].price;
      }
      if (a.options[0]) return -1; // if only a has an option, put a before b
      if (b.options[0]) return 1; // if only b has an option, put a after b
      return 0; // if neither has an option, don't change order
    });

    orderBy = [['price', 'DESC']];
  }

  res.send(travels);
};

module.exports.add = async (req, res) => {
  const { title, subtitle, guide, policy, location, totaldays } = req.body;

  const transaction = await models.sequelize.transaction();

  try {
    const travel = await models.TravelPackage.create(
      {
        userId: req.user.id,
        title,
        totaldays,
        subtitle,
        location,
        guide,
        policy,
        // 아래 구현은 추후에 하자
        isTemp: false,
        isPublic: false // 공개
      },
      {
        transaction
      }
    );
    let fileData;
    if (req.files && req.files.length > 0) {
      fileData = req.files.map((file) => ({
        travelPackageId: travel.id,
        originalname: file.originalname,
        key: file.key,
        location: file.location
      }));
    }
    if (fileData) {
      await models.TravelPackageImage.bulkCreate(fileData, { transaction });
    }

    await transaction.commit();
    res.send(travel);
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

module.exports.addInfo = async (req, res) => {
  const { id } = req.params;
  const { options, categories, courses } = req.body;

  const find = await models.TravelPackage.findOne({
    where: {
      id
    }
  });

  if (!find) {
    throw new CFErr(ErrInfo.BadRequest);
  }

  try {
    await models.sequelize.transaction(async (transaction) => {
      // 현재 이용권은 완료 처리
      const insertData = options.map((option) => ({
        travelPackageId: id,
        title: option.title,
        content: option.content,
        price: option.price
      }));

      await models.TravelPackageOption.destroy({
        where: {
          travelPackageId: id
        },
        transaction
      });

      await models.TravelPackageOption.bulkCreate(insertData, {
        transaction
      });

      await models.TravelPackageCategory.destroy({
        where: {
          travelPackageId: id
        },
        transaction
      });

      await models.TravelPackageCategory.bulkCreate(
        categories.map((category) => ({
          travelPackageId: id,
          title: category.title,
          content: category.content
        })),
        {
          transaction
        }
      );

      await models.TravelPackageCourse.destroy({
        where: {
          travelPackageId: id
        },
        transaction
      });

      for (let i = 0; i < courses.length; i++) {
        const course = await models.TravelPackageCourse.create(
          {
            travelPackageId: id,
            title: courses[i].title,
            day: courses[i].day
          },
          {
            transaction
          }
        );

        const courseContents = courses[i].contents;
        const insertCourseData = courseContents.map((content, index) => ({
          travelPackageCourseId: course.id,
          content: content.content,
          order: index,
          isFlight: content.isFlight
        }));

        await models.TravelPackageCourseDayContent.bulkCreate(insertCourseData, {
          transaction
        });
      }

      await models.TravelPackage.update(
        {
          isTemp: false,
          isPublic: true
        },
        {
          where: {
            id
          },
          transaction
        }
      );
    });
  } catch (err) {
    console.log(err);
    throw err;
  }

  res.send(emptySuccessResponse);
};

// 여행 예약
module.exports.reserve = async (req, res) => {
  const { id } = req.params;
  const { travelPackageOptionId, adultCount, childCount, startAt, endAt } = req.body;

  const findTravelPackageOption = await models.TravelPackageOption.findOne({
    where: {
      id: travelPackageOptionId
    }
  });
  const result = await models.ReservedTravelPackage.create({
    userId: req.user.id,
    travelPackageId: id,
    travelPackageOptionId,
    totalPrice: findTravelPackageOption.price * (adultCount + childCount),
    adultCount,
    childCount,
    startAt,
    endAt,
    status: reservedTravelPackageStatus.waiting
  });

  res.send(result);
};

module.exports.reserveList = async (req, res) => {
  const result = await models.ReservedTravelPackage.findAll({
    where: {
      userId: req.user.id
    },
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: models.TravelPackage,
        as: 'travelPackage',
        attributes: {
          exclude: ['createdAt', 'deletedAt', 'isTemp', 'isPublic']
        },
        include: [
          {
            model: models.TravelPackageImage,
            as: 'images',
            attributes: { exclude: ['updatedAt', 'TravelPackageId'] }
          }
        ]
      },
      {
        model: models.TravelPackageOption,
        as: 'travelPackageOption',
        attributes: ['id', 'title', 'price']
      }
    ]
  });
  res.send(result);
};

module.exports.reserveConfirm = async (req, res) => {
  const { id } = req.params;

  const { status } = req.body;

  await models.ReservedTravelPackage.update(
    {
      status
    },
    {
      where: {
        id
      }
    }
  );

  res.send(emptySuccessResponse);
};

module.exports.reserveDetail = async (req, res) => {
  const { id } = req.params;

  const result = await models.ReservedTravelPackage.findOne({
    where: {
      id
    },

    include: [
      {
        model: models.TravelPackage,
        as: 'travelPackage',
        attributes: {
          exclude: ['deletedAt', 'isTemp', 'isPublic']
        }
      },
      {
        model: models.TravelPackageOption,
        as: 'travelPackageOption',
        attributes: { exclude: ['updatedAt', 'TravelPackageId'] }
      }
    ]
  });
  res.send(result);
};

// 여행 수정
module.exports.update = async (req, res) => {
  const { title, subtitle, guide, policy, location, removeImageIds, totaldays } = req.body;
  const { id } = req.params;

  const find = await models.TravelPackage.findOne({
    where: {
      id
    }
  });
  if (!find) {
    throw new CFErr(ErrInfo.BadRequest);
  }

  const transaction = await models.sequelize.transaction();

  try {
    const travel = await models.TravelPackage.update(
      {
        title,
        subtitle,
        location,
        totaldays,
        guide,
        policy
      },
      {
        where: {
          id
        },
        transaction
      }
    );

    let fileData;
    if (req.files && req.files.length > 0) {
      fileData = req.files.map((file) => ({
        travelPackageId: find.id,
        originalname: file.originalname,
        key: file.key,
        location: file.location
      }));
    }
    if (fileData) {
      await models.TravelPackageImage.bulkCreate(fileData, { transaction });
    }

    if (removeImageIds) {
      await models.TravelPackageImage.destroy({
        where: { id: { [Op.in]: removeImageIds } },
        transaction
      });
    }

    await transaction.commit();
    res.send(travel);
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

// 여행 삭제
module.exports.remove = async (req, res) => {
  const { id } = req.params;

  await models.TravelPackage.destroy({
    where: {
      id
    }
  });

  res.send(emptySuccessResponse);
};
