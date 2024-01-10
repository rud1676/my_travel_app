"use client";

import Image from "next/image";
import { useState } from "react";

import HomeHeader from "@/app/(main)/(home)/_components/HomeHeader";
import SearchingBox from "@/app/(main)/(home)/_components/SearchingBox";
import Packages from "@/app/(main)/(home)/_components/Packages";

import HomeStyle from "@/app/(main)/(home)/home.style";

import Logo from "@/assets/img/SinesLogo.svg";
import Title from "@/assets/img/SinesTitle.svg";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <HomeStyle.HomeLogoBox>
        <Image src={Logo.src} width={39} height={51} alt="이미지로고" />
        <Image src={Title.src} width={141} height={27} alt="이미지 타이틀" />
      </HomeStyle.HomeLogoBox>
      <HomeHeader setShow={setShow} />

      {show ? (
        <SearchingBox />
      ) : (
        <HomeStyle.MainBoxWrapper>
          <Packages />
        </HomeStyle.MainBoxWrapper>
      )}
    </>
  );
};

export default Home;
