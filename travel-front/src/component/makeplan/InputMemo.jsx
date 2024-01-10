/* eslint-disable no-unused-vars */

"use client";

import { useCallback } from "react";
import {
  InputTitleWrapper,
  MemoBox,
  InputLable,
  MemoTextarea,
} from "@/app/plandetail/style";
import { Pretendard_Regular } from "@/assets/fonts/fonts";
import MemoBackground from "@/assets/img/MemoBackground.svg";

const InputMemo = ({ formMemo, setFormMemo }) => {
  const onChnageHandle = useCallback(
    (e) => {
      setFormMemo(e.target.value);
    },
    [setFormMemo]
  );
  return (
    <InputTitleWrapper>
      <InputLable mr={11} className={Pretendard_Regular.className}>
        메모
      </InputLable>
      <MemoBox imgsrc={MemoBackground.src}>
        <MemoTextarea
          value={formMemo}
          onChange={onChnageHandle}
          cols="3"
          rows="3"
        />
      </MemoBox>
    </InputTitleWrapper>
  );
};

export default InputMemo;
