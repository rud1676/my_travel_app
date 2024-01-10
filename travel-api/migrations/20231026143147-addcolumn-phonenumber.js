module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('myPlanDetails', 'mainPhoneNumber', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('myPlanDetails', 'mainPhoneNumber');
  }
};
