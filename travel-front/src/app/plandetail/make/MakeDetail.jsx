"use client";

import { useState, useEffect } from "react";

import { MakeDetailWrapper, TitleBox, MonthDayText, YearText } from "../style";
import { Pretendard_ExtraBold } from "@/assets/fonts/fonts";
import InputDetailTitle from "@/component/makeplan/InputDetailTitle";
import TagColor from "@/component/makeplan/TagColor";
import InputLocation from "@/component/makeplan/InputLocation";
import InputMemo from "@/component/makeplan/InputMemo";
import InputTime from "@/component/makeplan/InputTime";

const MakeDetail = ({
  setFormMemo,
  setFormLocation,
  setFormLocationName,
  setForminute,
  setFormPlanTitle,
  setFormTime,
  formMemo,
  formPlanTitle,
  formLocationName,
  forminute,
  formTime,
  setFormColor,
  setPhoneNumber,
  formColor,
  setImgsrc,
  curdate,
  day,
  setMapOpen,
  mapOpen,
}) => {
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
    <MakeDetailWrapper>
      <TitleBox>
        <MonthDayText className={Pretendard_ExtraBold.className}>
          {montht}월 {datet}일
        </MonthDayText>
        <YearText className={Pretendard_ExtraBold.className}>
          20{yeart}
        </YearText>
      </TitleBox>
      <InputDetailTitle
        formPlanTitle={formPlanTitle}
        setFormPlanTitle={setFormPlanTitle}
      />
      <TagColor color={formColor} setColor={setFormColor} />
      <InputLocation
        mapOpen={mapOpen}
        setMapOpen={setMapOpen}
        setImgsrc={setImgsrc}
        formLocationName={formLocationName}
        setFormLocationName={setFormLocationName}
        setFormLocation={setFormLocation}
        setPhoneNumber={setPhoneNumber}
      />
      <InputTime
        forminute={forminute}
        formHour={formTime}
        setFormHour={setFormTime}
        setForminute={setForminute}
      />
      <InputMemo formMemo={formMemo} setFormMemo={setFormMemo} />
    </MakeDetailWrapper>
  );
};

export default MakeDetail;
