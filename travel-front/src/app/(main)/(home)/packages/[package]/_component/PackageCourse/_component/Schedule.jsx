"use client";

import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Box, Typography } from "@mui/material";
import styles from "./component.module.css";

import FlightIcon from "@/assets/img/FlightIcon.svg";
import SchduleNoFlight from "@/assets/img/SchduleNoFlight.svg";

const Schedule = ({ last = false, content, flight = false }) => {
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const [padding, setPadding] = useState(true);
  useEffect(() => {
    if (textRef.current && lineRef.current) {
      const textHeight = textRef.current.offsetHeight;
      let calheight = `${textHeight}px`;
      if (textHeight < 49) {
        setPadding(false);
        calheight = "60px";
      } else if (!flight) {
        calheight = `${textHeight + 60}px`;
      }

      lineRef.current.style.height = calheight;
    }
  }, [flight]);

  return (
    <Box
      className={styles.scheduleWrapper}
      padding={`${padding && `7px 0 7px 0px`}`}
    >
      <Box
        className={styles.scheduleIcon}
        sx={{
          backgroundImage: `url(${
            flight ? FlightIcon.src : SchduleNoFlight.src
          })`,
        }}
      />
      <Box
        className={styles.scheduleLine}
        ref={lineRef}
        display={last && "none"}
      />

      <Typography
        className={styles.scheduleText}
        ref={textRef}
        fontSize={flight ? `14px` : `11px`}
      >
        {content}
      </Typography>
    </Box>
  );
};

Schedule.propTypes = {
  last: PropTypes.bool,
  flight: PropTypes.bool,
  content: PropTypes.string.isRequired,
};

export default Schedule;
