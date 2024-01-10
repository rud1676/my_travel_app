const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class ReservedTravelPackage extends Sequelize.Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
      this.belongsTo(models.TravelPackage, {
        foreignKey: 'travelPackageId',
        as: 'travelPackage'
      });
      this.belongsTo(models.TravelPackageOption, {
        foreignKey: 'travelPackageOptionId',
        as: 'travelPackageOption'
      });
    }
  }
  ReservedTravelPackage.init(
    {
      userId: Sequelize.DataTypes.INTEGER, // 구매자
      travelPackageId: Sequelize.DataTypes.INTEGER, // 여행 패키지 아이디
      travelPackageOptionId: Sequelize.DataTypes.INTEGER, // 여행 패키지 옵션 아이디
      totalPrice: Sequelize.DataTypes.STRING, // 구매한 여행 총 가격
      adultCount: Sequelize.DataTypes.INTEGER, // 성인 인원
      childCount: Sequelize.DataTypes.INTEGER, // 아이들 인원
      startAt: Sequelize.DataTypes.DATEONLY, // 출발
      endAt: Sequelize.DataTypes.DATEONLY, // 도착
      status: Sequelize.DataTypes.INTEGER // 예약 상태
      // 0: 결제 대기 상담 대기중
      // 1: 결제 완료
      // 2: 취소
      // 3: 예약 완료
    },
    {
      sequelize,
      modelName: 'ReservedTravelPackage',
      tableName: 'reservedTravelPackages',
      paranoid: true
    }
  );
  return ReservedTravelPackage;
};
