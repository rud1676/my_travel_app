"use client";

import { Box } from "@mui/material";
import styles from "./main.module.css";
import MainFooter from "@/app/(main)/_component/MainFooter";

const RootLayout = ({ children }) => {
  return (
    <>
      <Box className={styles.screenWrapper}>{children}</Box>
      <MainFooter />
    </>
  );
};

export default RootLayout;
