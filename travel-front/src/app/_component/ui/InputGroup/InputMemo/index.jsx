/* eslint-disable no-unused-vars */

"use client";

import { Box } from "@mui/material";
import styles from "./inputmemo.module.css";
import MemoBackground from "@/assets/img/MemoBackground.svg";

const InputMemo = ({ onChangeHandle, form }) => {
  return (
    <Box className={styles.inputTitleWrapper}>
      <p className={styles.inputLable} mr={11}>
        메모
      </p>
      <Box
        className={styles.memoBox}
        sx={{ backgroundImage: `url("${MemoBackground.src}")` }}
      >
        <textarea
          className={styles.memoTextarea}
          onChange={onChangeHandle}
          defaultValue={form.memo || ""}
          cols="3"
          rows="3"
        />
      </Box>
    </Box>
  );
};

export default InputMemo;
