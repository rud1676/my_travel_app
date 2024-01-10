"use client";

import {
  InputTitleWrapper,
  InputColorRadio,
  InputLable,
  ColorBox,
  colors,
} from "@/app/plandetail/style";
import { Pretendard_Regular } from "@/assets/fonts/fonts";

const TagColor = ({ setColor, color }) => {
  return (
    <InputTitleWrapper>
      <InputLable className={Pretendard_Regular.className}>태그색깔</InputLable>
      <ColorBox>
        {colors.map((v, i) => {
          const onClickColor = () => {
            setColor(i);
          };
          return (
            <InputColorRadio
              key={v.src}
              onClick={onClickColor}
              width={31}
              height={31}
              src={v.src}
              alt={v.name}
              ischeck={(i === color).toString()}
            />
          );
        })}
      </ColorBox>
    </InputTitleWrapper>
  );
};

export default TagColor;
