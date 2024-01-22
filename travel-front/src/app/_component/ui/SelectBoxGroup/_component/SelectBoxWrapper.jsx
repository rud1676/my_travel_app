"use client";

import React from "react";

import { Box, Typography } from "@mui/material";
import styles from "./component.module.css";

const SelectBoxWrapper = ({ children, title }) => {
  return (
    <Box className={styles.confirmDataInpuBoxWrapper}>
      <Typography className={styles.confirmDataTitle}>{title}</Typography>
      {children}
    </Box>
  );
};

export default SelectBoxWrapper;
