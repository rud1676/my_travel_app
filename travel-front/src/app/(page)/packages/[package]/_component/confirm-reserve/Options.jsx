"use client";

import { Checkbox } from "@mui/material";
import {
  CircleOutlined,
  RadioButtonCheckedOutlined,
} from "@mui/icons-material";
import React, { useCallback } from "react";
import Package from "@/app/(page)/packages/[package]/package.style";
import { Pretendard_Medium, Pretendard_Bold } from "@/assets/fonts/fonts";

const CheckBoxInputBox = ({ title, price, order, select, setSelOption }) => {
  const ptext = `₩ ${price?.toLocaleString()}`;
  const onClickCheck = useCallback(() => {
    setSelOption(order);
  }, [setSelOption, order]);
  return (
    <Package.OptionSelectData>
      <Package.CheckBoxWrapper>
        <Checkbox
          checked={select}
          onClick={onClickCheck}
          sx={{ padding: "0px" }}
          icon={<CircleOutlined />}
          checkedIcon={<RadioButtonCheckedOutlined sx={{ color: "#6549BA" }} />}
        />
        <Package.CheckBoxLabel className={Pretendard_Medium.className}>
          {title}
        </Package.CheckBoxLabel>
      </Package.CheckBoxWrapper>
      <Package.OptionPriceText className={Pretendard_Bold.className}>
        {ptext}
      </Package.OptionPriceText>
    </Package.OptionSelectData>
  );
};

const Options = ({ options, selOption, setSelOption }) => {
  return (
    <Package.ConfirmDataInpuBoxWrapper>
      <Package.ConfirmDataTitle className={Pretendard_Bold.className}>
        옵션선택
      </Package.ConfirmDataTitle>
      {options.map((v, i) => {
        const select = selOption === i;
        return (
          <CheckBoxInputBox
            id={v.id}
            select={select}
            order={i}
            setSelOption={setSelOption}
            key={v.id}
            title={v.title}
            price={v.price}
          />
        );
      })}
    </Package.ConfirmDataInpuBoxWrapper>
  );
};

export default Options;
