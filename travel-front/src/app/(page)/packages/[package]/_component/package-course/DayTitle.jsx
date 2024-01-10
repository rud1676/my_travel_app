"use client";

import PropTypes from "prop-types";

import Package from "@/app/(page)/packages/[package]/package.style";
import Filter_Active from "@/assets/img/Filter_Active.svg";
import { Pretendard_Bold, Pretendard_Medium } from "@/assets/fonts/fonts";

const DayTitle = ({ num, title }) => {
  return (
    <Package.DayTitleBox>
      <Package.DayNumberBox
        className={Pretendard_Bold.className}
        url={Filter_Active.src}
      >
        {num}일차
      </Package.DayNumberBox>
      <Package.DayName className={Pretendard_Medium.className}>
        {title}
      </Package.DayName>
    </Package.DayTitleBox>
  );
};

DayTitle.propTypes = {
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default DayTitle;
