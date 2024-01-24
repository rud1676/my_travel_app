"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Box } from "@mui/material";
import styles from "./planmini.module.css";

import PlanFolder from "@/assets/img/PlanFolder.svg";
import DeleteIcon from "@/assets/img/DeleteIcon.svg";

const PlanMiniComponent = ({ onClickDeleteButton, type, plan }) => {
  const navigator = useRouter();
  const [img, setImg] = useState("");

  const { title, startAt, endAt, details } = plan;
  const start = startAt.slice(2).replaceAll("-", "/");
  const end = endAt.slice(2).replaceAll("-", "/");

  const onClickPlan = () => {
    navigator.push(`/schedule/plan/${plan.id}`);
  };

  useEffect(() => {
    for (let i = 0; i < details.length; i += 1) {
      if (details[i].image) {
        setImg(details[i].image.location);
        return;
      }
    }
  }, [setImg, details]);

  return (
    <Box className={styles.planBox}>
      <Box
        className={styles.planMiniWrapper}
        onClick={onClickPlan}
        sx={{ backgroundImage: `url("${PlanFolder.src}")` }}
      >
        <Box className={styles.planMiniHeader}>
          <Box className={styles.planMiniHeaderText}>{title}</Box>
        </Box>
        <Box
          className={styles.planPicture}
          sx={{
            background: `
            url("${img}"),
            lightgray 50% / cover no-repeat;
            `,
            transform: `rotate(${type ? -5 : 3}deg)`,
          }}
          left={-2}
          top={-37}
        />
        <p className={styles.planMiniDateText}>{`${start} ~ ${end}`}</p>
      </Box>
      <Box className={styles.miniDeleteBox} onClick={onClickDeleteButton}>
        <Image src={DeleteIcon.src} width={24} height={24} alt="삭제아이콘" />
      </Box>
    </Box>
  );
};

export default PlanMiniComponent;
