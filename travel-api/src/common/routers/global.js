const express = require('express');
const asyncHandler = require('express-async-handler');
const controller = require('../controller/global');
const userController = require('../controller/user');
const { imageUpload } = require('../../fileUpload/middlewares');
const { onlyLoginUser } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

// 로그인
router.post('/login', asyncHandler(controller.login));

// 회원가입
router.post('/join', asyncHandler(controller.join));

// sns 회원가입
router.post('/join/sns', imageUpload.single('image'), asyncHandler(controller.snsJoin));

// 어드민 로그인
router.post('/login/admin', asyncHandler(controller.adminLogin));

// 본인
router.get('/profile', asyncHandler(controller.profile));

// 본인 정보 수정
router.put(
  '/profile',
  onlyLoginUser,
  imageUpload.single('image'),
  asyncHandler(userController.myUpdate)
);

router.delete('/withdraw', onlyLoginUser, asyncHandler(userController.withdraw));

// kakao 로그인
router.post('/login/kakao', asyncHandler(controller.kakaoLogin));

// naver 로그인
router.post('/login/naver', asyncHandler(controller.naverLogin));

module.exports = router;
