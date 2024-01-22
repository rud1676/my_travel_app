"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import ImageCarousel from "@/app/(main)/(home)/packages/[package]/_component/ImageCarousel";
import MenuBar from "@/app/(main)/(home)/packages/[package]/_component/MenuBar";
import PackageInfo from "@/app/(main)/(home)/packages/[package]/_component/PackageInfo";
import PackageCourse from "@/app/(main)/(home)/packages/[package]/_component/PackageCourse";

const TravelGuide = dynamic(
  () =>
    import("@/app/(main)/(home)/packages/[package]/_component/PackageGuide"),
  { ssr: false }
);

const Main = ({ setRange, range, travel }) => {
  const [page, setPage] = useState(0);

  return (
    <>
      <ImageCarousel imgs={travel.images} />
      <MenuBar setPage={setPage} page={page} />
      {page === 0 && (
        <PackageInfo
          range={range}
          setRange={setRange}
          totaldays={travel.totaldays}
          detail_array={travel.categories}
          optionlist={travel.options}
        />
      )}
      {page === 1 && <PackageCourse courses={travel.courses} />}
      {page === 2 && <TravelGuide content={travel.guide} />}
      {page === 3 && <TravelGuide content={travel.policy} />}
    </>
  );
};

export default Main;
