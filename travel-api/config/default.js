module.exports = {
  sequelize: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: 'travel',
    host: process.env.DB_URL || '127.0.0.1',
    dialect: 'mysql',
    port: '3306',
    define: {
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_general_ci'
      }
    },
    logging: false
  },
  uploader: {
    useS3: true,
    bucket: process.env.S3_BUCKET_NAME || 'travel-package'
  },
  JWT: {
    JWT_SECRET: 'travel'
  },
  fileInfo: {
    destination: './uploads/'
  }
};
