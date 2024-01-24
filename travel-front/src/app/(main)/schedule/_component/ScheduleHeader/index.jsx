"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Box } from "@mui/material";
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
        <p className={styles.dateBigText}>
          {month}월 {day}일
        </p>
        <p className={styles.dateSmallText}>{year}</p>
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
