const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class User extends Sequelize.Model {
    static associate(models) {
      this.hasOne(models.Attachment, {
        as: 'image',
        foreignKey: 'id',
        sourceKey: 'imageId'
      });
    }
  }
  User.init(
    {
      email: Sequelize.DataTypes.STRING, // 이메일
      removedEmail: Sequelize.DataTypes.STRING, // 탈퇴시 이메일
      password: Sequelize.DataTypes.STRING, // 비번
      nickname: Sequelize.DataTypes.STRING, // 닉네임
      name: Sequelize.DataTypes.STRING, // 이름
      phone: Sequelize.DataTypes.STRING, // 전화 번호
      admin: Sequelize.DataTypes.BOOLEAN, // 관리자인지
      gender: Sequelize.DataTypes.INTEGER, // 성별
      birth: Sequelize.DataTypes.DATEONLY, // 생일
      nation: Sequelize.DataTypes.STRING, // 국가
      provider: Sequelize.DataTypes.STRING, // 소셜 로그인 (kakao), 이메일 로그인 ..
      snsId: Sequelize.DataTypes.STRING, // sns id
      lastLoginAt: Sequelize.DataTypes.DATE, // 마지막 로그인 시간
      alarm: Sequelize.DataTypes.BOOLEAN, // 알람 여부
      alarmTime: Sequelize.DataTypes.TIME, // 알람 시간
      imageId: Sequelize.DataTypes.INTEGER // 프로필 사진
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      paranoid: true
    }
  );
  return User;
};
