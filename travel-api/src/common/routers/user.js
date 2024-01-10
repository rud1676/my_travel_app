const express = require('express');
const asyncHandler = require('express-async-handler');
const controller = require('../controller/user');
const { imageUpload } = require('../../fileUpload/middlewares');
const { onlyAdminUser } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.get('/', asyncHandler(controller.list));

// 프로젝트작성시 회원정보
router.get('/userinfo', asyncHandler(controller.userInfo));

// 상세
router.get('/:id', asyncHandler(controller.detail));

// 업데이트
router.put('/:id', imageUpload.single('image'), asyncHandler(controller.update));

// 삭제
router.delete('/:id', onlyAdminUser, asyncHandler(controller.delete));

module.exports = router;
