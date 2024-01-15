"use client";

import Proptypes from "prop-types";

import moment from "moment";
import Package from "@/app/(main)/(home)/packages/[package]/package.style";
import { Pretendard_Bold } from "@/assets/fonts/fonts";

const SelectDate = ({ setOpenDate, range }) => {
  return (
    <Package.SelectDateWrapper>
      <Package.SelectDateTextBox>
        <Package.SelectDateKeyText className={Pretendard_Bold.className}>
          출발 일자
        </Package.SelectDateKeyText>
        <Package.SelectDateValueText
          selected={range?.from === undefined}
          className={Pretendard_Bold.className}
        >
          {range?.from === undefined
            ? "일자를 선택해주세요."
            : moment(range.from).format("YYYY-MM-DD")}
        </Package.SelectDateValueText>
      </Package.SelectDateTextBox>
      <Package.SelectDateTextBox>
        <Package.SelectDateKeyText className={Pretendard_Bold.className}>
          도착 일자
        </Package.SelectDateKeyText>
        <Package.SelectDateValueText
          selected={range?.to === undefined}
          className={Pretendard_Bold.className}
        >
          {range?.to === undefined
            ? "일자를 선택해주세요."
            : moment(range.to).format("YYYY-MM-DD")}
        </Package.SelectDateValueText>
      </Package.SelectDateTextBox>
      <Package.SelectDateButton
        className={Pretendard_Bold.className}
        onClick={() => {
          setOpenDate(true);
        }}
      >
        일자 선택
      </Package.SelectDateButton>
    </Package.SelectDateWrapper>
  );
};

SelectDate.propTypes = {
  setOpenDate: Proptypes.func.isRequired,
  range: Proptypes.any,
};

export default SelectDate;
