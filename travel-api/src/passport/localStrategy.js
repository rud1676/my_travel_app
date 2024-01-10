const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcrypt');

const { User } = require('../db');
const { ErrInfo } = require('../err');

module.exports.localStrategy = () => {
  passport.use(
    'local',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (userMail, password, done) => {
        const user = await User.findOne({
          where: {
            email: userMail
          }
        });
        if (user === null) {
          return done(null, false, { reason: ErrInfo.UserNotExist.message });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return done(null, false, { reason: ErrInfo.PasswordNotMatch.message });
        }

        return done(null, user);
      }
    )
  );
};
