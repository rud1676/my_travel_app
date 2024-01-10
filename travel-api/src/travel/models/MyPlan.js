const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class MyPlan extends Sequelize.Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
      this.hasMany(models.MyPlanDetail, {
        foreignKey: 'myPlanId',
        as: 'details'
      });
    }
  }
  MyPlan.init(
    {
      userId: Sequelize.DataTypes.INTEGER, // 생성자
      title: Sequelize.DataTypes.STRING, // 여행이름
      startAt: Sequelize.DataTypes.DATEONLY, // 시작날짜
      endAt: Sequelize.DataTypes.DATEONLY // 도착날짜
    },
    {
      sequelize,
      modelName: 'MyPlan',
      tableName: 'myPlans',
      paranoid: true
    }
  );
  return MyPlan;
};
