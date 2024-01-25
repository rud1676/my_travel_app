"use client";

import { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import styles from "./scheduleframe.module.css";
import { tagcolor, sticker } from "@/util/data";

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
        plan.locationName.length >= 16
          ? `${plan.locationName.slice(0, 16)}...`
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
              background: plan.image ? `url("${plan.image.location}")` : "gray",
              transform: `rotate(${degs[plan.id % 3]}deg)`,
            }}
          />
          <Box className={styles.scheduleDetail}>
            <Typography className={styles.scheduleTime}>
              {plan.time.slice(0, 5)}
            </Typography>
            <Typography className={styles.schedulePlace}>
              {placeName}
            </Typography>
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default ScheduleFrame;
