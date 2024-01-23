"use client";

import { Box } from "@mui/material";
import styles from "./mainfooter.module.css";

const FooterIconBox = ({ color, checkRouter, onClick, children }) => {
  return (
    <Box
      className={styles.footerSelectBox}
      sx={{
        background: `${checkRouter ? color : "white"}`,
        borderBottom: `4px solid ${color}`,
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};
export default FooterIconBox;
