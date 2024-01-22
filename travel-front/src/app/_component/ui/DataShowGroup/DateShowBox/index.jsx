"use client";

import moment from "moment";
import { Box } from "@mui/material";

import styles from "./dateshowbox.module.css";

const DateShowBox = ({ range }) => {
  return (
    <Box className={styles.confirmDateWrapper}>
      <Box className={styles.selectDateTextBox}>
        <p className={styles.confirmDateKeyText}>출발 일자</p>
        <p
          color={range?.to === undefined ? "#808080" : "#000"}
          className={styles.selectDateValueText}
        >
          {range?.from === undefined
            ? "일자를 선택해주세요."
            : moment(range.from).format("YYYY-MM-DD")}
        </p>
      </Box>
      <Box className={styles.selectDateTextBox}>
        <p className={styles.confirmDateKeyText}>도착 일자</p>
        <p
          className={styles.selectDateValueText}
          color={range?.to === undefined ? "#808080" : "#000"}
        >
          {range?.to === undefined
            ? "일자를 선택해주세요."
            : moment(range.to).format("YYYY-MM-DD")}
        </p>
      </Box>
    </Box>
  );
};

export default DateShowBox;
