"use client";

import Package from "@/app/(main)/(home)/packages/[package]/package.style";
import Option from "./Option";
import { Pretendard_Bold } from "@/assets/fonts/fonts";

const OptionList = ({ optionlist }) => {
  return (
    <Package.OptionSelectBox>
      <Package.OptionSelectTitle className={Pretendard_Bold.className}>
        옵션 목록
      </Package.OptionSelectTitle>
      {optionlist.map((v, i) => {
        if (i === optionlist.length - 1) {
          return (
            <Option
              key={v.id}
              content={v.content}
              title={v.title}
              price={v.price}
              last
            />
          );
        }
        return (
          <Option
            key={v.id}
            content={v.content}
            title={v.title}
            price={v.price}
          />
        );
      })}
    </Package.OptionSelectBox>
  );
};

export default OptionList;
