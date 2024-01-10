module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'removedEmail', {
      type: Sequelize.DataTypes.STRING
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('users', 'removedEmail');
  }
};
