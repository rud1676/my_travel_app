"use client";

import Image from "next/image";

import { Box } from "@mui/material";
import styles from "./inputtagcolor.module.css";

import { colors } from "@/util/data";

const TagColor = ({ onChangeHandle, form }) => {
  return (
    <Box className={styles.inputTitleWrapper}>
      <p className={styles.inputLable}>태그색깔</p>
      <Box className={styles.colorBox}>
        {colors.map((v, i) => {
          return (
            <Image
              style={{
                border: i === form.color && `2px solid black`,
                borderRadius: i === form.color && `50%`,
              }}
              key={v.src}
              onClick={() => {
                onChangeHandle(i);
              }}
              width={31}
              height={31}
              src={v.src}
              alt={v.name || "hi"}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default TagColor;
