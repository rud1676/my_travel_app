"use client";

import Image from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

import HomeHeader from "@/app/(main)/(home)/_components/HomeHeader";
import SearchBar from "@/app/(main)/(home)/_components/SearchBar";
import Packages from "@/app/(main)/(home)/_components/Packages";

import styles from "./home.module.css";

import Logo from "@/assets/img/SinesLogo.svg";
import Title from "@/assets/img/SinesTitle.svg";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Box className={styles.homeLogoBox}>
        <Image src={Logo.src} width={39} height={51} alt="이미지로고" />
        <Image src={Title.src} width={141} height={27} alt="이미지 타이틀" />
      </Box>
      <HomeHeader setShow={setShow} />

      {show ? (
        <SearchBar setShow={setShow} />
      ) : (
        <Box className={styles.mainBoxWrapper}>
          <Packages />
        </Box>
      )}
    </>
  );
};

export default Home;
