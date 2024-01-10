module.exports.emptySuccessResponse = {
  result: 'success'
};

module.exports.saltRounds = 10;

module.exports.reservedTravelPackageStatus = {
  waiting: 0, // 결제 대기 상담 대기중
  paied: 1, // 결제 완료
  canceled: 2, // 취소
  completed: 3 // 예약 완료
};

module.exports.genderType = {
  none: 0,
  male: 1,
  female: 2
};
