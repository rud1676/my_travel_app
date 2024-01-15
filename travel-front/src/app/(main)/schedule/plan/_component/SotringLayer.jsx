"use client";

import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import Plan from "../plan.style";
import { Pretendard_Bold, Pretendard_SemiBold } from "@/assets/fonts/fonts";
import Filter_Active from "@/assets/img/Filter_Active.svg";
import Filter from "@/assets/img/Filter.svg";

import { myPlanApi } from "@/api/myplan";

const SotringLayer = ({ setMinView, minView }) => {
  const queryClient = useQueryClient();
  const [active, setActive] = useState(0);

  const onClickSort = (params) => {
    queryClient.fetchQuery({
      queryKey: ["plan"],
      queryFn: () => myPlanApi.list(params === 0 ? "desc" : "asc"),
    });
    setActive(params);
  };

  return (
    <Plan.SortingLayerWrapper>
      <Plan.SortingWrapper className={Pretendard_Bold.className}>
        <Plan.SortingButton
          onClick={() => {
            onClickSort(0);
          }}
          url={active === 0 ? Filter_Active.src : Filter.src}
        >
          최신순
        </Plan.SortingButton>
        <Plan.SortingButton
          onClick={() => {
            onClickSort(1);
          }}
          url={active === 1 ? Filter_Active.src : Filter.src}
        >
          오래된 순
        </Plan.SortingButton>
      </Plan.SortingWrapper>
      <Plan.MinimalViewWrapper>
        <Plan.MinimalText className={Pretendard_SemiBold.className}>
          간단히 보기
        </Plan.MinimalText>
        <Plan.MinimalSwitchBox
          onClick={() => {
            setMinView((prev) => !prev);
          }}
          switch={`${minView}`}
        >
          <Plan.MinimalSwitchCircle switch={`${minView}`} />
        </Plan.MinimalSwitchBox>
      </Plan.MinimalViewWrapper>
    </Plan.SortingLayerWrapper>
  );
};
export default SotringLayer;
