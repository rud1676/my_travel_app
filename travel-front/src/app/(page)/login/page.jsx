"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Global, css } from "@emotion/react";

import Login from "@/app/(page)/login/login.style";
import Header from "@/app/_component/Header";
import LoginLogo from "@/assets/img/LoginLogo.svg";
import SinesText from "@/assets/img/SinesTourText.svg";
import NaverLoginIcon from "@/assets/img/NaverLogin.svg";
import KakaoLoginIcon from "@/assets/img/KakaoLogin.svg";

const LoginPage = () => {
  const KAKAO_CLIENT_ID = "1fc3317ebc6570d452cc9e17aea6ccc8";

  const initNaver = () => {
    // eslint-disable-next-line new-cap
    const naverLogin = new window.naver_id_login(
      "h64K3Gr81jSSiJYMcUtX",
      `${window.location.origin}/login/callback/naver`
    );
    naverLogin.init_naver_id_login();
  };

  useEffect(() => {
    initNaver();
  }, []);

  return (
    <Login.LoginWrapper>
      <Global
        styles={css`
          body {
            background: #6549ba !important;
          }
        `}
      />
      <Header title="로그인" color="white" onClickBack={() => {}} />

      <Login.LogoBox>
        <Login.LogoImg src={LoginLogo.src} />
        <Login.CinesImg src={SinesText.src} />
      </Login.LogoBox>
      <Login.LoginBox>
        <Login.KakaoLoginBox
          onClick={() => {
            const REDIRECT_URI = `${window.location.origin}/login/callback/kakao`;
            const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          <Image
            width={18}
            height={18}
            alt="카카오로고"
            src={KakaoLoginIcon.src}
          />
          <Login.LoginText>카카오 시작하기</Login.LoginText>
        </Login.KakaoLoginBox>
        <Login.NaverLoginBox
          onClick={() => {
            document.getElementById("naver_id_login").firstChild.click();
          }}
        >
          <Image
            width={16}
            height={16}
            alt="네이버로고"
            src={NaverLoginIcon.src}
          />
          <Login.LoginText naver="true">네이버 시작하기</Login.LoginText>
        </Login.NaverLoginBox>
      </Login.LoginBox>
    </Login.LoginWrapper>
  );
};

export default LoginPage;
