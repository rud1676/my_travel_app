"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Global, css } from "@emotion/react";
import { Box, Typography, Modal, Button } from "@mui/material";

import styles from "./login.module.css";

import Header from "@/app/_component/common/Header";
import InputLabel from "@/app/_component/ui/InputGroup/InputLabel";
import useCustomMutate from "@/hooks/useCustomMutate";

import LoginLogo from "@/assets/img/LoginLogo.svg";
import SinesText from "@/assets/img/SinesTourText.svg";
import NaverLoginIcon from "@/assets/img/NaverLogin.svg";
import KakaoLoginIcon from "@/assets/img/KakaoLogin.svg";

import { KakaoAPIKey } from "@/util/keys";

import { globalApi, setToken } from "@/api/global";
import { LocalSave } from "@/LocalSave";
const LoginPage = () => {
  const navigator = useRouter();
  const [open, setOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ user: "", password: "" });

  const loginMutate = useCustomMutate(
    ({ formData }) => globalApi.localLogin(formData),
    "로그인이 완료되었습니다.",
    (data) => {
      LocalSave.setToken(data.token);
      setToken(data.token);
      return `/`;
    }
  );

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
        <Box
          className={styles.emailLogin}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Typography sx={{ color: "white" }} className={styles.loginText}>
            이메일로 시작하기
          </Typography>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.loginModal}>
          <form>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ marginBottom: 2 }}
            >
              로그인 팝업
            </Typography>
            <InputLabel
              setForm={setLoginForm}
              field="email"
              placeholder="이메일을 입력하세요"
              title="이메일"
            />
            <InputLabel
              setForm={setLoginForm}
              field="password"
              placeholder="패스워드를 입력하세요"
              title="패스워드"
              password
            />
            <Box>
              <Button
                onClick={() => {
                  loginMutate({
                    formData: loginForm,
                  });
                }}
              >
                로그인
              </Button>
              <Button
                onClick={() => {
                  navigator.push("/regist");
                }}
              >
                회원가입
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default LoginPage;
