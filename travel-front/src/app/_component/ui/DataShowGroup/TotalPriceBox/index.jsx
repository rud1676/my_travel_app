"use client";

import { Box } from "@mui/material";
import styles from "./totalpricebox.module.css";

const TotalPriceBox = ({ totalPrice, width }) => {
  console.log(width);
  return (
    <Box className={styles.totalPriceBox} sx={{ width: `${width} !important` }}>
      <p className={styles.totalPriceLabel}>총 금액</p>

      <p
        className={styles.totalPriceText}
      >{`₩ ${totalPrice.toLocaleString()}`}</p>
    </Box>
  );
};

export default TotalPriceBox;
