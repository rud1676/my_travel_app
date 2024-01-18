import { Box } from "@mui/material";
import styled from "@emotion/styled";

const FooterStyle = {
  FooterWrapper: styled(Box)`
    min-width: 320px;
    max-width: 820px;
    cursor: pointer;
    z-index: 1;
    bottom: 0px;
    position: fixed;
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 93px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: Pretendard;
    font-weight: bold;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
    z-index: 99;
  `,
};

export default FooterStyle;
