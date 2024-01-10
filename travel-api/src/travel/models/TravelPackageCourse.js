const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class TravelPackageCourse extends Sequelize.Model {
    static associate(models) {
      this.hasMany(models.TravelPackageCourseDayContent, {
        as: 'contents'
      });
    }
  }
  TravelPackageCourse.init(
    {
      travelPackageId: Sequelize.DataTypes.INTEGER,
      title: Sequelize.DataTypes.STRING,
      day: Sequelize.DataTypes.INTEGER // 1일차 2일차 3일차 ...
    },
    {
      sequelize,
      modelName: 'TravelPackageCourse',
      tableName: 'travelPackageCourses',
      paranoid: true
    }
  );
  return TravelPackageCourse;
};
