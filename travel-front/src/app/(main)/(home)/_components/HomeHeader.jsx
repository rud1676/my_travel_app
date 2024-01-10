"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import SotringLayer from "@/app/(main)/(home)/_components/SotringLayer";

import HomeStyle from "@/app/(main)/(home)/home.style";
import ArrowBack from "@/assets/img/Arrow_Back.svg";
import { Pretendard_Regular } from "@/assets/fonts/fonts";

import { travelPackageApi } from "@/api/travel";

const HomeHeader = ({ setShow }) => {
  const [search, setSearch] = useState(false);

  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const onSearchSubmit = async (e) => {
    // 쿼리 날리고 - 화면 전환
    e.preventDefault();
    await queryClient.fetchQuery({
      queryKey: ["packages"],
      queryFn: () => {
        return travelPackageApi.list(text, null);
      },
      suspense: true,
    });
    setShow(false);
  };

  const SwitchScreen = (v) => {
    setSearch(v);
    setShow(v);
  };

  const onClickSearch = () => {
    SwitchScreen(true);
  };

  const textHandle = (e) => {
    setText(e.target.value);
  };

  const onClickBack = async () => {
    // 화면전환 - 다시 패키지들 불러옴
    SwitchScreen(false);

    await queryClient.fetchQuery({
      queryKey: ["packages"],
      suspense: true,
    });
  };

  if (search) {
    return (
      <HomeStyle.HeaderBox>
        <HomeStyle.HeaderBackButton onClick={onClickBack}>
          <Image width={17} height={29} src={ArrowBack.src} alt="" />
        </HomeStyle.HeaderBackButton>
        <HomeStyle.SearchingWrapper onSubmit={onSearchSubmit}>
          <HomeStyle.SearchingInput
            disableUnderline
            onChange={textHandle}
            value={text}
          />
          <HomeStyle.HeaderSearchIconBox type="submit" variant="contained">
            <HomeStyle.SearchIconSVG />
          </HomeStyle.HeaderSearchIconBox>
        </HomeStyle.SearchingWrapper>
      </HomeStyle.HeaderBox>
    );
  }

  return (
    <>
      <HomeStyle.HeaderBox>
        <HomeStyle.HeaderTitle className={Pretendard_Regular.className}>
          어떤 여행을 원하시나요?
        </HomeStyle.HeaderTitle>
        <HomeStyle.HeaderSearchIconBox
          onClick={() => {
            if (!search) onClickSearch();
          }}
          variant="contained"
        >
          <HomeStyle.SearchIconSVG />
        </HomeStyle.HeaderSearchIconBox>
      </HomeStyle.HeaderBox>

      <SotringLayer />
    </>
  );
};

export default HomeHeader;
