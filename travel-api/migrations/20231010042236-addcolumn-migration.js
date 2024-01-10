module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('myPlanDetails', 'googleImgSrc', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('myPlanDetails', 'googleImgSrc');
  }
};
