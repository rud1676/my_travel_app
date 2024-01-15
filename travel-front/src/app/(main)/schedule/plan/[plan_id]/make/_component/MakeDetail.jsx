"use client";

import { useState, useEffect } from "react";

import Make from "../make.style";
import { Pretendard_ExtraBold } from "@/assets/fonts/fonts";

import InputDetailTitle from "./InputDetailTitle";
import TagColor from "./TagColor";
import InputLocation from "./InputLocation";
import InputMemo from "./InputMemo";
import InputTime from "./InputTime";

const MakeDetail = ({ form, setForm, curdate, day, setMapOpen, mapOpen }) => {
  const [yeart, setYeart] = useState("");
  const [montht, setMontht] = useState("");
  const [datet, setDatet] = useState("");

  useEffect(() => {
    let year;
    let month;
    let date;

    if (day) [year, month, date] = day.split("-");
    else if (curdate) [year, month, date] = curdate.split("-");
    setYeart(year);
    setMontht(month);
    setDatet(date);
  }, [curdate, day]);

  return (
    <Make.MakeDetailWrapper>
      <Make.TitleBox>
        <Make.MonthDayText className={Pretendard_ExtraBold.className}>
          {montht}월 {datet}일
        </Make.MonthDayText>
        <Make.YearText className={Pretendard_ExtraBold.className}>
          {yeart}
        </Make.YearText>
      </Make.TitleBox>
      <InputDetailTitle
        onChangeHandle={(e) => {
          setForm((prev) => {
            prev.title = e.target.value;
            return prev;
          });
        }}
      />
      <TagColor
        form={form}
        onChangeHandle={(value) => {
          setForm((prev) => {
            prev.color = value;
            return prev;
          });
        }}
      />
      <InputLocation
        form={form}
        setForm={setForm}
        mapOpen={mapOpen}
        setMapOpen={setMapOpen}
      />
      <InputTime setForm={setForm} />
      <InputMemo
        form={form}
        onChangeHandle={(e) => {
          setForm((prev) => {
            prev.memo = e.target.value;
          });
        }}
      />
    </Make.MakeDetailWrapper>
  );
};

export default MakeDetail;
