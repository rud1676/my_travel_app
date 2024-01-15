"use client";

import { useState } from "react";
import Make, { colors } from "../make.style";
import { Pretendard_Regular } from "@/assets/fonts/fonts";

const TagColor = ({ onChangeHandle, form }) => {
  const [color, setColor] = useState(form?.color);
  return (
    <Make.InputTitleWrapper>
      <Make.InputLable className={Pretendard_Regular.className}>
        태그색깔
      </Make.InputLable>
      <Make.ColorBox>
        {colors.map((v, i) => {
          return (
            <Make.InputColorRadio
              key={v.src}
              onClick={() => {
                onChangeHandle(i);
                setColor(i);
              }}
              width={31}
              height={31}
              src={v.src}
              alt={v.name}
              ischeck={(i === color).toString()}
            />
          );
        })}
      </Make.ColorBox>
    </Make.InputTitleWrapper>
  );
};

export default TagColor;
