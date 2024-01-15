import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

import StickerBall from "@/assets/img/StickerBall.svg";
import StickerCamera from "@/assets/img/StickerCamera.svg";
import StickerFlag from "@/assets/img/StickerFlag.svg";
import StickerFlight from "@/assets/img/StickerFlight.svg";
import StickerFlower from "@/assets/img/StickerFlower.svg";
import StickerHeart from "@/assets/img/StickerHeart.svg";
import StickerMail from "@/assets/img/StickerMail.svg";
import StickerMusic from "@/assets/img/StickerMusic.svg";
import StickerSmile from "@/assets/img/StickerSmile.svg";
import StickerStar from "@/assets/img/StickerStar.svg";

import PlanSticker1 from "@/assets/img/PlanSticker1.svg";
import PlanSticker2 from "@/assets/img/PlanSticker2.svg";
import PlanSticker3 from "@/assets/img/PlanSticker3.svg";
import PlanSticker4 from "@/assets/img/PlanSticker4.svg";
import PlanSticker5 from "@/assets/img/PlanSticker5.svg";

import LineSticker1 from "@/assets/img/LineSticker1.svg";
import LineSticker2 from "@/assets/img/LineSticker2.svg";
import LineSticker3 from "@/assets/img/LineSticker3.svg";
import LineSticker4 from "@/assets/img/LineSticker4.svg";
import LineSticker5 from "@/assets/img/LineSticker5.svg";

import Type2LineSticker1 from "@/assets/img/Type2LineSticker1.svg";
import Type2LineSticker2 from "@/assets/img/Type2LineSticker2.svg";
import Type2LineSticker3 from "@/assets/img/Type2LineSticker3.svg";
import Type2LineSticker4 from "@/assets/img/Type2LineSticker4.svg";
import Type2LineSticker5 from "@/assets/img/Type2LineSticker5.svg";

export const Type2LineStickers = [
  Type2LineSticker1.src,
  Type2LineSticker2.src,
  Type2LineSticker3.src,
  Type2LineSticker4.src,
  Type2LineSticker5.src,
];

export const LineSticker = [
  LineSticker1.src,
  LineSticker2.src,
  LineSticker3.src,
  LineSticker4.src,
  LineSticker5.src,
];

export const PlanSticker = [
  PlanSticker1.src,
  PlanSticker2.src,
  PlanSticker3.src,
  PlanSticker4.src,
  PlanSticker5.src,
];

export const Stickers = [
  StickerBall.src,
  StickerCamera.src,
  StickerFlag.src,
  StickerFlight.src,
  StickerFlower.src,
  StickerHeart.src,
  StickerMail.src,
  StickerMusic.src,
  StickerSmile.src,
  StickerStar.src,
];

const Plan = {
  HeaderButton: styled.button`
    all: unset;
    cursor: pointer;
    text-align: center;
  `,

  HeaderWrapper: styled(Box)`
    width: 100%;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: end;
  `,
  TitleText: styled(Typography)`
    width: 75%;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
  `,

  // Sorting Layer Design
  SortingWrapper: styled(Box)`
    height: 42px;
    margin: 4px 0;
    display: flex;
    gap: 10px;
    padding: 0px 16px 0px 16px;
  `,

  SortingButton: styled.button`
    all: unset;
    cursor: pointer;
    text-align: center;
    color: white;
    background-image: url("${(props) => props.url}");
    width: 82px;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  `,

  SortingLayerWrapper: styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 13px 18px;
  `,

  MinimalViewWrapper: styled(Box)`
    display: flex;
    align-items: center;
  `,
  MinimalText: styled.p`
    font-size: 12px;
    font-style: normal;
    line-height: normal;
    margin-right: 9px;
  `,
  MinimalSwitchBox: styled(Box)`
    width: 48px;
    height: 26px;
    flex-shrink: 0;
    border-radius: 26px;
    background: ${(props) => (props.switch === "true" ? `#6549ba` : `#D9D9D9`)};
    display: flex;
    align-items: center;
    cursor: pointer;
  `,

  MinimalSwitchCircle: styled(Box)`
    height: 24px;
    width: 24px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    left: ${(props) => (props.switch === "true" ? `23px` : `0px`)};
  `,

  MainWrapper: styled(Box)`
    display: grid;
    column-gap: 20px;
    ${(props) => props.isMini === "true" && "row-gap: 20px;"}
    grid-template-columns: 1fr;
    place-items: center;
    padding: 15px 14px 0px 17px;
    @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
  `,

  PlanWrapper: styled(Box)`
    cursor: pointer;
    width: 334px;
    height: 229px;
    background-image: url("${(props) => props.url}");
    background-repeat: no-repeat;
    z-index: 0;
  `,

  StickerBox: styled(Box)`
    width: 48px;
    height: 48px;
    position: relative;
    background-image: url("${(props) => props.url}");

    background-repeat: no-repeat;
    z-index: 10;
  `,

  TitleOutBox: styled(Box)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #fff;
    width: 317.015px;
    height: 70.448px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    transform: rotate(${(props) => props.rot}deg);
    z-index: 8;
  `,

  TitleInBox: styled(Box)`
    padding: 10px;
    display: flex;
    align-items: center;
    width: 302.925px;
    height: 54.597px;
    border-radius: 10px;
    border: 3px solid #c10000;
    background: #fff;

    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  `,

  StickerWrapper: styled(Box)`
    background-image: url("${(props) => props.url}");
    width: 82px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-style: normal;
    line-height: normal;

    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transform: rotate(${(props) => props.rot}deg);
    position: relative;
  `,

  LineBox: styled(Box)`
    width: 120.509px;
    height: 205px;
    flex-shrink: 0;
    top: -230px;
    left: 170px;
    position: relative;
    background-image: url("${(props) => props.url}");
    background-repeat: no-repeat;
    z-index: 3;
  `,

  PlanPicture: styled(Box)`
    z-index: 7;
    position: relative;
    transform: rotate(-10deg);
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

  DeleteBox: styled(Box)`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 332px;
    top: -181px;
    position: relative;
    border-radius: 0px 5px 5px 0px;
    background: #ff453a;
    width: 32px;
    height: 46px;
    flex-shrink: 0;
    z-index: 1;
  `,

  LineBoxType2: styled(Box)`
    width: 330px;
    height: 205px;
    flex-shrink: 0;
    top: -230px;
    left: 2px;
    position: relative;
    background-image: url("${(props) => props.url}");
    background-repeat: no-repeat;
    z-index: 3;
  `,

  PlanBox: styled(Box)`
    width: 362px;
  `,

  PlanMiniWrapper: styled(Box)`
    cursor: pointer;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    width: 344px;
    height: 81px;
    flex-shrink: 0;
  `,

  MiniDeleteBox: styled(Box)`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 345px;
    top: -70px;
    position: relative;
    border-radius: 0px 5px 5px 0px;
    background: #ff453a;
    width: 30px;
    height: 28px;
    flex-shrink: 0;
    z-index: 1;
  `,

  PlanMiniHeader: styled(Box)`
    width: 344px;
    height: 40px;
    flex-shrink: 0;
    background: #e3def3;
    border-radius: 15px 15px 0 0;
    display: flex;
    align-items: center;
  `,

  PlanMiniHeaderText: styled.p`
    position: relative;
    left: 130px;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  `,

  PlanMiniDateText: styled.p`
    position: relative;
    width: 200px;
    left: 130px;
    top: -73px;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  `,
};

export default Plan;
