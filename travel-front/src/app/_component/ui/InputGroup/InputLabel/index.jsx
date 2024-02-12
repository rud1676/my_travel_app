"use client";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import styles from "./inputlabel.module.css";

const InputLabel = ({
  setForm,
  field,
  placeholder,
  title,
  password = false,
}) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setForm((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp[field] = value;
      return temp;
    });
  }, [value]);
  return (
    <Box className={styles.profileInputWrapper}>
      <Box className={styles.profileInputText}>{title}</Box>
      <input
        type={password ? "password" : "text"}
        className={styles.profileInput}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </Box>
  );
};

InputLabel.propTypes = {
  setForm: PropTypes.func,
  field: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

export default InputLabel;
