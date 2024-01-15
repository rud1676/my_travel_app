"use client";

import { Box } from "@mui/material";

import Package from "@/app/(main)/(home)/packages/[package]/package.style";
import OneDayCourse from "./OneDayCourse";

const TravelCourse = ({ courses }) => {
  return (
    <Package.TravelInfoBox
      sx={{ padding: "22px 16px 0px 16px", width: "100%" }}
    >
      {courses.map((v) => (
        <OneDayCourse
          contents={v.contents}
          key={v.id}
          day={v.day}
          title={v.title}
        />
      ))}
      <Box sx={{ height: 100 }} />
    </Package.TravelInfoBox>
  );
};

export default TravelCourse;
