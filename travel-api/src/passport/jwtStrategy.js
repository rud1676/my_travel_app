const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('config');

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const models = require('../db');
const { ErrInfo, CFErr } = require('../err');

module.exports.jwtStrategy = () => {
  passport.use(
    'jwt',
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.JWT.JWT_SECRET
      },
      async (jwtPayload, done) => {
        const exUser = await models.User.findOne({
          where: { id: jwtPayload.id },
          include: [
            {
              model: models.Attachment,
              as: 'image'
            }
          ]
        });
        if (exUser) {
          return done(null, exUser);
        }
        return done(new CFErr(ErrInfo.UnAuthorized));
      }
    )
  );
};

module.exports.checkUserToken = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, async (_err, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};
