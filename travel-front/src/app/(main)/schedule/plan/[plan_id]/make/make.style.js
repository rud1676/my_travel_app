import { Box, TextField } from "@mui/material";
import styled from "@emotion/styled";

const Make = {
  FooterWrapper: styled(Box)`
    cursor: pointer;
    z-index: -111;
    bottom: 0px;
    position: fixed;
    border-radius: 20px 20px 0px 0px;
    background: #00ce9d;
    box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    min-width: 320px;
    max-width: 820px;
    height: 93px;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
  `,
  InputBox: styled(TextField)`
    border-radius: 10px;
    width: 73%;
    background: #fff;
    & .MuiOutlinedInput-notchedOutline {
      border-color: #c0abff;
    }
    & .MuiOutlinedInput-root.Mui-focused fieldset {
      border: 3px solid #c10000;
    }
  `,
  BackButton: styled.button`
    all: unset;
  `,
};

export default Make;
