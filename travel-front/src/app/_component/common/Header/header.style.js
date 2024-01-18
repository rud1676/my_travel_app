import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const EmptyBox = styled(Box)``;

const HeaderStyle = {
  HeaderWrapper: styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 96px;
    align-items: end;
  `,
  HeaderButton: styled.button`
    all: unset;
    cursor: pointer;
    text-align: center;
  `,
  TitleText: styled(Typography)`
    width: 75%;
    font-family: Pretendard;
    font-weight: 300;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
  `,
};

export default HeaderStyle;
