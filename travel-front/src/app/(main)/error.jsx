"use client";
import Suspense from "../_component/ui/Frame/Suspense";
const Error = () => {
  return (
    <Suspense
      title="서버 에러가 났습니다 관리자에게 문의해주세요"
      color="red"
    />
  );
};

export default Error;
