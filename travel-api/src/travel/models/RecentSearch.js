const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class RecentSearch extends Sequelize.Model {
    static associate(_models) {}
  }
  RecentSearch.init(
    {
      search: Sequelize.DataTypes.STRING,
      userId: Sequelize.DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'RecentSearch',
      tableName: 'recentSearches'
    }
  );
  return RecentSearch;
};
