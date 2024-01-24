"use client";

import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import styles from "./scheduleframe.module.css";

const degs = [5, 3, -5];

const ScheduleFrame = ({ plan, children, onClickSchedule }) => {
  const [placeName, setPlaceName] = useState("");
  const [planTitle, setPlanTitle] = useState("");

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setPlanTitle(
        plan.title.length >= 14
          ? `${plan.title.slice(0, 13)}...`
          : `${plan.title.slice(0, 30)}`
      );
      setPlaceName(
        plan.locationName.length >= 8
          ? `${plan.locationName.slice(0, 8)}...`
          : plan.locationName
      );
    } else {
      setPlanTitle(
        plan.title.length >= 24
          ? `${plan.title.slice(0, 25)}...`
          : `${plan.title.slice(0, 30)}`
      );
      setPlaceName(
        plan.locationName.length >= 25
          ? `${plan.locationName.slice(0, 24)}...`
          : plan.locationName
      );
    }
  }, [setPlaceName, plan]);

  return (
    <Box className={styles.schduleComponentWrapper}>
      <Box
        className={styles.scheduleHeader}
        onClick={onClickSchedule}
        sx={{ backgroundColor: tagcolor[plan.color] }}
      >
        <Box
          className={styles.scheduleSticker}
          sx={{ backgroundImage: `url(${sticker[plan.color]})` }}
        >
          {plan.order}
        </Box>
        <p className={styles.scheduleTitle}>{planTitle}</p>
      </Box>
      <Box className={styles.schduleMain}>
        <Box className={styles.leftBox}>
          <Box
            className={styles.schedulePicture}
            sx={{
              background: `url("${
                plan.image ? plan.image.location : ""
              }"), lightgray 50% / cover, no-repeat`,
              transform: `rotate(${degs[plan.id % 3]}deg)`,
            }}
          />
          <Box className={styles.scheduleDetail}>
            <p className={styles.scheduleTime}>{plan.time.slice(0, 5)}</p>
            <p className={styles.schedulePlace}>{placeName}</p>
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default ScheduleFrame;
