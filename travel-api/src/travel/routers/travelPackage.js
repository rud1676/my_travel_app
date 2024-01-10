const express = require('express');
const asyncHandler = require('express-async-handler');
const controller = require('../controller/travelPackage');
const { onlyLoginUser, onlyAdminUser } = require('../../middlewares');
const { imageUpload } = require('../../fileUpload/middlewares');

const router = express.Router({ mergeParams: true });

// 여행 예약 리스트
router.get('/reserve', onlyLoginUser, asyncHandler(controller.reserveList));

// 리스트
router.get('/', asyncHandler(controller.list));

// 여행 추가 - 관리자
router.post('/', onlyAdminUser, imageUpload.array('images'), asyncHandler(controller.add));

// 여행 상세
router.get('/:id', asyncHandler(controller.detail));

// todo 여행 수정 - 관리자
router.put('/:id', onlyAdminUser, imageUpload.array('images'), asyncHandler(controller.update));

// 여행 삭제 - 관리자
router.delete('/:id', onlyAdminUser, asyncHandler(controller.remove));

// 여행 예약하기
router.post('/:id/reserve', onlyLoginUser, asyncHandler(controller.reserve));

// 여행 예약 상세
router.get('/reserve/:id', onlyLoginUser, asyncHandler(controller.reserveDetail));

// 여행 예약 결정
router.put('/reserve/:id/confirm', onlyAdminUser, asyncHandler(controller.reserveConfirm));

// 여행 부가 정보 추가 및 업데이트
router.post('/:id/addInfo', onlyAdminUser, asyncHandler(controller.addInfo));

module.exports = router;
