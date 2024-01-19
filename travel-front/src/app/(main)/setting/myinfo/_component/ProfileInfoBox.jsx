"use client";

import { Box } from "@mui/material";
import styles from "./myinfo.component.module.css";

const ProfileInfoBox = ({ title, content }) => {
  return (
    <Box className={styles.infoBox}>
      <Box className={styles.titleBox}>{title}</Box>
      <Box className={styles.contentBox}>{content}</Box>
    </Box>
  );
};
export default ProfileInfoBox;
