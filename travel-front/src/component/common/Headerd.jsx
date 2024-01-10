"use client";

import Image from "next/image";

import {
  HeaderWrapper,
  TitleText,
  HeaderBackButton,
} from "@/app/(main)/schedule/plan/make/make.style";
import { Pretendard_Medium } from "@/assets/fonts/fonts";
import ArrowBackIcon from "@/assets/img/Arrow_Back.svg";

const Header = ({ onClickBack, title }) => {
  return (
    <HeaderWrapper>
      <HeaderBackButton onClick={onClickBack}>
        <Image width={17} height={29} src={ArrowBackIcon.src} alt="" />
      </HeaderBackButton>
      <TitleText className={Pretendard_Medium.className}>{title}</TitleText>
    </HeaderWrapper>
  );
};

export default Header;
