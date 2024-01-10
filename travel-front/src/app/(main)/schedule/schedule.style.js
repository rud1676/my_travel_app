import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

import TagSticker_Gray from "@/assets/img/TagSticker_Gray.svg";
import TagSticker_Orange from "@/assets/img/TagSticker_Orange.svg";
import TagSticker_Yellow from "@/assets/img/TagSticker_Yellow.svg";
import TagSticker_Green from "@/assets/img/TagSticker_Green.svg";
import TagSticker_Blue from "@/assets/img/TagSticker_Blue.svg";
import TagSticker_Violet from "@/assets/img/TagSticker_Violet.svg";
import TagSticker_Purple from "@/assets/img/TagSticker_Purple.svg";
import TagSticker_Pink from "@/assets/img/TagSticker_Pink.svg";

export const sticker = [
  TagSticker_Gray.src,
  TagSticker_Orange.src,
  TagSticker_Yellow.src,
  TagSticker_Green.src,
  TagSticker_Blue.src,
  TagSticker_Violet.src,
  TagSticker_Purple.src,
  TagSticker_Pink.src,
];
export const tagcolor = [
  "#DFDFDF",
  "#FFDEDE",
  "#FFF0C9",
  "#CEFEC2",
  "#CDF3FF",
  "#C5CAFF",
  "#DBACFF",
  "#FFC1F9",
];

const Schedule = {
  HeaderBox: styled(Box)`
    display: flex;
    padding: 62px 30px 0px 21px;
    justify-content: space-between;
    align-items: baseline;
  `,
  DateTextWrapper: styled(Box)`
    display: flex;
    align-items: baseline;
    border-bottom: 2px solid #a7a7a7;
  `,
  DateSmallText: styled.p`
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
  `,
  DateBigText: styled.p`
    font-size: 32px;
    margin-right: 10px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    align-items: bottom;
  `,
  DetailText: styled.p`
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    margin-right: 5px;
  `,

  MainWrapper: styled(Box)`
    padding: 15px 16px 0px 18px;
    & img {
      cursor: pointer;
    }
  `,

  SchduleComponentWrapper: styled(Box)`
    width: 95%;
    height: 112px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
  `,

  ScheduleHeader: styled(Box)`
    cursor: pointer;
    background: ${(props) => props.backcolor};
    display: flex;
    gap: 55px;
    height: 46px;
    border-radius: 15px 15px 0px 0px;
    text-align: center;
  `,
  ScheduleTitle: styled.p`
    position: relative;

    top: 13px;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  `,

  ScheduleSticker: styled(Box)`
    z-index: 2;
    background-image: url(${(props) => props.url});
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 8px;
    left: -10px;
    transform: rotate(330deg);
    width: 78px;
    height: 42px;
  `,

  SchduleMain: styled(Box)`
    display: flex;
    justify-content: space-between;
    z-index: 2;
  `,
  SchedulePicture: styled(Box)`
    position: relative;
    top: -15px;
    width: 122px;
    height: 86px;
    border: 3px solid #fff;
    background:
      url("${(props) => props.imgsrc}"),
      lightgray 50% / cover no-repeat;
    background-size: cover;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    transform: rotate(${(props) => props.rot}deg);
  `,

  ScheduleDetail: styled(Box)`
    margin-left: 13px;
    position: relative;
    left: 0;
    margin-top: 5px;
  `,
  ScheduleTime: styled.p`
    font-size: 24px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;
    margin-bottom: 4px;
  `,
  SchedulePlace: styled.p`
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  `,

  ScheduleIconBox: styled(Box)`
    display: flex;
    height: 30px;
    position: relative;
    gap: 7px;
    top: 50px;
  `,

  TravelButtonBox: styled(Box)`
    display: flex;
    justify-content: space-around;
  `,

  PlanButton: styled.button`
    all: unset;
    ${(props) => props.cursor === "true" && `cursor:pointer;`}
    display: flex;
  `,

  LeftBox: styled(Box)`
    display: flex;
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

  ModalTitle: styled.p`
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
    padding-bottom: 17px;
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
  `,
  CloseButton: styled(Button)``,

  MemoWrapper: styled(Box)`
    background-image: url("${(props) => props.imgsrc}");
    border-radius: 9px 9px 9px 9px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 290px;
    height: 312px;
  `,

  MemoTextarea: styled.textarea`
    all: unset;
    margin-left: 17px;
    margin-top: 14px;
    width: calc(100% - 30px);
    display: block;
    padding-bottom: 10px;
    white-space: pre-wrap;
    height: 280px;
    text-shadow: 0 0 0 black;
  `,

  CloseText: styled.p`
    color: #4987f7;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
  `,
};

export default Schedule;
