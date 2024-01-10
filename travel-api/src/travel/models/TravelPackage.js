const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class TravelPackage extends Sequelize.Model {
    static associate(models) {
      this.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
      this.hasMany(models.TravelPackageOption, {
        as: 'options'
      });
      this.hasMany(models.TravelPackageCategory, {
        as: 'categories'
      });
      this.hasMany(models.TravelPackageCourse, {
        as: 'courses'
      });
      this.hasMany(models.TravelPackageImage, {
        as: 'images'
      });
    }
  }
  TravelPackage.init(
    {
      userId: Sequelize.DataTypes.INTEGER, // 생성자
      title: Sequelize.DataTypes.STRING, // 여행 타이틀
      subTitle: Sequelize.DataTypes.STRING, // 여행 부제 타이틀
      totaldays: Sequelize.DataTypes.INTEGER, // 여행 일수
      location: Sequelize.DataTypes.STRING, // 여행 장소 이름
      viewCount: Sequelize.DataTypes.INTEGER, // 조회수
      guide: Sequelize.DataTypes.TEXT, // 필수 안내
      policy: Sequelize.DataTypes.TEXT, // 예약 및 취소 규정
      isTemp: Sequelize.DataTypes.BOOLEAN, // 임시저장 여부
      isPublic: Sequelize.DataTypes.BOOLEAN // 공개 여부
    },
    {
      sequelize,
      modelName: 'TravelPackage',
      tableName: 'travelPackages',
      paranoid: true
    }
  );
  return TravelPackage;
};
