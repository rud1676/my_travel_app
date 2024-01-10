const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class TravelPackageOption extends Sequelize.Model {
    static associate(_models) {}
  }
  TravelPackageOption.init(
    {
      travelPackageId: Sequelize.DataTypes.INTEGER, // 여행 패키지 아이디
      title: Sequelize.DataTypes.STRING, // 옵션 제목
      content: Sequelize.DataTypes.TEXT, // 옵션 내용
      price: Sequelize.DataTypes.INTEGER // 여행 가격
    },
    {
      sequelize,
      modelName: 'TravelPackageOption',
      tableName: 'travelPackageOptions',
      paranoid: true
    }
  );
  return TravelPackageOption;
};
