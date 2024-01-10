const models = require('../../db');

module.exports.popular = async (req, res) => {
  const result = await models.PopularSearch.findAll({
    order: [['count', 'DESC']],
    limit: 10
  });

  res.send(result);
};

module.exports.recent = async (req, res) => {
  if (!req.user) {
    res.send([]);
  }

  const result = await models.RecentSearch.findAll({
    order: [['createdAt', 'DESC']],
    limit: 10,
    where: { userId: req.user.id },
    attributes: { exclude: ['userId', 'updatedAt'] }
  });

  res.send(result);
};

module.exports.removeRecent = async (req, res) => {
  const { id } = req.params;

  await models.RecentSearch.destroy({
    where: { id, userId: req.user.id }
  });

  res.send({ id });
};
