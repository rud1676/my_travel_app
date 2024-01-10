"use client";

import { useCallback } from "react";

import {
  InputTitleWrapper,
  InputBox,
  InputLable,
} from "@/app/plandetail/style";
import { Pretendard_Regular } from "@/assets/fonts/fonts";

const InputDetailTitle = ({ formPlanTitle, setFormPlanTitle }) => {
  const onChangeHandle = useCallback(
    (e) => {
      setFormPlanTitle(e.target.value);
    },
    [setFormPlanTitle]
  );
  return (
    <InputTitleWrapper>
      <InputLable className={Pretendard_Regular.className}>일정제목</InputLable>
      <InputBox value={formPlanTitle} onChange={onChangeHandle} />
    </InputTitleWrapper>
  );
};

export default InputDetailTitle;
