"use client";

import { Checkbox, Box, Typography } from "@mui/material";
import {
  CircleOutlined,
  RadioButtonCheckedOutlined,
} from "@mui/icons-material";

import styles from "./optionselectbox.module.css";

const OptionBox = ({ title, price, order, select, setSelOption }) => {
  const ptext = `₩ ${price?.toLocaleString()}`;
  const onClickCheck = () => {
    setSelOption(order);
  };
  return (
    <Box className={styles.optionSelectData}>
      <Box className={styles.checkBoxWrapper}>
        <Checkbox
          checked={select}
          onClick={onClickCheck}
          sx={{ padding: "0px" }}
          icon={<CircleOutlined />}
          checkedIcon={<RadioButtonCheckedOutlined sx={{ color: "#6549BA" }} />}
        />
        <Box className={styles.checkBoxLabel}>{title}</Box>
      </Box>
      <Typography className={styles.optionPriceText}>{ptext}</Typography>
    </Box>
  );
};

export default OptionBox;
