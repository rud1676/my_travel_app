"use client";

import PropTypes from "prop-types";
import Package from "@/app/(main)/(home)/packages/[package]/package.style";

import { Pretendard_Medium, Pretendard_Bold } from "@/assets/fonts/fonts";

const Option = ({ last = false, title, content, price }) => {
  const priceText = `₩${price.toLocaleString()}`;
  return (
    <Package.OptionBox last={last.toString()}>
      <Package.OptionDetailText className={Pretendard_Medium.className}>
        {title}
      </Package.OptionDetailText>
      <Package.OptionDetailText className={Pretendard_Medium.className}>
        {content}
      </Package.OptionDetailText>
      <Package.PriceOuter>
        <Package.PriceInner>
          <Package.PriceText className={Pretendard_Bold.className}>
            {priceText}
          </Package.PriceText>
        </Package.PriceInner>
      </Package.PriceOuter>
    </Package.OptionBox>
  );
};

Option.propTypes = {
  last: PropTypes.bool,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Option;
