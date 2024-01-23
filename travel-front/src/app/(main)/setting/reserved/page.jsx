"use client";

import { useRouter } from "next/navigation";

import { Box } from "@mui/material";
import styles from "./reserved.module.css";

import Header from "@/app/_component/common/Header";
import ReservedTravels from "./_component/ReservedTravels";

const ReservedPackages = () => {
  const navigator = useRouter();

  return (
    <>
      <Header
        title="예약 내역"
        onClickBack={() => {
          navigator.back();
        }}
      />
      <Box className={styles.reservedWrapper}>
        <ReservedTravels />
      </Box>
    </>
  );
};

export default ReservedPackages;
