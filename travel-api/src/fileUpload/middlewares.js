const multer = require('multer');
const config = require('config');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const uuid = require('uuid');
const path = require('path');
const { Err, ErrInfo } = require('../err');

AWS.config.loadFromPath(`${__dirname}/awsconfig.json`);

const imageExt = ['jpg', 'jpeg', 'bmp', 'png'];

const diskStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'uploads/files/');
  },
  filename: (_req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, `${uuid.v4()}${extension}`);
  }
});

const s3Storage = multerS3({
  s3: new AWS.S3(),
  bucket: config.uploader.bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key(req, file, cb) {
    cb(null, `${Date.now()}_${path.basename(file.originalname)}`);
  }
});

// myPlan 세부여행계획작성 - google이미지 다운로드를 위해 추가
module.exports.AWS = AWS;

module.exports.fileUpload = multer({
  limits: {
    fileSize: 3000000
  },
  storage: config.uploader.useS3 ? s3Storage : diskStorage
});

module.exports.imageUpload = multer({
  limits: {
    fileSize: 3000000
  },
  fileFilter: (_req, file, cb) => {
    if (imageExt.includes(path.extname(file.originalname))) {
      cb(new Err(ErrInfo.FileExtNotAllowed));
    } else {
      cb(null, true);
    }
  },
  storage: config.uploader.useS3 ? s3Storage : diskStorage
});

module.exports.deleteS3File = async (fileKey) => {
  const s3 = new AWS.S3();
  s3.deleteObject({
    Bucket: 'jootravel',
    Key: fileKey
  });
};
