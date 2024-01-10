"use client";
import MainStyle from "./main.style";
const Error = () => {
  return (
    <MainStyle.LoadingBox color="red">
      서버 에러가 났습니다 관리자에게 문의해주세요
    </MainStyle.LoadingBox>
  );
};

export default Error;
