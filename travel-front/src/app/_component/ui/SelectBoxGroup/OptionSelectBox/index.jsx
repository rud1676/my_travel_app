"use client";

import React from "react";

import SelectBoxWrapper from "@/app/_component/ui/SelectBoxGroup/_component/SelectBoxWrapper";
import OptionBox from "./OptionBox";

const OptionSelectBox = ({ options, selOption, setSelOption }) => {
  return (
    <SelectBoxWrapper title="옵션선택">
      {options.map((v, i) => {
        return (
          <OptionBox
            id={v.id}
            select={selOption === i}
            order={i}
            setSelOption={setSelOption}
            key={v.id}
            title={v.title}
            price={v.price}
          />
        );
      })}
    </SelectBoxWrapper>
  );
};

export default OptionSelectBox;
