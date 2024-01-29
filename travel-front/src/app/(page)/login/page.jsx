"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Global, css } from "@emotion/react";
import { Box, Typography } from "@mui/material";

import styles from "./login.module.css";

import Login from "@/app/(page)/login/login.style";
import Header from "@/app/_component/common/Header";
import LoginLogo from "@/assets/img/LoginLogo.svg";
import SinesText from "@/assets/img/SinesTourText.svg";
import NaverLoginIcon from "@/assets/img/NaverLogin.svg";
import KakaoLoginIcon from "@/assets/img/KakaoLogin.svg";

import { KakaoAPIKey } from "@/util/keys";

const LoginPage = () => {
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
    <Box className={styles.loginWrapper}>
      <Global
        styles={css`
          body {
            background: #6549ba !important;
          }
        `}
      />
      <Header title="로그인" color="white" onClickBack={() => {}} />

      <Box className={styles.logoBox}>
        <Image
          className={styles.logoImg}
          width={111}
          height={144}
          alt="그냥 로고"
          src={LoginLogo.src}
        />
        <Image
          width={140}
          height={59}
          alt="시네스택스트로고"
          src={SinesText.src}
        />
      </Box>
      <Box className={styles.loginBox}>
        <Box
          className={styles.kakaoLoginBox}
          onClick={() => {
            const REDIRECT_URI = `${window.location.origin}/login/callback/kakao`;
            const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KakaoAPIKey}&redirect_uri=${REDIRECT_URI}&response_type=code`;
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          <Image
            width={18}
            height={18}
            alt="카카오로고"
            src={KakaoLoginIcon.src}
          />
          <Typography className={styles.loginText}>카카오 시작하기</Typography>
        </Box>
        <Box
          className={styles.naverLoginBox}
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
          <Typography sx={{ color: "white" }} className={styles.loginText}>
            네이버 시작하기
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
