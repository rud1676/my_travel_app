"use client";

import PropTypes from "prop-types";
import moment from "moment";
import Package from "@/app/(page)/packages/[package]/package.style";

import { Pretendard_Bold } from "@/assets/fonts/fonts";

const ShowDate = ({ range, mode = false }) => {
  return (
    <Package.ConfirmDateWrapper mode={mode.toString()}>
      <Package.SelectDateTextBox>
        <Package.ConfirmDateKeyText className={Pretendard_Bold.className}>
          출발 일자
        </Package.ConfirmDateKeyText>
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
        <Package.ConfirmDateKeyText className={Pretendard_Bold.className}>
          도착 일자
        </Package.ConfirmDateKeyText>
        <Package.SelectDateValueText
          selected={range?.to === undefined}
          className={Pretendard_Bold.className}
        >
          {range?.to === undefined
            ? "일자를 선택해주세요."
            : moment(range.to).format("YYYY-MM-DD")}
        </Package.SelectDateValueText>
      </Package.SelectDateTextBox>
    </Package.ConfirmDateWrapper>
  );
};
ShowDate.propTypes = {
  range: PropTypes.any,
};

export default ShowDate;
