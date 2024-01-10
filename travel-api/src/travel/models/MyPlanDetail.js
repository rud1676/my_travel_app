const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class MyPlanDetail extends Sequelize.Model {
    static associate(models) {
      this.belongsTo(models.Attachment, {
        as: 'image',
        foreignKey: 'imageId',
        sourceKey: 'imageId'
      });
    }
  }
  MyPlanDetail.init(
    {
      myPlanId: Sequelize.DataTypes.INTEGER, // 나의 여행 계획
      title: Sequelize.DataTypes.STRING, // 일정 제목
      color: Sequelize.DataTypes.INTEGER, // 테그 컬러
      memo: Sequelize.DataTypes.TEXT, // 메모
      location: Sequelize.DataTypes.GEOMETRY, // 상세 일정 장소(좌표값)
      locationName: Sequelize.DataTypes.STRING, // 장소 이름
      time: Sequelize.DataTypes.TIME, // 상세 일정 시간
      date: Sequelize.DataTypes.DATEONLY, // 상세 일정 날짜
      order: Sequelize.DataTypes.INTEGER, // 상세 일정 순서
      googleImgSrc: Sequelize.DataTypes.TIME, // 구글 이미지 url
      imageId: Sequelize.DataTypes.INTEGER, // 구글 이미지 사진,
      mainPhoneNumber: Sequelize.DataTypes.STRING // 구글 대표번호저장
    },
    {
      sequelize,
      modelName: 'MyPlanDetail',
      tableName: 'myPlanDetails'
    }
  );
  return MyPlanDetail;
};
