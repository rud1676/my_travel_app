import { Box, Radio, FormControlLabel } from "@mui/material";
import styled from "@emotion/styled";

const Profile = {
  HeaderText: styled.p`
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
  ProfileWrapper: styled(Box)`
    padding-top: 30px;
    padding-left: 20px;
  `,

  MenuWrapper: styled(Box)``,

  MenuTitleText: styled.p`
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    margin-bottom: 16px;
  `,

  MenuBotWrapper: styled(Box)``,

  MenuTitle: styled.p`
    cursor: pointer;
    font-size: 16px;
    margin-bottom: ${(props) => (props.last === "true" ? "56" : "19")}px;
    font-style: normal;
    line-height: normal;
  `,

  MenuAlert: styled(Box)`
    height: 26px;
    display: flex;
    margin-bottom: ${(props) => (props.isspace === "true" ? "17px" : "54px")};

    align-items: center;
  `,

  MenuAlertText: styled.p`
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    margin-right: 20px;
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

  MenuAlertTime: styled(Box)`
    display: flex;
    margin-bottom: 56px;
  `,

  MenuAlertMinute: styled.p`
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    margin-right: 20px;
    color: #6549ba;
  `,

  FooterWrapper: styled(Box)`
    z-index: 9999;
    width: 100%;
    position: fixed;
    bottom: 0px;
  `,

  ProfileImage: styled(Box)`
    margin: 0px auto 0 auto;

    width: 128px;
    height: 128px;
    flex-shrink: 0;
    border-radius: 128px;
    background-image: url("${(props) => props.imgurl}");
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
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

  ProfileInput: styled.input`
    all: unset;
    border-radius: 12px;
    width: 80%;
    height: 18.783px;
    border: 1px solid #d9d9d9;
    background: #fff;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    padding: 17px 14px;
  `,

  InputWrapper: styled(Box)`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0px 40px 0px 40px;
  `,

  BirthBox: styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 23px;
    min-width: 250px;
    max-width: 700px;
    width: 100%;
  `,

  BirthText: styled.p`
    color: #a3a3a3;
    font-size: 16px;
    margin-right: 7px;
    font-style: normal;
    line-height: normal;
    width: ${(props) => (props.wid ? props.wid : "80")}px;
    flex-shrink: 0;
  `,

  YearInput: styled.input`
    all: unset;
    border-radius: 12px;
    width: calc(25% - 15px);
    height: 18.783px;
    border: 1px solid #d9d9d9;
    background: #fff;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    margin-right: 7px;
    padding: 17px 14px;
  `,

  MonthInput: styled.input`
    all: unset;
    border-radius: 12px;
    width: calc(20% - 15px);

    height: 18.783px;
    border: 1px solid #d9d9d9;
    background: #fff;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    margin-right: 7px;
    padding: 17px 14px;
  `,

  DayInput: styled.input`
    all: unset;
    border-radius: 12px;
    width: calc(20% - 15px);

    height: 18.783px;
    border: 1px solid #d9d9d9;
    background: #fff;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    margin-right: 7px;
    padding: 17px 14px;
  `,

  GenderBox: styled(Box)`
    display: flex;
    align-items: center;
    min-width: 250px;
    max-width: 700px;
    width: 100%;
  `,

  GenderRadio: styled(Radio)`
    padding: 5px 5px 5px 5px;
  `,

  GenderFormControlLabel: styled(FormControlLabel)`
    & .MuiFormControlLabel-label {
      color: #868686;
    }
    & .Mui-checked {
      color: #6549ba;
    }
    margin: 0px;
  `,

  ProfileInputWrapper: styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: ${(props) => (props.marb ? props.marb : "10px")};
    min-width: 250px;
    max-width: 700px;
    width: 100%;
  `,

  ProfileInputText: styled.p`
    width: 80px;
    color: #a3a3a3;
    font-size: 16px;
    margin-right: 7px;
    font-style: normal;
    line-height: normal;
    flex-shrink: 0;
  `,
};

export default Profile;
