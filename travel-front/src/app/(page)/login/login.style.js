import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Login = {
  LogoBox: styled(Box)`
    margin: 46px auto 0 auto;
    width: 111px;
  `,

  LoginWrapper: styled(Box)`
    text-align: center;
  `,

  LogoImg: styled.img`
    width: 111px;
    height: 144px;
    margin-bottom: 3px;
  `,

  CinesImg: styled.img`
    width: 140px;
    height: 59px;
  `,

  NaverLoginBox: styled(Box)`
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    margin: auto;
    width: 300px;
    height: 52px;
    background: #00c73c;
    cursor: pointer;
  `,
  LoginText: styled(Typography)`
    margin-left: 10px;
    font-weight: bold;
    ${(props) => props.naver === "true" && "color:white;"}
  `,

  KakaoLoginBox: styled(Box)`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 300px;
    height: 52px;
    background: #fee500;
    margin: 0px auto 19px auto;
  `,
  LoginBox: styled(Box)`
    margin-top: 139px;
  `,

  RegistBox: styled(Box)`
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: 50px auto;
  `,

  RegistText: styled(Typography)`
    color: #fff;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  `,

  RegistButton: styled(Box)`
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    color: #fff;

    font-size: 14px;
    font-style: normal;
    line-height: normal;
  `,
};

export default Login;
