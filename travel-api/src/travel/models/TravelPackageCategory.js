const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class TravelPackageCategory extends Sequelize.Model {
    static associate(_models) {}
  }
  TravelPackageCategory.init(
    {
      travelPackageId: Sequelize.DataTypes.INTEGER, // 여행 패키지 아이디
      title: Sequelize.DataTypes.STRING, // 카테고리 제목
      content: Sequelize.DataTypes.TEXT // 카테고리 내용
    },
    {
      sequelize,
      modelName: 'TravelPackageCategory',
      tableName: 'travelPackageCategories'
    }
  );
  return TravelPackageCategory;
};
