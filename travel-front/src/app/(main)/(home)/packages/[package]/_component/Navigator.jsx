"use client";

import { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import Package from "@/app/(main)/(home)/packages/[package]/package.style";
import { Pretendard_Medium } from "@/assets/fonts/fonts";

const Navigator = ({ setPage }) => {
  const [MenuSelect, setMenuSelect] = useState(0);
  useEffect(() => {}, []);

  const onClickActivate = useCallback(
    (params) => {
      setMenuSelect(params);
      setPage(params);
    },
    [setPage]
  );
  return (
    <Package.NavigatorWrapper>
      <Package.NavItem
        onClick={() => {
          onClickActivate(0);
        }}
        activate={(MenuSelect === 0).toString()}
        className={Pretendard_Medium.className}
      >
        여행정보
      </Package.NavItem>
      <Package.NavItem
        onClick={() => {
          onClickActivate(1);
        }}
        activate={(MenuSelect === 1).toString()}
        className={Pretendard_Medium.className}
      >
        코스소개
      </Package.NavItem>
      <Package.NavItem
        onClick={() => {
          onClickActivate(2);
        }}
        activate={(MenuSelect === 2).toString()}
        className={Pretendard_Medium.className}
      >
        필수안내
      </Package.NavItem>
      <Package.NavItem
        onClick={() => {
          onClickActivate(3);
        }}
        activate={(MenuSelect === 3).toString()}
        className={Pretendard_Medium.className}
      >
        예약 및 취소규정
      </Package.NavItem>
    </Package.NavigatorWrapper>
  );
};

Navigator.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navigator;
