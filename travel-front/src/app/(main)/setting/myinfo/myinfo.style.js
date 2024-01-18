import { Box } from "@mui/material";
import styled from "@emotion/styled";

const MyInfo = {
  MyInfoWrapper: styled(Box)`
    widht: 393px;
    margin-top: 36px;
  `,
  InfoBox: styled(Box)`
    display: flex;
  `,
  TitleBox: styled.p`
    color: #7c7c7c;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    text-align: left;
    width: 56px;
    margin-right: 26px;
  `,
  ContentBox: styled.p`
    font-size: 18px;
    font-style: normal;
    line-height: normal;
  `,
  ProfileInfoWrapper: styled(Box)`
    display: flex;
    justify-content: center;
  `,
};

export default MyInfo;
