import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const color = ["#7D7D7D", "#6549BA", "#d52f2f", "#00C596"];
export const statusText = [
  "상담 대기중",
  "결제 완료",
  "예약 취소",
  "예약 확정",
];
export const days = ["일", "월", "화", "수", "목", "금", "토"];

const Reserved = {
  /*예약상새*/
  StatusDetailBox: styled(Box)`
    border-radius: 5px;
    width: 120px;
    height: 29px;
    flex-shrink: 0;
    left: -20px;
    z-index: -99;
    background: ${(props) => props.bgc};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;
  `,
  ReservedDetailWrapper: styled(Box)`
    margin-top: 19px;
    padding: 0px 33px 0 30px;
  `,

  StatusDetailText: styled.p`
    color: #fff;
    font-size: 12px;
    font-style: normal;
    line-height: normal;
  `,

  DetailTitleText: styled.p`
    margin: auto;
    flex-shrink: 0;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
  `,
  ShowDetailInfo: styled(Box)`
    cursor: pointer;
    margin-top: 10px;
    font-size: 11px;
    font-style: normal;
    line-height: normal;
    display: flex;
    justify-content: right;
  `,

  DateShowBox: styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 8px;
  `,
  /*예약리스트*/
  ReservedWrapper: styled(Box)`
    width: 100%;
    margin-top: 60px;
    display: grid;
    place-items: center;

    @media all and (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
  `,

  PackageWrapper: styled(Box)`
    border-radius: 10px;
    background: #fff;
    width: 330px;
    height: 152px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 45px;
  `,

  PackageHeader: styled(Box)`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px 10px 0px 0px;
    background: #e1e1e1;
    width: 330px;
    height: 40px;
    flex-shrink: 0;
    padding-left: 9px;
    padding-right: 7px;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    position: relative;
    z-index: 2;
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

  DateWrapper: styled(Box)`
    display: flex;
    align-items: center;
    position: relative;
    width: 200px;
  `,

  Datetitle: styled.p`
    color: #9a9a9a;
    font-size: 12px;
    font-style: normal;
    margin-right: 7px;
    line-height: normal;
  `,

  DateText: styled.p`
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  `,

  PriceText: styled.p`
    display: inline-block;
    position: relative;
    right: -163px;
    top: -50px;
    color: #000;
    text-align: right;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
  `,

  StatusBox: styled(Box)`
    border-radius: 5px;
    width: 120px;
    height: 61px;
    flex-shrink: 0;
    position: relative;
    top: -222px;
    left: 10px;
    z-index: 1;
    background: ${(props) => props.bgc};
  `,

  StatusText: styled.p`
    position: relative;
    top: 10px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    line-height: normal;
  `,
};
export default Reserved;
