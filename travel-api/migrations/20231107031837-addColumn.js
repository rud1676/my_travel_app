module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('myPlanDetails', 'imageId', {
      references: {
        model: 'attachments' // 참조할 테이블 (DB에 있는 테이블 이름과 같아야한다.)
      },
      type: Sequelize.INTEGER,
      defaultValue: null,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('myPlanDetails', 'imageId');
  }
};
