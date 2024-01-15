"use client";

import { useRef } from "react";

import Make from "../make.style";
import { Pretendard_Regular } from "@/assets/fonts/fonts";

const InputDetailTitle = ({ onChangeHandle }) => {
  const ref = useRef();
  return (
    <Make.InputTitleWrapper>
      <Make.InputLable className={Pretendard_Regular.className}>
        일정제목
      </Make.InputLable>
      <Make.InputBox ref={ref} onChange={onChangeHandle} />
    </Make.InputTitleWrapper>
  );
};

export default InputDetailTitle;
