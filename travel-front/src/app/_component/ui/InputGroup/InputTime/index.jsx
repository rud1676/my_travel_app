"use client";

import { useEffect, useState } from "react";
import styles from "./inputtime.module.css";
import { Box, Typography } from "@mui/material";

const TimeField = ({ v, setValue, title }) => {
  const onChangeValue = (e) => {
    let { value } = e.target;
    if (value >= 60) value = 59;
    if (title === "시" && value >= 24) value = 23;
    setValue(value);
  };
  return (
    <Box className={styles.timeInputWrapper}>
      <input
        type="number"
        onChange={onChangeValue}
        className={styles.timeInputBox}
        value={v}
      />
      <Typography className={styles.timeInputText}>{title}</Typography>
    </Box>
  );
};

const InputTime = ({ form, setForm }) => {
  const [forminute, setForminute] = useState("");
  const [formHour, setFormHour] = useState("");

  useEffect(() => {
    if (form.time) {
      const [t, m, _] = form.time.split(":");
      setForminute(m);
      setFormHour(t);
    }
  }, [form]);

  useEffect(() => {
    setForm((prev) => {
      prev.time = `${formHour}:${forminute}`;
      return prev;
    });
  }, [forminute, formHour]);
  return (
    <Box className={styles.inputTitleWrapper}>
      <p className={styles.inputLable}>시간</p>
      <TimeField title="시" setValue={setFormHour} v={formHour} />
      <TimeField title="분" setValue={setForminute} v={forminute} />
    </Box>
  );
};

export default InputTime;
