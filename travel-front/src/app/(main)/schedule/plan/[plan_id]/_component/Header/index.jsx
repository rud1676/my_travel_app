"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import styles from "./header.module.css";

import ArrowBackIcon from "@/assets/img/Arrow_Back.svg";
import MoreIcon from "@/assets/img/MoreIcon.svg";
import SettingIcon from "@/assets/img/SettingIcon.svg";

const Header = ({
  setOpen,
  setSettingModal,
  title,
  setIsSetting,
  isSetting,
}) => {
  const navigator = useRouter();

  const onClickBack = () => {
    navigator.replace("/schedule/plan");
  };

  return (
    <Box className={styles.headerWrapper}>
      <button className={styles.headerButton} onClick={onClickBack}>
        <Image width={17} height={29} src={ArrowBackIcon.src} alt="뒤로가기" />
      </button>
      <Typography className={styles.titleText}>{`${
        isSetting && title.length >= 8 ? `${title.slice(0, 7)}...` : title
      }${isSetting ? "(편집중..)" : ""}`}</Typography>
      <button className={styles.headerButton}>
        <Box className={styles.headerRight}>
          {!isSetting && (
            <Image
              onClick={() => {
                if (isSetting) {
                  setSettingModal(true);
                  return;
                }
                setIsSetting(true);
              }}
              width={25}
              height={37}
              src={SettingIcon.src}
              alt="setting"
            />
          )}
          <Image
            onClick={() => {
              setOpen(true);
            }}
            width={29}
            height={29}
            src={MoreIcon.src}
            alt="more"
          />
        </Box>
      </button>
    </Box>
  );
};

export default Header;
