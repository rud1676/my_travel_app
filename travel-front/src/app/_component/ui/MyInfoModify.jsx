"use client";

import ProfileImage from "@/app/_component/ProfileImage";
import { Pretendard_SemiBold } from "@/assets/fonts/fonts";
import Modify from "../modify.style";
import { useEffect, useState } from "react";
import { MakeFileReader } from "@/util/makeData";

const MyInfoModify = ({ user, setForm }) => {
  const [y, m, d] = user.birth.split("-");

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [year, setYear] = useState(y);
  const [month, setMonth] = useState(m);
  const [day, setDay] = useState(d);
  const [gender, setGender] = useState(0);
  const [file, setFile] = useState(undefined);
  const [thumnail, setThumnail] = useState(user?.image?.location);

  const onFileChange = (e) => {
    const reader = MakeFileReader(setThumnail);
    setFile(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    setForm({
      name,
      phone,
      email,
      year,
      month,
      day,
      gender,
      file,
    });
  }, [name, phone, email, year, month, day, gender, file]);

  return (
    <Modify.MyInfoWrapper>
      <ProfileImage
        isChangeButton
        thumnail={thumnail}
        onFileChange={onFileChange}
      />
      <Modify.InputWrapper>
        <Modify.ProfileInputWrapper marb="25px">
          <Modify.ProfileInputText className={Pretendard_SemiBold.className}>
            이름
          </Modify.ProfileInputText>
          <Modify.ProfileInput
            placeholder={user.name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={Pretendard_SemiBold.className}
          />
        </Modify.ProfileInputWrapper>
        <Modify.ProfileInputWrapper>
          <Modify.ProfileInputText className={Pretendard_SemiBold.className}>
            전화번호
          </Modify.ProfileInputText>
          <Modify.ProfileInput
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder={user.phone}
            className={Pretendard_SemiBold.className}
          />
        </Modify.ProfileInputWrapper>
        <Modify.ProfileInputWrapper marb="32px">
          <Modify.ProfileInputText className={Pretendard_SemiBold.className}>
            이메일
          </Modify.ProfileInputText>
          <Modify.ProfileInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={user.email}
            className={Pretendard_SemiBold.className}
          />
        </Modify.ProfileInputWrapper>

        <Modify.BirthBox>
          <Modify.BirthText className={Pretendard_SemiBold.className}>
            생년월일
          </Modify.BirthText>
          <Modify.YearInput
            onChange={(e) => {
              setYear(e.target.value);
            }}
            className={Pretendard_SemiBold.className}
            placeholder={year}
          />
          <Modify.MonthInput
            onChange={(e) => {
              setMonth(e.target.value);
            }}
            placeholder={month}
            className={Pretendard_SemiBold.className}
          />
          <Modify.DayInput
            onChange={(e) => {
              setDay(e.target.value);
            }}
            placeholder={day}
            className={Pretendard_SemiBold.className}
          />
        </Modify.BirthBox>
        <Modify.GenderBox>
          <Modify.BirthText wid={65} className={Pretendard_SemiBold.className}>
            성별
          </Modify.BirthText>
          <RowRadioButtonsGroup
            onChange={(e) => setGender(e.target.value)}
            gender={user.gender}
          />
        </Modify.GenderBox>
      </Modify.InputWrapper>
    </Modify.MyInfoWrapper>
  );
};

export default MyInfoModify;
