"use client";

import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import HomeStyle from "@/app/(main)/(home)/home.style";
import { Pretendard_Bold } from "@/assets/fonts/fonts";
import Filter_Active from "@/assets/img/Filter_Active.svg";
import Filter from "@/assets/img/Filter.svg";
import { travelPackageApi } from "@/api/travel";

const SortingLayer = () => {
  const queryClient = useQueryClient();
  const [activeNum, setActiveNum] = useState(0);
  const sortWord = ["최신순", "인기순", "높은 가격순", "낮은 가격순"];

  const FetchSortingPackages = async (params) => {
    let queryWord = "";
    if (params == 0) queryWord = "createdAt";
    else if (params == 1) queryWord = "viewCount";
    else if (params == 2) queryWord = "priceAsc";
    else if (params == 3) queryWord = "priceDesc";

    queryClient.fetchQuery({
      queryKey: ["packages"],
      queryFn: () => {
        return travelPackageApi.list(false, queryWord);
      },
    });
  };

  const onClickSorting = (params) => {
    FetchSortingPackages(params);
    setActiveNum(params);
  };

  return (
    <HomeStyle.SortingLayerWrapper className={Pretendard_Bold.className}>
      {sortWord.map((v, i) => (
        <HomeStyle.SortingButton
          key={v}
          onClick={() => {
            onClickSorting(i);
          }}
          url={activeNum === i ? Filter_Active.src : Filter.src}
        >
          {v}
        </HomeStyle.SortingButton>
      ))}
    </HomeStyle.SortingLayerWrapper>
  );
};
export default SortingLayer;
