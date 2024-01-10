/* eslint-disable no-console */
const multer = require('multer');

const ErrInfo = {
  Internal: { statusCode: 500, code: 1, message: 'internal error' },
  NotFound: { statusCode: 404, code: 2, message: 'not found' },
  UnAuthorized: {
    statusCode: 401,
    code: 3,
    message: 'unauthorized',
    logLevel: 'warn'
  },
  BadRequest: { statusCode: 400, code: 4, message: 'bad request' },
  UserExist: { statusCode: 400, code: 5, message: 'UserExist' },
  UserNotExist: {
    statusCode: 400,
    code: 6,
    message: '해당 메일 계정이 존재하지 않습니다.'
  },
  PasswordNotMatch: {
    statusCode: 400,
    code: 7,
    message: '패스워드가 맞지 않습니다.'
  },
  FileExtNotAllowed: {
    statusCode: 400,
    code: 12,
    message: '허용되지 않는 파일 형식입니다.'
  },
  DuplicatedValue: {
    statusCode: 400,
    code: 31,
    message: '중복된 값입니다.'
  },
  FileTooLarge: {
    statusCode: 400,
    code: 9,
    message: '업로드 파일 크기가 10 메가바이트를 초과했습니다.'
  },
  UnexpectedFile: {
    statusCode: 400,
    code: 10,
    message: '업로드 요청하지 않은 필드 입니다.'
  },
  LimitFileCount: {
    statusCode: 400,
    code: 11,
    message: '업로드 할 파일 최대 갯수는 5개입니다.'
  }
};

class CustomError extends Error {
  constructor(errInfo) {
    super(errInfo);
    this.statusCode = errInfo.statusCode;
    this.message = errInfo.message;
    this.code = errInfo.code;
    this.logLevel = errInfo.logLevel;
    this.params = errInfo.params;
  }
}

module.exports.errHandler = (err, _req, res, _next) => {
  let resErr;

  res.set('Cache-Control', 'no-store');
  if (err instanceof CustomError) {
    console.log(err);
    resErr = err;
  } else if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      resErr = new CustomError(ErrInfo.FileTooLarge);
    } else if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      resErr = new CustomError(ErrInfo.UnexpectedFile);
    } else if (err.code === 'LIMIT_FILE_COUNT') {
      resErr = new CustomError(ErrInfo.LimitFileCount);
    } else {
      resErr = new CustomError(ErrInfo.Internal);
    }
  } else if (err.parent && err.parent.code === 'ER_DUP_ENTRY') {
    // db query error
    resErr = new CustomError(ErrInfo.DuplicatedValue);
  } else {
    // resErr = new TockError(ErrInfo.Internal);
    console.error({ err, stack: err.stack });
    resErr = new CustomError({
      statusCode: 500,
      code: 1,
      message: err.toString()
    });
  }

  res.status(resErr.statusCode).send({
    message: resErr.message,
    code: resErr.code,
    params: resErr.params
  });
};

module.exports.ErrInfo = ErrInfo;
module.exports.CFErr = CustomError;
