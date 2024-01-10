require('dotenv').config();
const config = require('config');
const Sequelize = require('sequelize');

const dbconfig = config.sequelize;

const db = {};

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 공통
db.User = require('./common/models/User')(sequelize);
db.Attachment = require('./common/models/Attachment')(sequelize);

// travle
db.MyPlan = require('./travel/models/MyPlan')(sequelize);
db.MyPlanDetail = require('./travel/models/MyPlanDetail')(sequelize);
db.PopularSearch = require('./travel/models/PopularSearch')(sequelize);
db.RecentSearch = require('./travel/models/RecentSearch')(sequelize);
db.ReservedTravelPackage = require('./travel/models/ReservedTravelPackage')(sequelize);
db.TravelPackage = require('./travel/models/TravelPackage')(sequelize);
db.TravelPackageCategory = require('./travel/models/TravelPackageCategory')(sequelize);
db.TravelPackageCourse = require('./travel/models/TravelPackageCourse')(sequelize);
db.TravelPackageCourseDayContent = require('./travel/models/TravelPackageCourseDayContent')(
  sequelize
);
db.TravelPackageImage = require('./travel/models/TravelPackageImage')(sequelize);
db.TravelPackageOption = require('./travel/models/TravelPackageOption')(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
