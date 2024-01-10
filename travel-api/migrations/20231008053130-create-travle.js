const { deletedAtCreate, defaultCreate } = require('../migrationLib/createHelper');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('travelPackages', {
      ...deletedAtCreate,
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      title: {
        type: Sequelize.STRING
      },
      subTitle: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      viewCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      guide: {
        type: Sequelize.TEXT
      },
      policy: {
        type: Sequelize.TEXT
      },
      isTemp: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isPublic: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });

    await queryInterface.createTable('travelPackageCategories', {
      ...defaultCreate,
      travelPackageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'travelPackages'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      }
    });

    await queryInterface.createTable('travelPackageCourses', {
      ...deletedAtCreate,
      travelPackageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'travelPackages'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      title: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.INTEGER
      }
    });

    await queryInterface.createTable('travelPackageCourseDayContents', {
      ...defaultCreate,
      travelPackageCourseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'travelPackageCourses'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      content: {
        type: Sequelize.TEXT
      },
      order: {
        type: Sequelize.INTEGER
      },
      isFlight: {
        type: Sequelize.BOOLEAN
      }
    });

    await queryInterface.createTable('travelPackageImages', {
      ...defaultCreate,
      travelPackageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'travelPackages'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      originalname: {
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.TEXT
      }
    });

    await queryInterface.createTable('travelPackageOptions', {
      ...defaultCreate,
      travelPackageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'travelPackages'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      }
    });

    await queryInterface.createTable('reservedTravelPackages', {
      ...deletedAtCreate,
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      travelPackageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'travelPackages'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      travelPackageOptionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'travelPackageOptions'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      totalPrice: {
        type: Sequelize.STRING
      },
      adultCount: {
        type: Sequelize.STRING
      },
      childCount: {
        type: Sequelize.INTEGER
      },
      startAt: {
        type: Sequelize.DATE
      },
      endAt: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER
      }
    });

    await queryInterface.createTable('myPlans', {
      ...deletedAtCreate,
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      title: {
        type: Sequelize.STRING
      },
      startAt: {
        type: Sequelize.DATEONLY
      },
      endAt: {
        type: Sequelize.DATEONLY
      }
    });

    await queryInterface.createTable('myPlanDetails', {
      ...defaultCreate,
      myPlanId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'myPlans'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      title: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.INTEGER
      },
      memo: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.GEOMETRY
      },
      locationName: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.TIME
      },
      date: {
        type: Sequelize.DATEONLY
      },
      order: {
        type: Sequelize.INTEGER
      }
    });

    await queryInterface.createTable('popularSearches', {
      ...defaultCreate,
      search: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      }
    });

    await queryInterface.createTable('recentSearches', {
      ...defaultCreate,
      search: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('reservedTravelPackages');
    await queryInterface.dropTable('travelPackageOptions');
    await queryInterface.dropTable('travelPackageImages');
    await queryInterface.dropTable('travelPackageCourseDayContents');
    await queryInterface.dropTable('travelPackageCourse');
    await queryInterface.dropTable('travelPackageCategories');
    await queryInterface.dropTable('travelPackages');

    await queryInterface.dropTable('myPlanDetails');
    await queryInterface.dropTable('myPlans');

    await queryInterface.dropTable('popularSearches');
    await queryInterface.dropTable('recentSearches');
  }
};
