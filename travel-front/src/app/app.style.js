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

  ProfileImageWarpper: styled(Box)`
    margin: 0px auto 0 auto;
    width: 128px;
    height: 128px;
    flex-shrink: 0;
    border-radius: 128px;
    background-image: url("${(props) => props.imgsrc}");
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: 56px;
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
  ContentWrapper: styled(Box)``,
  DayPickerWrapper: styled(Box)`
    margin-top: 16px;
    border-radius: 9px;
    background: #fff;
  `,
  CalendarFooterWrapper: styled(Box)`
    cursor: pointer;
    bottom: 0px;
    border-radius: 20px 20px 0px 0px;
    background: #00ce9d;
    box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 93px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  `,
  CalendarHeaderButtonBox: styled(Box)`
    width: 100%;
    cursor: pointer;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  CalendarWrapper: styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 320px;
    max-width: 820px;
    margin: auto;
  `,
  TitleText: styled(Typography)`
    ${(props) => props.tcolor === "white" && "color:#fff;"}
    width: 75%;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
  `,
  HeaderButton: styled.button`
    all: unset;
    cursor: pointer;
    text-align: center;
  `,
  HeaderWrapper: styled(Box)`
    display: flex;
    justify-content: center;
    height: 96px;
    align-items: end;
  `,

  ContentWrapper: styled(Box)`
    margin-top: 19px;
    padding: 0px 33px 0 30px;
  `,
  SubTitle: styled(Typography)`
    margin-top: 30px;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    text-align: center;
    padding: 0px 32px 0px 32px;
    margin-bottom: 40px;
  `,
  DateShowBox: styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 8px;
  `,
  OptionBox: styled(Box)`
    border-radius: 10px;
    background: #fff;
    padding: 17px 0px 21px 17px;
  `,
  OptionTitle: styled(Typography)`
    color: #6549ba;
    font-style: normal;
    line-height: normal;
    font-size: 14px;
  `,
  OptionSubTitle: styled(Typography)`
    font-size: 14px;
    margin-left: 16px;
    text-align: left;
  `,

  OptionDataBox: styled(Box)`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  OptionPriceText: styled.p`
    text-align: right;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    margin-right: 15px;
  `,
  TotalPriceBox: styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 24px 43px 71px 40px;
    width: 80%;
  `,

  PeopleBox: styled(Box)`
    border-radius: 10px;
    background: #fff;
    margin-top: 19px;
    padding: 24px 64px 58px 17px;
  `,

  AdultBox: styled(Box)`
    display: flex;
    align-items: center;
    margin-top: 12px;
    justify-content: space-between;
  `,
  AdultText: styled(Typography)`
    text-align: right;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  `,

  ChildBox: styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
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

  InfoText: styled.p`
    margin-bottom: 163px;
    padding: 0px 40px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  `,
};

export default AppStyle;
