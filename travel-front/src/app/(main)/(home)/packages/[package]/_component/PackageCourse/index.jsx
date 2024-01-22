"use client";

import { Box } from "@mui/material";
import styles from "./packagecourse.module.css";
import OneDayCourse from "./_component/OneDayCourse";

const TravelCourse = ({ courses }) => {
  return (
    <Box className={styles.travelInfoBox}>
      {courses.map((v) => (
        <OneDayCourse
          contents={v.contents}
          key={v.id}
          day={v.day}
          title={v.title}
        />
      ))}
      <Box sx={{ height: 100 }} />
    </Box>
  );
};

export default TravelCourse;
