"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Box, Typography } from "@mui/material";
import styles from "./scheduleheader.module.css";

import ArrowBack from "@/assets/img/Arrow_Back_ios.svg";

const TravelInfo = ({ year, month, day, title, details }) => {
  const navigator = useRouter();

  const onClickPlan = () => {
    if (title !== "세부 일정 없음" && details)
      navigator.push(`/plandetail?id=${details.id}`);
  };

  return (
    <Box className={styles.headerBox}>
      <Box className={styles.dateTextWrapper}>
        <Typography className={styles.dateBigText}>
          {month}월 {day}일
        </Typography>
        <Typography className={styles.dateSmallText}>{year}</Typography>
      </Box>
      <button
        style={{ cursor: title !== "세부 일정 없음" && `cursor:pointer` }}
        className={styles.planButton}
        onClick={onClickPlan}
      >
        <p className={styles.detailText}>{title}</p>
        {title !== "세부 일정 없음" && (
          <Image alt="뒤로가기" src={ArrowBack} width={13} height={15} />
        )}
      </button>
    </Box>
  );
};

export default TravelInfo;
