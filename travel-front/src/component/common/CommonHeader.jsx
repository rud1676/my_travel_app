"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ArrowBackIcon from "@/assets/img/Arrow_Back.svg";
import ArrowBackWhite from "@/assets/img/ArrowBackWhite.svg";
import {
  HeaderWrapper,
  HeaderButton,
  TitleText,
} from "@/app/(main)/setting/setting.style";
import { Pretendard_Medium } from "@/assets/fonts/fonts";

const Header = ({ color, title, route = null }) => {
  const navigator = useRouter();

  return (
    <HeaderWrapper>
      <HeaderButton
        onClick={() => {
          if (!route) navigator.back();
          else navigator.push(`/${route}`);
        }}
      >
        <Image
          width={17}
          height={29}
          src={color === "white" ? ArrowBackWhite.src : ArrowBackIcon.src}
          alt=""
        />
      </HeaderButton>
      <TitleText tcolor={color} className={Pretendard_Medium.className}>
        {title}
      </TitleText>
    </HeaderWrapper>
  );
};

export default Header;
