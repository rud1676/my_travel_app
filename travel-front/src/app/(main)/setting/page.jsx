"use client";

import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import styles from "./setting.module.css";

import Menu from "./_component/Menu";
import AlertMenu from "./_component/AlertMenu";
import { Menus } from "@/util/data";

const SettingPage = () => {
  const navigator = useRouter();

  return (
    <>
      <Box className={styles.headerWrapper}>
        <Box className={styles.headerText}>설정</Box>
      </Box>
      <Box className={styles.profileWrapper}>
        <AlertMenu />
        {Menus(navigator).map((v) => (
          <Menu key={v.title} title={v.title} MenuBottom={v.MenuBottom} />
        ))}
      </Box>
    </>
  );
};

export default SettingPage;
