const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Attachment extends Sequelize.Model {
    static associate(_models) {}
  }
  Attachment.init(
    {
      originalname: Sequelize.DataTypes.STRING, // 원본 이름
      key: Sequelize.DataTypes.STRING, // aws key
      location: Sequelize.DataTypes.STRING // aws 파일 경로
    },
    {
      sequelize,
      modelName: 'Attachment',
      tableName: 'attachments'
    }
  );
  return Attachment;
};
