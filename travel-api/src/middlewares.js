const { ErrInfo, CFErr } = require('./err');

module.exports.onlyLoginUser = (req, _res, next) => {
  if (req.user) {
    next();
    return;
  }
  throw new CFErr(ErrInfo.UnAuthorized);
};

module.exports.onlyAdminUser = (req, _res, next) => {
  if (req.user && req.user.admin) {
    next();
    return;
  }
  throw new CFErr(ErrInfo.UnAuthorized);
};
