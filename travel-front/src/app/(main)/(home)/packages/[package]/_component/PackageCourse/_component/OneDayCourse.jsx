"use client";

import { Box } from "@mui/material";
import styles from "./component.module.css";

import Schedule from "./Schedule";
import DayTitle from "./DayTitle";

const OneDayCourse = ({ contents, day, title }) => {
  return (
    <Box className={styles.oneDayCourseBox}>
      <DayTitle num={day} title={title} />
      {contents.map((v, i) => (
        <Schedule
          key={v.id}
          flight={v.isFlight}
          content={v.content}
          last={i === contents.length - 1}
        />
      ))}
    </Box>
  );
};

export default OneDayCourse;
