const express = require('express');
const packageRouter = require('./travelPackage');
const myPlanRouter = require('./myPlan');
const searchRouter = require('./search');

const router = express.Router({ mergeParams: true });

// 여행 패키지
router.use('/packages', packageRouter);

// 내 계획
router.use('/myPlan', myPlanRouter);

// 검색어
router.use('/search', searchRouter);

// 어드민
router.use('/admin', require('./admin'));

module.exports = router;
