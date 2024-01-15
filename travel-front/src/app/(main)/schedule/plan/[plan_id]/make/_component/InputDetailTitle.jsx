"use client";

import Make from "../make.style";
import { Pretendard_Regular } from "@/assets/fonts/fonts";

const InputDetailTitle = ({ form, onChangeHandle }) => {
  return (
    <Make.InputTitleWrapper>
      <Make.InputLable className={Pretendard_Regular.className}>
        일정제목
      </Make.InputLable>
      <Make.InputBox defaultValue={form.title} onChange={onChangeHandle} />
    </Make.InputTitleWrapper>
  );
};

export default InputDetailTitle;
