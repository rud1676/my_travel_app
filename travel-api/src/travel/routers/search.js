const express = require('express');
const asyncHandler = require('express-async-handler');
const controller = require('../controller/search');
const { onlyLoginUser } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

// 인기 검색어
router.get('/popular', asyncHandler(controller.popular));

// 최근 검색어
router.get('/recent', onlyLoginUser, asyncHandler(controller.recent));

// 최근 검색어 삭제
router.delete('/recent/:id', onlyLoginUser, asyncHandler(controller.removeRecent));

module.exports = router;
