/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('reservedTravelPackages', 'startAt', {
      type: Sequelize.DATEONLY
    });
    await queryInterface.changeColumn('reservedTravelPackages', 'endAt', {
      type: Sequelize.DATEONLY
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('reservedTravelPackages', 'startAt', {
      type: Sequelize.DATE
    });
    await queryInterface.changeColumn('reservedTravelPackages', 'endAt', {
      type: Sequelize.DATE
    });
  }
};
