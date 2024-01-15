"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

import ImageCarousel from "@/app/(main)/(home)/packages/[package]/_component/ImageCarousel";
import Navigator from "@/app/(main)/(home)/packages/[package]/_component/Navigator";
import TravelInfo from "@/app/(main)/(home)/packages/[package]/_component/package-info/TravelInfo";
import TravelCourse from "@/app/(main)/(home)/packages/[package]/_component/package-course/TravelCourse";

const TravelGuide = dynamic(
  () =>
    import(
      "@/app/(main)/(home)/packages/[package]/_component/package-guide/TravelGuide"
    ),
  { ssr: false }
);

const Main = ({ setRange, range, travel }) => {
  const [page, setPage] = useState(0);

  return (
    <Box>
      <ImageCarousel imgs={travel.images} />
      <Navigator setPage={setPage} />
      {page === 0 && (
        <TravelInfo
          range={range}
          setRange={setRange}
          totaldays={travel.totaldays}
          detail_array={travel.categories}
          optionlist={travel.options}
        />
      )}
      {page === 1 && <TravelCourse courses={travel.courses} />}
      {page === 2 && <TravelGuide content={travel.guide} />}
      {page === 3 && <TravelGuide content={travel.policy} />}
    </Box>
  );
};

export default Main;
