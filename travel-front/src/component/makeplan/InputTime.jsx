"use client";

import {
  InputTitleWrapper,
  TimeInputBox,
  InputLable,
  TimeInputText,
  TimeInputWrapper,
} from "@/app/plandetail/style";
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
    <TimeInputWrapper>
      <TimeInputBox
        type="number"
        onChange={onChangeValue}
        className={Pretendard_ExtraBold.className}
        value={v}
      />
      <TimeInputText className={Pretendard_SemiBold.className}>
        {title}
      </TimeInputText>
    </TimeInputWrapper>
  );
};

const InputTime = ({ forminute, formHour, setForminute, setFormHour }) => {
  return (
    <InputTitleWrapper>
      <InputLable className={Pretendard_Regular.className}>시간</InputLable>
      <TimeField title="시" setValue={setFormHour} v={formHour} />
      <TimeField title="분" setValue={setForminute} v={forminute} />
    </InputTitleWrapper>
  );
};

export default InputTime;
