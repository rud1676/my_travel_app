// Footer Design
import styled from "@emotion/styled";
import { Box, Typography, TextField } from "@mui/material";

const Make = {
  MainWrapper: styled(Box)`
    margin-top: ${(props) => (props.mode === "true" ? "32px" : "73px")};
    padding: 0px 17px 0px 17px;
  `,

  MainTitleText: styled(Typography)`
    font-size: 16px;
    margin: 73px 9px 13px;
  `,

  TitleInput: styled(TextField)`
    border-radius: 10px;
    width: 100%;
    background: #fff;
    & .MuiOutlinedInput-notchedOutline {
      border-color: #c0abff;
    }
    & .MuiOutlinedInput-root.Mui-focused fieldset {
      border: 3px solid #c10000;
    }
  `,
};

export default Make;
