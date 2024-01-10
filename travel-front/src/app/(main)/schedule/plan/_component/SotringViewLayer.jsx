"use client";

import React, { useState, useCallback, useEffect } from "react";

import {
  SortingLayerWrapper,
  SortingButton,
  Wrapper,
  MinimalViewWrapper,
  MinimalText,
  MinimalSwitchBox,
  MinimalSwitchCircle,
} from "../style";
import { Pretendard_Bold, Pretendard_SemiBold } from "@/assets/fonts/fonts";
import Filter_Active from "@/assets/img/Filter_Active.svg";
import Filter from "@/assets/img/Filter.svg";

const SortingViewLayer = ({ onClickSort, setMinView, minView }) => {
  const [active, setActive] = useState([Filter.src, Filter.src]);

  const onClickMinimalView = useCallback(() => {
    setMinView((prev) => !prev);
  }, [setMinView]);

  const changeButtonImg = useCallback(
    (params) => {
      const temparray = [Filter.src, Filter.src];
      temparray[params] = Filter_Active.src;
      setActive(temparray);
    },
    [setActive]
  );

  const onClickSorting = useCallback(
    (params) => {
      onClickSort(params === 0 ? "desc" : "asc");
      changeButtonImg(params);
    },
    [changeButtonImg, onClickSort]
  );

  useEffect(() => {
    changeButtonImg(0);
  }, [changeButtonImg]);
  return (
    <Wrapper>
      <SortingLayerWrapper className={Pretendard_Bold.className}>
        <SortingButton
          onClick={() => {
            onClickSorting(0);
          }}
          url={active[0]}
        >
          최신순
        </SortingButton>
        <SortingButton
          onClick={() => {
            onClickSorting(1);
          }}
          url={active[1]}
        >
          오래된 순
        </SortingButton>
      </SortingLayerWrapper>
      <MinimalViewWrapper>
        <MinimalText className={Pretendard_SemiBold.className}>
          간단히 보기
        </MinimalText>
        <MinimalSwitchBox onClick={onClickMinimalView} switch={`${minView}`}>
          <MinimalSwitchCircle switch={`${minView}`} />
        </MinimalSwitchBox>
      </MinimalViewWrapper>
    </Wrapper>
  );
};
export default SortingViewLayer;
