"use client";

import { useState, useEffect } from "react";

import { Box } from "@mui/material";
import styles from "./makemain.module.css";

import InputDetailTitle from "@/app/_component/ui/InputGroup/InputDetailTitle";
import TagColor from "@/app/_component/ui/InputGroup/InputTagColor";
import InputLocation from "@/app/_component/ui/InputGroup/InputLocation";
import InputMemo from "@/app/_component/ui/InputGroup/InputMemo";
import InputTime from "@/app/_component/ui/InputGroup/InputTime";

const MakeDetail = ({ form, day, setForm, setMapOpen, mapOpen }) => {
  const [yeart, setYeart] = useState("");
  const [montht, setMontht] = useState("");
  const [datet, setDatet] = useState("");

  useEffect(() => {
    let year;
    let month;
    let date;
    if (form?.date) [year, month, date] = form?.date.split("-");
    else if (day) [year, month, date] = day.split("-");
    setYeart(year);
    setMontht(month);
    setDatet(date);
  }, [day, form]);

  return (
    <Box className={styles.makeDetailWrapper}>
      <Box className={styles.titleBox}>
        <p className={styles.monthDayText}>
          {montht}월 {datet}일
        </p>
        <p className={styles.yearText}>{yeart}</p>
      </Box>
      <InputDetailTitle
        form={form}
        onChangeHandle={(e) => {
          setForm((prev) => {
            const temp = JSON.parse(JSON.stringify(prev));
            temp.title = e.target.value;
            return temp;
          });
        }}
      />
      <TagColor
        form={form}
        onChangeHandle={(value) => {
          setForm((prev) => {
            const temp = JSON.parse(JSON.stringify(prev));
            temp.color = value;
            return temp;
          });
        }}
      />
      <InputLocation
        form={form}
        setForm={setForm}
        mapOpen={mapOpen}
        setMapOpen={setMapOpen}
      />
      <InputTime form={form} setForm={setForm} />
      <InputMemo
        form={form}
        onChangeHandle={(e) => {
          setForm((prev) => {
            const temp = JSON.parse(JSON.stringify(prev));
            temp.memo = e.target.value;
            return temp;
          });
        }}
      />
    </Box>
  );
};

export default MakeDetail;
