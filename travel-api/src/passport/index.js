const { localStrategy } = require('./localStrategy');
const { jwtStrategy } = require('./jwtStrategy');

const passportConfig = () => {
  // 이메일 로그인
  localStrategy();

  // jwt 로그인
  jwtStrategy();
};

module.exports = passportConfig;
