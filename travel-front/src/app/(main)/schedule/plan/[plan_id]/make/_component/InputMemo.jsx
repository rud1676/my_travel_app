/* eslint-disable no-unused-vars */

"use client";

import Make from "../make.style";
import { Pretendard_Regular } from "@/assets/fonts/fonts";
import MemoBackground from "@/assets/img/MemoBackground.svg";

const InputMemo = ({ onChangeHandle, form }) => {
  return (
    <Make.InputTitleWrapper>
      <Make.InputLable mr={11} className={Pretendard_Regular.className}>
        메모
      </Make.InputLable>
      <Make.MemoBox imgsrc={MemoBackground.src}>
        <Make.MemoTextarea
          onChange={onChangeHandle}
          defaultValue={form.memo || ""}
          cols="3"
          rows="3"
        />
      </Make.MemoBox>
    </Make.InputTitleWrapper>
  );
};

export default InputMemo;
