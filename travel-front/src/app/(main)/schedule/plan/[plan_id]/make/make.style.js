import { Box, Typography, TextField, SwipeableDrawer } from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";

import WhiteCircle from "@/assets/img/WhiteCircle.svg";
import PeachCircle from "@/assets/img/PeachCircle.svg";
import YellowCircle from "@/assets/img/YellowCircle.svg";
import GreenCircle from "@/assets/img/GreenCircle.svg";
import SkyblueCircle from "@/assets/img/SkyblueCircle.svg";
import PerwinkleCircle from "@/assets/img/PerwinkleCircle.svg";
import PurpleCircle from "@/assets/img/PurpleCircle.svg";
import PinkCircle from "@/assets/img/PinkCircle.svg";

export const colors = [
  { name: "white", src: WhiteCircle.src },
  { name: "peach", src: PeachCircle.src },
  { name: "yellow", src: YellowCircle.src },
  { name: "green", src: GreenCircle.src },
  { name: "skyblue", src: SkyblueCircle.src },
  { name: "perwinkle", src: PerwinkleCircle.src },
  { name: "perple", src: PurpleCircle.src },
  { name: "pink", src: PinkCircle.src },
];

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

  InputLable: styled.p`
    font-size: 16px;
    font-style: normal;
    margin-right: 16px;
    width: 56px;

    line-height: normal;
  `,
  MemoBox: styled(Box)`
    background-image: url("${(props) => props.imgsrc}");
    margin-right: 21px;
    background-size: cover;
    position: relative;
    left: -10px;
    width: 74%;
    height: 128px;
    flex-shrink: 0;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
    z-index: 0;
  `,

  MemoTextarea: styled.textarea`
    all: unset;
    margin-left: 17px;
    margin-top: 14px;
    width: calc(100% - 30px);
    display: block;
    padding-bottom: 10px;
    height: 90px;
  `,

  TimeInputWrapper: styled(Box)`
    display: flex;
    align-items: baseline;
  `,

  TimeInputText: styled(Typography)`
    margin-right: 9px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  `,

  TimeInputBox: styled.input`
    height: 55px;
    width: 66px;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    line-height: normal;
    border-radius: 10px;
    background: #fff;
    border: 0px;
    margin-right: 4px;
  `,
  LocationText: styled.p`
    font-size: 18px;
    font-style: normal;
    margin-left: 5px;

    line-height: normal;
  `,
  LocationInputBox: styled(Box)`
    width: 73%;
    height: 55px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #dedede;
    padding: 16px 0px 16px 8px;
    display: flex;
    align-items: center;
  `,
  InputTitleWrapper: styled(Box)`
    display: flex;
    align-items: center;
    margin-top: 26px;
  `,
  MakeDetailWrapper: styled(Box)`
    padding-top: 25px;
    padding-left: 21px;
  `,
  TitleBox: styled(Box)`
    display: flex;
    gap: 10px;
    align-items: baseline;
    border-bottom: 2px solid #a7a7a7;
    width: 220px;
  `,

  MonthDayText: styled.p`
    font-size: 32px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
  `,
  YearText: styled.p`
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
  `,

  InputColorRadio: styled(Image)`
    ${(props) =>
      props.ischeck === "true" &&
      `border: 2px solid black;
  border-radius: 50%;`}
  `,
  ColorBox: styled(Box)`
    display: flex;
    gap: 4px;
  `,
};

export default Make;
