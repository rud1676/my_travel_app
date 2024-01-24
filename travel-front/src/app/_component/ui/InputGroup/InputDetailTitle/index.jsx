"use client";

import { Box } from "@mui/material";
import styles from "./inputdetailtitle.module.css";

const InputDetailTitle = ({ form, onChangeHandle }) => {
  return (
    <Box className={styles.inputTitleWrapper}>
      <p className={styles.inputLable}>일정제목</p>
      <input
        className={styles.timeInputBox}
        defaultValue={form.title}
        onChange={onChangeHandle}
      />
    </Box>
  );
};

export default InputDetailTitle;
