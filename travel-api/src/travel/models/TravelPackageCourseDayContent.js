const Sequelize = require('sequelize');

// 코스 상세 내용
module.exports = (sequelize) => {
  class TravelPackageCourseContent extends Sequelize.Model {
    static associate(_models) {}
  }
  TravelPackageCourseContent.init(
    {
      travelPackageCourseId: Sequelize.DataTypes.INTEGER,
      content: Sequelize.DataTypes.TEXT,
      order: Sequelize.DataTypes.INTEGER,
      isFlight: Sequelize.DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'TravelPackageCourseDayContent',
      tableName: 'travelPackageCourseDayContents'
    }
  );
  return TravelPackageCourseContent;
};
