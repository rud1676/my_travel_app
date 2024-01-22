"use client";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import styles from "./inputbirth.module.css";

const InputBirth = ({ setForm, birth }) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    setForm((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp.birth = `${year}-${month}-${day}`;
      return temp;
    });
  }, [year, day, month]);

  return (
    <Box className={styles.birthWrapper}>
      <Box className={styles.birthText}>생년월일</Box>
      <input
        className={styles.yearInput}
        onChange={(e) => {
          setYear(e.target.value);
        }}
        value={year}
        placeholder={birth?.split("-")[0]}
      />
      <input
        className={styles.monthInput}
        onChange={(e) => {
          setMonth(e.target.value);
        }}
        value={month}
        placeholder={birth?.split("-")[1]}
      />
      <input
        className={styles.dayInput}
        onChange={(e) => {
          setDay(e.target.value);
        }}
        value={day}
        placeholder={birth?.split("-")[2]}
      />
    </Box>
  );
};

InputBirth.propTypes = {
  setForm: PropTypes.func,
  birth: PropTypes.string,
};

export default InputBirth;
