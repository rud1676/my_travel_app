const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class TravelPackageImage extends Sequelize.Model {
    static associate(_models) {}
  }
  TravelPackageImage.init(
    {
      travelPackageId: Sequelize.DataTypes.INTEGER,
      originalname: Sequelize.DataTypes.STRING,
      key: Sequelize.DataTypes.STRING,
      location: Sequelize.DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'TravelPackageImage',
      tableName: 'travelPackageImages'
    }
  );

  return TravelPackageImage;
};
