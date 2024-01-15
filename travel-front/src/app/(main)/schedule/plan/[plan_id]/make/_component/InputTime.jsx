"use client";

import { useEffect, useState } from "react";
import Make from "../make.style";
import {
  Pretendard_Regular,
  Pretendard_SemiBold,
  Pretendard_ExtraBold,
} from "@/assets/fonts/fonts";

const TimeField = ({ v, setValue, title }) => {
  const onChangeValue = (e) => {
    let { value } = e.target;
    if (value >= 60) value = 59;
    if (title === "시" && value >= 24) value = 23;
    setValue(value);
  };
  return (
    <Make.TimeInputWrapper>
      <Make.TimeInputBox
        type="number"
        onChange={onChangeValue}
        className={Pretendard_ExtraBold.className}
        value={v}
      />
      <Make.TimeInputText className={Pretendard_SemiBold.className}>
        {title}
      </Make.TimeInputText>
    </Make.TimeInputWrapper>
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
    <Make.InputTitleWrapper>
      <Make.InputLable className={Pretendard_Regular.className}>
        시간
      </Make.InputLable>
      <TimeField title="시" setValue={setFormHour} v={formHour} />
      <TimeField title="분" setValue={setForminute} v={forminute} />
    </Make.InputTitleWrapper>
  );
};

export default InputTime;
