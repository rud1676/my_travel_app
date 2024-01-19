"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { Box, Input, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBack from "@/assets/img/Arrow_Back.svg";
import styles from "./homeheader.module.css";

import SortBar from "@/app/(main)/(home)/_components/SortBar";

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
      queryFn: () => {
        return travelPackageApi.list();
      },
      suspense: false,
    });
  };

  if (search) {
    return (
      <Box className={styles.headerBox}>
        <button className={styles.headerBackButton} onClick={onClickBack}>
          <Image width={17} height={29} src={ArrowBack.src} alt="" />
        </button>
        <form className={styles.searchingWrapper} onSubmit={onSearchSubmit}>
          <Input
            className={styles.searchingInput}
            disableUnderline
            onChange={textHandle}
            value={text}
          />
          <Button
            className={styles.headerSearchIconBox}
            type="submit"
            variant="contained"
          >
            <SearchIcon className={styles.searchIconSVG} />
          </Button>
        </form>
      </Box>
    );
  }

  return (
    <>
      <Box className={styles.headerBox}>
        <Typography className={styles.headerTitle}>
          어떤 여행을 원하시나요?
        </Typography>
        <Button
          className={styles.headerSearchIconBox}
          onClick={() => {
            if (!search) onClickSearch();
          }}
          variant="contained"
        >
          <SearchIcon className={styles.searchIconSVG} />
        </Button>
      </Box>

      <SortBar />
    </>
  );
};

export default HomeHeader;
