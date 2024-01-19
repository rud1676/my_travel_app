"use client";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Box, Typography, Checkbox } from "@mui/material";
import {
  CircleOutlined,
  RadioButtonCheckedOutlined,
} from "@mui/icons-material";
import styles from "./inputgender.module.css";

const InputGender = ({ setForm }) => {
  const [gender, setGenger] = useState(0);

  useEffect(() => {
    setForm((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp.gender = gender;
      return temp;
    });
  }, [gender]);

  return (
    <Box className={styles.genderWrapper}>
      <Box className={styles.genderTitle} width={65}>
        성별
      </Box>
      <Box className={styles.genderSelectBox}>
        <Box className={styles.genderOneBox}>
          <Checkbox
            onChange={() => {
              setGenger(0);
            }}
            checked={0 === gender}
            icon={<CircleOutlined />}
            checkedIcon={
              <RadioButtonCheckedOutlined sx={{ color: "#6549BA" }} />
            }
            className={styles.genderRadio}
          />
          <Typography className={styles.gendertext}>남자</Typography>
        </Box>
        <Box className={styles.genderOneBox}>
          <Checkbox
            onChange={() => {
              setGenger(1);
            }}
            checked={1 === gender}
            icon={<CircleOutlined />}
            checkedIcon={
              <RadioButtonCheckedOutlined sx={{ color: "#6549BA" }} />
            }
            className={styles.genderRadio}
          />
          <Typography className={styles.gendertext}>여자</Typography>
        </Box>
        <Box className={styles.genderOneBox}>
          <Checkbox
            onChange={() => {
              setGenger(2);
            }}
            checked={2 === gender}
            icon={<CircleOutlined />}
            checkedIcon={
              <RadioButtonCheckedOutlined sx={{ color: "#6549BA" }} />
            }
            className={styles.genderRadio}
          />
          <Typography className={styles.gendertext}>선택 안함</Typography>
        </Box>
      </Box>
    </Box>
  );
};

InputGender.propTypes = {
  setForm: PropTypes.func,
};

export default InputGender;
