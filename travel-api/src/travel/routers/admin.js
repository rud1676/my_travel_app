const express = require('express');
const asyncHandler = require('express-async-handler');
const controller = require('../controller/admin');

const router = express.Router({ mergeParams: true });

// 여행 패키지 리스트
router.get('/travelPackages', asyncHandler(controller.travelPackageList));

// 예약 리스트
router.get('/reservedPackages', asyncHandler(controller.reserveList));

module.exports = router;
