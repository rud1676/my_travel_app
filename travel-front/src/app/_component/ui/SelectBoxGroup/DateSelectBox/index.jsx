"use client";

import moment from "moment";
import { Box } from "@mui/material";
import styles from "./dateselectbox.module.css";

const SelectDate = ({ setOpenDate, range }) => {
  return (
    <Box className={styles.selectDateWrapper}>
      <Box className={styles.selectDateTextBox}>
        <p className={styles.selectDateKeyText}>출발 일자</p>
        <p
          style={{ color: range?.from === undefined ? "#808080" : "#000" }}
          className={styles.selectDateValueText}
        >
          {range?.from === undefined
            ? "일자를 선택해주세요."
            : moment(range.from).format("YYYY-MM-DD")}
        </p>
      </Box>
      <Box className={styles.selectDateTextBox}>
        <p className={styles.selectDateKeyText}>도착 일자</p>
        <p
          className={styles.selectDateValueText}
          style={{ color: range?.to === undefined ? "#808080" : "#000" }}
        >
          {range?.to === undefined
            ? "일자를 선택해주세요."
            : moment(range.to).format("YYYY-MM-DD")}
        </p>
      </Box>

      <button
        className={styles.selectDateButton}
        onClick={() => {
          setOpenDate(true);
        }}
      >
        일자 선택
      </button>
    </Box>
  );
};

export default SelectDate;
