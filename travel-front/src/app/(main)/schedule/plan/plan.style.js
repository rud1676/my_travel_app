import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Plan = {
  HeaderButton: styled.button`
    all: unset;
    cursor: pointer;
    text-align: center;
  `,

  HeaderWrapper: styled(Box)`
    width: 100%;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: end;
  `,
  TitleText: styled(Typography)`
    width: 75%;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
  `,

  // Sorting Layer Design
};

export default Plan;
