"use client";

import PropTypes from "prop-types";
import Package from "@/app/(page)/packages/[package]/package.style";
import { Pretendard_Bold, Pretendard_Regular } from "@/assets/fonts/fonts";

const DetailInfo = ({ title, content }) => {
  return (
    <Package.DetailInfoBox>
      <Package.DetailInfoTitle className={Pretendard_Bold.className}>
        {title}
      </Package.DetailInfoTitle>
      <Package.DetailInfoContent className={Pretendard_Regular.className}>
        {content}
      </Package.DetailInfoContent>
    </Package.DetailInfoBox>
  );
};

DetailInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default DetailInfo;
