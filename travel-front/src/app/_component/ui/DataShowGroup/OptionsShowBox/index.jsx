"use client";

import { Box, Typography } from "@mui/material";
import styles from "./optionshow.module.css";

import Option from "./_component/Option";

const OptionShowBox = ({ optionlist }) => {
  return (
    <Box className={styles.optionSelectBox}>
      <Typography className={styles.optionSelectTitle}>옵션 목록</Typography>
      {optionlist.map((v, i) => (
        <Option
          key={v.id}
          content={v.content}
          title={v.title}
          price={v.price}
          last={i === optionlist.length - 1}
        />
      ))}
    </Box>
  );
};

export default OptionShowBox;
