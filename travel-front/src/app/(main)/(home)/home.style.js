import { Box, Typography, Button, Input } from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

import styled from "@emotion/styled";

import PinRed from "@/assets/img/Pin_Red.svg";
import PinYellow from "@/assets/img/Pin_Yellow.svg";
import PinSky from "@/assets/img/Pin_Sky.svg";
import PinPurple from "@/assets/img/Pin_Purple.svg";
import PinOrange from "@/assets/img/Pin_Orange.svg";
import PinLightBlue from "@/assets/img/Pin_LightBlue.svg";
import PinGreen from "@/assets/img/Pin_Green.svg";
import PinBlue from "@/assets/img/Pin_Blue.svg";

export const RandomPins = [
  PinGreen.src,
  PinLightBlue.src,
  PinRed.src,
  PinYellow.src,
  PinSky.src,
  PinPurple.src,
  PinOrange.src,
  PinBlue.src,
];

const HomeStyle = {
  HeaderBox: styled(Box)`
    padding: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  HeaderTitle: styled(Typography)`
    font-size: 20px;
    font-style: normal;
    line-height: normal;
  `,
  HeaderSearchIconBox: styled(Button)`
    box-shadow: none !important;
    border-radius: 99px;
    width: 40px;
    height: 40px;
    position: relative;
    background: #e2e2e2 !important;
    color: #646464 !important;
    padding: 0px !important;
  `,
  SearchIconSVG: styled(SearchIcon)`
    font-size: 30px;
    display: inline-block;
    position: absolute;
    top: 5px;
    left: 5px;
  `,
  SortingLayerWrapper: styled(Box)`
    height: 42px;
    justify-content: center;
    gap: 10px;
    display: flex;
    paddding-left: 24px;
    padding-right: 24px;
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
    white-space: nowrap;
  `,
  MainBoxWrapper: styled(Box)`
    display: grid;
    padding: 43px 24px 10px 24px;
    grid-template-columns: calc(50% - 9px) calc(50% - 9px);
    column-gap: 16px;
    row-gap: 38px;
    margin-bottom: 72px;
    @media (min-width: 600px) and (max-width: 799px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media all and (min-width: 800px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `,
  PackagePinImage: styled(Image)`
    position: relative;
    border: 0px;

    top: -205px;
    left: 73px;
  `,
  PackageWrapper: styled(Box)`
    cursor: pointer;
    width: 164px;
    height: 184px;
    padding: 14px 8px 0px 8px;
    margin: auto;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background: white;
  `,
  PackageImage: styled.img`
    width: 100%;
    height: 122px;
  `,
  PackageImageEmpty: styled(Box)`
    width: 100%;
    height: 122px;
    border: 1px solid gray;
  `,
  PackagePriceOuter: styled(Box)`
    flex-shrink: 0;
    border-radius: 3px;
    background: #ff8787;
    box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25);
    width: 85px;
    height: 21px;
    position: relative;
    float: right;
    left: 85px;
    top: -20px;
  `,
  PackagePriceInner: styled(Box)`
    width: 82.35px;
    height: 19.039px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 0.5px solid #fff;
    position: relative;
    background: #ff8787;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -18.5px;
    left: 1.5px;
  `,
  PackagePriceText: styled(Box)`
    color: #fff;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    line-height: normal;
  `,
  PackageTitle: styled(Typography)`
    margin: 4px 0 0 3px;
    font-size: 8px;
    font-style: normal;
    line-height: normal;
  `,
  PackageSubTitle: styled(Typography)`
    margin: 3px 0 0 0;
    color: #000;
    font-size: 10px;
    font-style: normal;
    line-height: normal;
  `,
  HeaderBackButton: styled.button`
    all: unset;
    cursor: pointer;
    text-align: center;
    margin-right: 16px;
    margin-left: 24px;
  `,
  SearchingWrapper: styled.form`
    text-align: center;
    width: 100%;
    border-radius: 99px;
    background: #e2e2e2;
    display: flex;
    justify-content: space-between;
  `,
  SearchingInput: styled(Input)`
    width: 90%;
    padding-left: 10px;
  `,
  PopPularKeyTitle: styled(Typography)`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 21px;
  `,
  PopPularKeyword: styled(Typography)`
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  PopPularKeywordBox: styled(Box)`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  `,
  SearchingBoxWrapper: styled(Box)`
    padding-left: 25px;
    margin-top: 27px;
  `,

  RecentSearchWrapper: styled(Box)`
    margin-top: 24px;
  `,
  RecentKeywordWrapper: styled(Box)`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 9px;
  `,
  RecentKeywordText: styled(Typography)`
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  RecentKeywordCloseButton: styled.button`
    width: 8px;
    height: 8px;
  `,
  RecentSearchTitle: styled(Typography)`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 21px;
  `,

  PackagePriceWrapper: styled(Box)`
    display: flex;
    height: 21px;
    justify-content: right;
    flex-wrap: nowrap;
  `,

  PackagePriceTextWrapper: styled(Box)`
    top: -21px;
    position: relative;
  `,

  HomeLogoBox: styled(Box)`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 53px;
  `,
  HomeEmptyBox: styled(Box)`
    height: 83px;
  `,
};

export default HomeStyle;
