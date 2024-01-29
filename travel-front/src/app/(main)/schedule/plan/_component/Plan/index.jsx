"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Stickers,
  PlanSticker,
  LineSticker,
  Type2LineStickers,
} from "@/util/data";

import { Box } from "@mui/material";
import styles from "./plan.module.css";
import PlanFolder from "@/assets/img/PlanFolder.svg";
import DeleteIcon from "@/assets/img/DeleteIcon.svg";

const PlanComponent = ({ onClickDeleteButton, plan }) => {
  const navigator = useRouter();
  const [img, setImg] = useState("");

  const { title, startAt, endAt, details } = plan;
  const start = startAt.slice(2);
  const end = endAt.slice(2);

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
        sx={{ backgroundImage: `url("${PlanFolder.src}")` }}
        className={styles.planWrapper}
        onClick={onClickPlan}
      >
        {plan.id % 2 === 1 ? (
          <>
            <Box
              className={styles.stickerBox}
              sx={{ backgroundImage: `url("${Stickers[plan.id % 10]}")` }}
              left={150}
              top={25}
            />
            <Box
              className={styles.stickerBox}
              sx={{ backgroundImage: `url("${Stickers[(plan.id + 1) % 10]}")` }}
              left={30}
              top={115}
            />
            <Box
              className={styles.titleOutBox}
              top={30}
              left={10}
              sx={{ transform: `rotate(5deg)` }}
            >
              <Box className={styles.titleInBox}>{title}</Box>
            </Box>
            <Box
              className={styles.stickerWrapper}
              sx={{
                backgroundImage: `url("${PlanSticker[plan.id % 5]}")`,
                transform: `rotate(-10.721deg)`,
              }}
              left={15}
              top={-115}
              zIndex={6}
            >
              {start}
            </Box>
            <Box
              className={styles.stickerWrapper}
              sx={{
                backgroundImage: `url("${PlanSticker[(plan.id + 1) % 5]}")`,
                transform: `rotate(15.413deg)`,
              }}
              left={95}
              top={-140}
              zIndex={5}
            >
              {end}
            </Box>
            <Box
              className={styles.lineBox}
              sx={{ backgroundImage: `url("${LineSticker[plan.id % 5]}")` }}
            />
            <Box
              className={styles.planPicture}
              sx={{
                backgroundImage: `url("${img}")`,
              }}
              left={175}
              top={-410}
            />
          </>
        ) : (
          <>
            <Box
              className={styles.stickerBox}
              sx={{ backgroundImage: `url("${Stickers[plan.id % 10]}")` }}
              left={150}
              top={58}
            />
            <Box
              className={styles.stickerBox}
              sx={{ backgroundImage: `url("${Stickers[(plan.id + 1) % 10]}")` }}
              left={250}
              top={120}
            />
            <Box
              className={styles.titleOutBox}
              top={-10}
              left={5}
              sx={{ transform: `rotate(-12deg)` }}
            >
              <Box className={styles.titleInBox}>{title}</Box>
            </Box>
            <Box
              className={styles.stickerWrapper}
              sx={{
                backgroundImage: `url("${PlanSticker[(plan.id + 1) % 5]}")`,
                transform: `rotate(-10.721deg)`,
              }}
              left={165}
              top={-33}
              zIndex={9}
            >
              {start}
            </Box>
            <Box
              className={styles.stickerWrapper}
              sx={{
                backgroundImage: `url("${PlanSticker[plan.id % 5]}")`,
                transform: `rotate(0deg)`,
              }}
              left={244}
              top={-90}
              zIndex={8}
            >
              {end}
            </Box>
            <Box
              className={styles.lineBoxType2}
              sx={{
                backgroundImage: ` url("${Type2LineStickers[plan.id % 5]}")`,
              }}
            />
            <Box
              className={styles.planPicture}
              sx={{
                backgroundImage: `url("${img}")`,
                transform: `rotate(-3deg)`,
              }}
              left={25}
              top={-410}
            />
          </>
        )}
      </Box>
      <Box className={styles.deleteBox} onClick={onClickDeleteButton}>
        <Image src={DeleteIcon.src} width={24} height={24} alt="삭제아이콘" />
      </Box>
    </Box>
  );
};

export default PlanComponent;
