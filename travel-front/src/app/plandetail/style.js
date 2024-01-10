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

export const FooterWrapper = styled(Box)`
  cursor: pointer;
  z-index: -111;
  bottom: 0px;
  position: fixed;
  border-radius: 20px 20px 0px 0px;
  background: ${(props) => (props.bgcolor ? props.bgcolor : "#6549ba")};
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
`;

export const HeaderWrapper = styled(Box)`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: end;
`;
export const TitleText = styled(Typography)`
  width: 75%;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
`;
export const HeaderButton = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
`;

export const DateSectionWrapper = styled(Box)`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  cursor: pointer;
  padding: 6px 10px;
  align-items: center;
  overflow: scroll;
  width: 100%;
  margin-top: 15px;
  display: flex;
  gap: 6px;
`;

export const DateWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  width: 78px;
  height: 42px;
  background-image: url("${(props) => props.imgsrc}");
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  line-height: normal;
`;

export const MakeDetailWrapper = styled(Box)`
  padding-top: 25px;
  padding-left: 21px;
`;

export const TitleBox = styled(Box)`
  display: flex;
  gap: 10px;
  align-items: baseline;
  border-bottom: 2px solid #a7a7a7;
  width: 220px;
`;

export const MonthDayText = styled.p`
  font-size: 32px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const YearText = styled.p`
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const InputTitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 26px;
`;

export const InputBox = styled(TextField)`
  border-radius: 10px;
  width: 73%;
  background: #fff;
  & .MuiOutlinedInput-notchedOutline {
    border-color: #c0abff;
  }
  & .MuiOutlinedInput-root.Mui-focused fieldset {
    border: 3px solid #c10000;
  }
`;

export const InputLable = styled.p`
  font-size: 16px;
  font-style: normal;
  margin-right: 16px;
  width: 56px;

  line-height: normal;
`;
export const ColorBox = styled(Box)`
  display: flex;
  gap: 4px;
`;

export const InputColorRadio = styled(Image)`
  ${(props) =>
    props.ischeck === "true" &&
    `border: 2px solid black;
  border-radius: 50%;`}
`;

export const LocationInputBox = styled(Box)`
  width: 73%;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #dedede;
  padding: 16px 0px 16px 8px;
  display: flex;
  align-items: center;
`;

export const LocationText = styled.p`
  font-size: 18px;
  font-style: normal;
  margin-left: 5px;

  line-height: normal;
`;

export const TimeInputBox = styled.input`
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
`;

export const TimeInputWrapper = styled(Box)`
  display: flex;
  align-items: baseline;
`;

export const TimeInputText = styled(Typography)`
  margin-right: 9px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
`;

export const MemoBox = styled(Box)`
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
`;

export const MemoTextarea = styled.textarea`
  all: unset;
  margin-left: 17px;
  margin-top: 14px;
  width: calc(100% - 30px);
  display: block;
  padding-bottom: 10px;
  height: 90px;
`;
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

export const ScheduleMove = styled(Box)`
  cursor: pointer;
  position: relative;
  left: calc(100% - 0px);
  top: -80px;
  border-radius: 0px 5px 5px 0px;
  background: #d9d9d9;
  width: 26px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const IconBox = styled(Box)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background-image: url("${(props) => props.imgurl}");
`;

export const MiniDeleteBox = styled(Box)`
  cursor: pointer;
  position: relative;
  left: calc(100% - 0px);
  display: flex;
  align-items: center;
  justify-content: center;

  top: -165px;
  position: relative;
  border-radius: 0px 5px 5px 0px;
  background: #ff453a;
  width: 30px;
  height: 28px;
  flex-shrink: 0;
  z-index: 1;
`;

export const ButtonTitle = styled(Typography)`
  color: #4987f7;

  font-size: 20px;
  font-style: normal;
  line-height: normal;
`;

export const ButtonWrapper = styled(Box)`
  cursor: pointer;
  border-radius: ${(props) => props.rad};
  background: #efefef;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  flex-shrink: 0;
`;

export const CloseButtonWrapper = styled(Box)`
  margin-top: 14px;
  cursor: pointer;
  border-radius: 9px;
  background: #efefef;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const DrawFooterWrapper = styled(SwipeableDrawer)`
  .MuiDrawer-paperAnchorBottom {
    background-color: transparent;
    box-shadow: none;
  }
`;
