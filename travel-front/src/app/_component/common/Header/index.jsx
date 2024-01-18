"use client";

import Image from "next/image";

import HeaderStyle, { EmptyBox } from "./header.style";

import ArrowBackIcon from "@/assets/img/Arrow_Back.svg";
import ArrowBackWhite from "@/assets/img/ArrowBackWhite.svg";

import PropTypes from "prop-types";
const Header = ({ color = "black", title, onClickBack }) => {
  return (
    <HeaderStyle.HeaderWrapper>
      <HeaderStyle.HeaderButton onClick={onClickBack}>
        <Image
          width={17}
          height={29}
          src={color === "white" ? ArrowBackWhite.src : ArrowBackIcon.src}
          alt="뒤로가기아이콘"
        />
      </HeaderStyle.HeaderButton>
      <HeaderStyle.TitleText color={color}>{title}</HeaderStyle.TitleText>
      <EmptyBox />
    </HeaderStyle.HeaderWrapper>
  );
};

Header.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClickBack: PropTypes.func.isRequired,
};
export default Header;
