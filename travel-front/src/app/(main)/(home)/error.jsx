"use client";

import Suspense from "@/app/_component/ui/Frame/Suspense";

const Error = () => {
  return (
    <Suspense
      title="서버에 에러가 났습니다. 관리자에게 문의하세요."
      color="red"
    />
  );
};

export default Error;
