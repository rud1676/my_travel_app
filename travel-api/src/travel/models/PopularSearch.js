const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class PopularSearch extends Sequelize.Model {
    static associate(_models) {}
  }
  PopularSearch.init(
    {
      search: Sequelize.DataTypes.STRING,
      count: Sequelize.DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'PopularSearch',
      tableName: 'popularSearches'
    }
  );
  return PopularSearch;
};
