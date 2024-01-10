import { Box } from "@mui/material";
import styled from "@emotion/styled";

const MainStyle = {
  FooterImgBox: styled(Box)`
    display: flex;
  `,
  IconImg: styled.img`
    margin-top: 9px;
    width: 28px;
    height: 28px;
  `,
  FooterSelectBox: styled(Box)`
    cursor: pointer;
    background: ${(props) =>
      props.active === "true" ? ` ${props.btncolor}` : "white"};
    ${(props) =>
      props.btncolor ? `border-bottom: 4px solid ${props.btncolor};` : ""};
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: center;
  `,
  FooterWrapper: styled(Box)`
    z-index: 10;
    width: 100%;
    min-width: 320px;
    max-width: 820px;
    position: fixed;
    bottom: 0px;
  `,
  LoadingBox: styled(Box)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
export default MainStyle;
