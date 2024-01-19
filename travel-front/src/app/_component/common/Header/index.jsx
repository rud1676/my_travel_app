"use client";

import Image from "next/image";

import { Box, Typography } from "@mui/material";
import styles from "./header.module.css";
import ArrowBackIcon from "@/assets/img/Arrow_Back.svg";
import ArrowBackWhite from "@/assets/img/ArrowBackWhite.svg";

import PropTypes from "prop-types";
const Header = ({ color = "black", title, onClickBack }) => {
  return (
    <Box className={styles.headerWrapper}>
      <Box className={styles.headerButton} onClick={onClickBack}>
        <Image
          width={17}
          height={29}
          src={color === "white" ? ArrowBackWhite.src : ArrowBackIcon.src}
          alt="뒤로가기아이콘"
        />
      </Box>
      <Typography className={styles.titleText} color={color}>
        {title}
      </Typography>
      <Box />
    </Box>
  );
};

Header.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClickBack: PropTypes.func.isRequired,
};
export default Header;
