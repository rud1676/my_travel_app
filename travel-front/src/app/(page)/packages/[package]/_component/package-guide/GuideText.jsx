"use client";

import Proptypes from "prop-types";
import { Box } from "@mui/material";

import Package from "@/app/(page)/packages/[package]/package.style";
import { Pretendard_Medium, Pretendard_Regular } from "@/assets/fonts/fonts";

const GuideText = ({ title, content }) => {
  return (
    <Box>
      <Package.TravelGuideTopText className={Pretendard_Medium.className}>
        {title}
      </Package.TravelGuideTopText>
      <Package.TravelGuideText className={Pretendard_Regular.className}>
        {content}
      </Package.TravelGuideText>
    </Box>
  );
};
GuideText.propTypes = {
  title: Proptypes.string.isRequired,
  content: Proptypes.string,
};

export default GuideText;
