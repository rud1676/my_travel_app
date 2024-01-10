const express = require('express');
const asyncHandler = require('express-async-handler');
const controller = require('../controller/myPlan');
const { onlyLoginUser } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

// 여행 계획 리스트 받아오기
router.get('/', onlyLoginUser, asyncHandler(controller.list));

// 여행 계획 입력
router.post('/', onlyLoginUser, asyncHandler(controller.add));

// 여행 세부계획 순서 변경 입력
router.post('/detail', onlyLoginUser, asyncHandler(controller.detailOrdring));

// 날짜로 해당하는 여행계획 찾기(첫화면)
router.get('/day/:day', onlyLoginUser, asyncHandler(controller.daylist));

// 여행 계획 정보
router.get('/:id', asyncHandler(controller.detail));

// 여행 계획 상세 추가
router.post('/:id/detail', onlyLoginUser, asyncHandler(controller.addDetail));

// 여행 계획 상세 정보(myPlanid로 검색)
router.get('/:myPlanId/detail', onlyLoginUser, asyncHandler(controller.myPlanDetails));

// 여행 계획 상세 정보 아이디로 하나 !
router.get('/detail/:id', onlyLoginUser, asyncHandler(controller.myPlanDetail));

// 여행 계획 세부내용 하나 삭제
router.delete('/detail/:id', onlyLoginUser, asyncHandler(controller.myDetailDelete));

// todo 여행 계획 수정
router.put('/:id', onlyLoginUser, asyncHandler(controller.update));

// todo 여행 계획 삭제
router.delete('/:id', onlyLoginUser, asyncHandler(controller.remove));

module.exports = router;
