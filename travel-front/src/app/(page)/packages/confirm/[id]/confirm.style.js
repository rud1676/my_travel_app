import { Box, Typography } from "@mui/material";

import styled from "@emotion/styled";

const Confirm = {
  TravelConfirmWrapper: styled(Box)`
    background: #f0f0f0;
  `,
  FooterWrapper: styled(Box)`
    min-width: 320px;
    max-width: 820px;
    position: fixed;
    cursor: pointer;
    bottom: 0px;
    border-radius: 20px 20px 0px 0px;
    background: #00ce9d;
    box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 93px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 1;
  `,

  Title: styled(Typography)`
    display: flex;
    justify-content: center;
    height: 96px;
    align-items: end;

    font-size: 24px;
    font-style: normal;
    line-height: normal;
  `,
};
export default Confirm;
