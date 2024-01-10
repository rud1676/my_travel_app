const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const passportConfig = require('./passport');
const { errHandler } = require('./err');
require('dotenv').config();

const userRouter = require('./common/routers/user');
const globalRouter = require('./common/routers/global');
const travleRouter = require('./travel/routers');

const { checkUserToken } = require('./passport/jwtStrategy');

const logger = morgan('dev');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:4311',
      'http://localhost:4312',
      'http://127.0.0.1:4312',
      'http://127.0.0.1:4313',
      'http://localhost:4313',
      'https://main.d2o87pjcdzsphq.amplifyapp.com',
      'https://main.d2p7j3mpsduh8u.amplifyapp.com'
    ],
    credentials: true
  })
);
app.use(logger);
app.use(express.json({ limit: '15mb' }));
app.use(
  express.urlencoded({
    extended: true
  })
);

passportConfig();

const prefix = '/api';
const registerRouters = (router) => {
  router.use(`${prefix}`, globalRouter); //
  router.use(`${prefix}/users`, userRouter); // 유저 (로그인)
  router.use(`${prefix}/travel`, travleRouter); // 패키지여행
};

const apiRouter = express.Router();
registerRouters(apiRouter);

app.use(checkUserToken, apiRouter);
app.use(errHandler);

const PORT = process.env.PORT || 4311;

const handleListening = () => console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
