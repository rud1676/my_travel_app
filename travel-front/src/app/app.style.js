import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

const AppStyle = {
  FooterWrapper: styled(Box)`
    min-width: 320px;
    max-width: 820px;
    cursor: pointer;
    z-index: 1;
    bottom: 0px;
    position: fixed;
    border-radius: 20px 20px 0px 0px;
    background: ${(props) => (props.bgcolor ? props.bgcolor : "#6549ba")};
    box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 93px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
    z-index: 99;
  `,

  ProfileChangeButton: styled(Box)`
    cursor: pointer;
    position: relative;
    top: ${(props) => (props.isthumnail ? "-30" : "98")}px;
    left: 85px;
    width: 40px;
    border-radius: 40px;
    height: 40px;
    flex-shrink: 0;
    background: #8a8a8a;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ModalWrapper: styled(Box)`
    border-radius: 9px 9px 9px 9px;
    background: #efefef;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 297px;
    boxshadow: 24px;
    p: 4px;
  `,
  ModalTitle: styled(Typography)`
    display: flex;
    justify-content: center;
    margin-top: 22px;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.6px;
  `,
  ModalContent: styled(Box)`
    border-bottom: 1px solid gray;
  `,
  ModalSubTtitle: styled(Typography)`
    margin-top: 13px;
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: -0.6px;
  `,
  ButtonWrapper: styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `,
  ConfirmButton: styled(Button)`
    padding: 18px 57px 17px 57px;
    color: #4987f7;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.6px;
    white-space: nowrap;
  `,
  CloseButton: styled(Button)`
    color: #ff453a;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    white-space: nowrap;
  `,
  ScreenWrapper: styled(Box)`
    height: calc(100vh - 50px);
    overflow-y: auto;
  `,
  AppWrapper: styled(Box)`
    min-height: 100vh;
    background-color: ${(props) => props.bgColor};
    min-width: 390px;
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
  `,

  TotalPriceBox: styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 24px 43px 71px 40px;
    width: 80%;
  `,

  TotalPriceTitle: styled.p`
    font-size: 16px;
    line-height: normal;
  `,

  TotalPriceText: styled.p`
    font-size: 24px;
    line-height: normal;
    text-align: right;
  `,
};

export default AppStyle;
