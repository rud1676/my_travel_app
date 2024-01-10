import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

import FlightIcon from "@/assets/img/FlightIcon.svg";
import SchduleNoFlight from "@/assets/img/SchduleNoFlight.svg";

// Header Design

const Package = {
  Header: styled(Box)`
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 42px 40px 5px 24px;
  `,

  HeaderBackButton: styled.button`
    all: unset;
    cursor: pointer;
    text-align: center;
  `,

  MainBoxWrapper: styled(Box)``,

  // MainBox Design

  // Navigator Design
  NavigatorWrapper: styled(Box)`
    width: 100%;
    display: flex;
  `,

  NavItem: styled(Box)`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 51px;
    border-bottom: 4.25px solid
      ${(props) => (props.activate === "true" ? "#6549ba" : "#C7C7C7")};
    color: ${(props) => (props.activate === "true" ? "#6549ba" : "#C7C7C7")};
    font-size: 12px;
    font-style: normal;
    line-height: normal;
  `,

  // Footer Design
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

  // Travel_Detail 부분
  TravelInfoBox: styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
  `,
  // Travel_Detail - DateSelect button
  SelectDateWrapper: styled(Box)`
    margin-top: 23px;
    background: #f4f4f4;
    height: 136px;
    width: 83%;
    padding-top: 22px;
  `,
  SelectDateButton: styled.button`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: #6539ba;
    color: white;
    margin-top: 16px;
    font-size: 16px;
  `,

  SelectDateKeyText: styled.p`
    color: #6549ba;
    font-size: 12px;
    margin-right: 32px;
  `,
  SelectDateValueText: styled.p`
    color: ${(props) => (props.selected ? "#808080" : "#000")};
    font-size: 16px;
  `,
  SelectDateTextBox: styled(Box)`
    display: flex;
    padding-left: 15px;
    margin-bottom: 8px;
  `,

  OptionSelectBox: styled(Box)`
    width: 80%;
    margin-top: 27px;
    margin-bottom: 16px;
  `,

  OptionSelectTitle: styled(Typography)`
    color: #d5004d;
    font-size: 12px;
    margin-bottom: 10px;
  `,

  OptionBox: styled(Box)`
    white-space: pre-wrap;
    ${(props) => (props.last !== "true" ? `margin-bottom: 35px;` : "")}
  `,

  OptionDetailText: styled(Typography)`
    font-size: 14px;
    margin-bottom: 4px;
  `,
  PriceOuter: styled(Box)`
    margin: auto;
    border-radius: 3px;
    background: #ff8787;
    box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25);
    width: 50%;
    height: 37px;
  `,
  PriceInner: styled(Box)`
    width: 96%;
    height: 33px;
    top: 5%;
    left: -2%;
    border-radius: 3px;
    border: 0.5px solid #fff;
    position: relative;
    background: #ff8787;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
  `,
  PriceText: styled.p`
    color: #fff;
    text-align: center;
    font-size: 16px;
  `,

  DetailInfoBox: styled(Box)`
    width: 100%;
    border-top: 1px solid #dbdbdb;
    margin-bottom: 15px;
    padding-top: 14px;
  `,

  DetailInfoTitle: styled.p`
    color: #6549ba;
    font-size: 12px;
    margin-bottom: 12px;
  `,

  DetailInfoContent: styled.p`
    white-space: pre-wrap;
    position: relative;
    left: 6px;
    font-size: 14px;
  `,
  OneDayCourseBox: styled(Box)`
    margin-bottom: 14px;
    width: 100%;
  `,
  DayTitleBox: styled(Box)`
    display: flex;
    align-items: center;
    height: 36px;
    margin-bottom: 14px;
  `,
  DayNumberBox: styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-image: url("${(props) => props.url}");
    width: 82px;
    height: 42px;
    font-size: 16px;
  `,
  DayName: styled(Box)`
    background: #f0f0f0;
    padding-left: 10px;
    width: calc(100% - 82px);
    display: flex;
    align-items: center;
    font-size: 14px;
  `,
  ScheduleWrapper: styled(Box)`
    ${(props) => props.pad === "true" && `padding: 7px 0 7px 0px;`}
    position: relative;
    display: flex;
    align-items: center;
  `,
  ScheduleText: styled(Typography)`
    margin-left: 10px;
    ${(props) =>
      props.flight === "true" ? `font-size: 14px;` : `font-size:11px;`}
    line-height: normal;
    position: relative;
  `,

  // Travel Guide
  TravelGuideWrapper: styled(Box)`
    height: calc(100vh - 332px);
    padding: 21px 33px 0 33px;
    background: #fff;
  `,
  TravelGuideTopText: styled(Typography)`
    margin-bottom: 7px;
    font-size: 14px;
  `,
  TravelGuideText: styled(Typography)`
    white-space: pre-wrap;
    font-size: 12px;
    margin-bottom: 17px;
  `,

  // ConfirmReserve
  ConfirmFooterWrapper: styled(Box)`
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
  `,

  ConfirmDateWrapper: styled(Box)`
    margin-top: 11px;
    width: ${(props) => (props.mode === "true" ? "210px" : "70%")};
    ${(props) => props.mode && "margin-bottom:30px"}
  `,
  ConfirmDateKeyText: styled.p`
    color: #9a9a9a;
    font-size: 14px;
    margin-right: 43px;
  `,

  ConfirmDataInpuBoxWrapper: styled(Box)`
    margin-top: 31px;
    background: #f4f4f4;
    width: 83%;
    border-radius: 10px;
    padding: 16px 0px 0px 17px;
  `,

  ConfirmDataTitle: styled(Typography)`
    color: #6549ba;
    font-style: normal;
    line-height: normal;
    font-size: 14px;
    margin-bottom: 14px;
  `,
  CheckBoxWrapper: styled(Box)`
    display: flex;
    align-items: center;
  `,
  CheckBoxLabel: styled(Box)`
    font-size: 14px;
    margin-left: 16px;
  `,
  OptionSelectData: styled(Box)`
    margin-bottom: 13px;
  `,

  OptionPriceText: styled(Typography)`
    color: #000;
    text-align: right;
    margin-right: 17px;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  `,

  PeopleInputBoxWrapper: styled(Box)`
    margin-top: 7px;
    background: #f4f4f4;
    width: 83%;
    border-radius: 10px;
    padding: 16px 0px 0px 17px;
    margin-bottom: 35px;
  `,
  PeopleSelectBox: styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 37px;
    margin-bottom: 22px;
  `,
  ButtonBox: styled(Box)`
    display: flex;
    align-items: center;
    margin-right: 20px;
    gap: 16px;
  `,

  PeopleText: styled(Typography)`
    text-align: right;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    width: 13px;
  `,

  TotalPriceBox: styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0px 40px 31px 40px;
  `,

  ScheduleLine: styled(Box)`
    ${(props) => props.last === "true" && `display:none;`}
    border-left: 1px solid #e6e6e6;
    height: 30px;
    position: relative;
    left: -16.5px;
    z-index: 0;
    top: 50%;
    transform: translateY(50%);
    overflow: hidden;
  `,
  ScheduleIcon: styled(Box)`
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-position: center center;
    width: 30px;
    height: 35px;
    z-index: 1;
    background-image: url(${(props) =>
      props.flight === "true" ? FlightIcon.src : SchduleNoFlight.src});
  `,
};

export default Package;
