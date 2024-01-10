module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('travelPackageOptions', 'deletedAt', {
      type: Sequelize.DataTypes.DATE,
      defaultValue: null,
      allowNull: true
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('travelPackageOptions', 'deletedAt');
  }
};
