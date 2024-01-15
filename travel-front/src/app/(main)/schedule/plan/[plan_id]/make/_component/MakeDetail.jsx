"use client";

import { useState, useEffect } from "react";

import Make from "../make.style";
import { Pretendard_ExtraBold } from "@/assets/fonts/fonts";

import InputDetailTitle from "./InputDetailTitle";
import TagColor from "./TagColor";
import InputLocation from "./InputLocation";
import InputMemo from "./InputMemo";
import InputTime from "./InputTime";

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
    </Make.MakeDetailWrapper>
  );
};

export default MakeDetail;
