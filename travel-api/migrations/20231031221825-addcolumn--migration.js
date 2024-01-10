/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('travelPackages', 'totaldays', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('travelPackages', 'totaldays');
  }
};
