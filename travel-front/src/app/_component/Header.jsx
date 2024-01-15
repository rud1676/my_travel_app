"use client";

import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import ArrowBackIcon from "@/assets/img/Arrow_Back.svg";
import ArrowBackWhite from "@/assets/img/ArrowBackWhite.svg";
import AppStyle from "@/app/app.style";
import { Pretendard_Medium } from "@/assets/fonts/fonts";

const Header = ({ color, title, onClickBack }) => {
  return (
    <AppStyle.HeaderWrapper>
      <AppStyle.HeaderButton onClick={onClickBack}>
        <Image
          width={17}
          height={29}
          src={color === "white" ? ArrowBackWhite.src : ArrowBackIcon.src}
          alt=""
        />
      </AppStyle.HeaderButton>
      <AppStyle.TitleText
        tcolor={color}
        className={Pretendard_Medium.className}
      >
        {title}
      </AppStyle.TitleText>
      <Box></Box>
    </AppStyle.HeaderWrapper>
  );
};

export default Header;
