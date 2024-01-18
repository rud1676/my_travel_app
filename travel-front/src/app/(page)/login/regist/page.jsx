"use client";

import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { RadioGroup, FormControl } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";

import Header from "@/app/_component/common/Header";
import ProfileImage from "@/app/_component/ProfileImage";
import Footer from "@/app/_component/common/Footer";

import Profile from "@/app/(main)/setting/setting.style";
import Modify from "@/app/(main)/setting/myinfo/modify/modify.style";

import CheckIconWhite from "@/assets/img/CheckIconWhite.svg";

import { Pretendard_SemiBold } from "@/assets/fonts/fonts";
import { globalApi, setToken } from "@/api/global";
import { LocalSave } from "@/LocalSave";

const RowRadioButtonsGroup = ({ gender, onChange }) => {
  return (
    <FormControl onChange={onChange} sx={{ display: "flex" }}>
      <RadioGroup defaultValue={gender} row name="row-radio-buttons-group">
        <Profile.GenderFormControlLabel
          value={0}
          control={<Profile.GenderRadio />}
          label="남자"
        />
        <Profile.GenderFormControlLabel
          value={1}
          control={<Profile.GenderRadio />}
          label="여자"
        />
        <Profile.GenderFormControlLabel
          value={2}
          control={<Profile.GenderRadio />}
          label="선택안함"
        />
      </RadioGroup>
    </FormControl>
  );
};

const Regist = () => {
  const navigator = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [gender, setGender] = useState(0);
  const [file, setFile] = useState(undefined);
  const [thumnail, setThumnail] = useState(undefined);
  const fileInput = useRef();

  const searchParams = useSearchParams();
  const snsId = searchParams.get("snsId");

  const onClickRegist = async () => {
    if (!name) {
      // eslint-disable-next-line no-alert
      window.alert("이름을 입력해주세요");
      return;
    }
    if (!phone) {
      // eslint-disable-next-line no-alert
      window.alert("휴대폰 번호를 입력해주세요");
      return;
    }
    if (!email) {
      // eslint-disable-next-line no-alert
      window.alert("이메일을 입력해주세요");
      return;
    }
    if (!year || !month || !day) {
      // eslint-disable-next-line no-alert
      window.alert("생년월일을 입력해주세요");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("birth", `${year}-${month}-${day}`);
    formData.append("gender", gender);
    formData.append("provider", "kakao");
    formData.append("snsId", snsId);
    formData.append("image", file);

    try {
      const { data } = await globalApi.snsJoin(formData);
      LocalSave.setToken(data.token);
      setToken(data.token);
      toast.success("회원가입이 완료되었습니다.");
      window.location.href = "/";
    } catch (err) {
      // eslint-disable-next-line no-alert
      window.alert(err.response.data.message);
    }
  };

  const onFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setThumnail(event.target.result);
    };

    setFile(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <Header
        onClickBack={() => {
          navigator.push("/login");
        }}
        title="회원 정보 입력"
        color="black"
      />

      <Modify.MyInfoWrapper>
        <ProfileImage
          onFileChange={onFileChange}
          fileInput={fileInput}
          thumnail={thumnail}
        />
        <Profile.InputWrapper>
          <Profile.ProfileInputWrapper marb="25px">
            <Profile.ProfileInputText className={Pretendard_SemiBold.className}>
              이름
            </Profile.ProfileInputText>
            <Profile.ProfileInput
              placeholder="이름"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={Pretendard_SemiBold.className}
            />
          </Profile.ProfileInputWrapper>
          <Profile.ProfileInputWrapper>
            <Profile.ProfileInputText className={Pretendard_SemiBold.className}>
              전화번호
            </Profile.ProfileInputText>
            <Profile.ProfileInput
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="'-'를 빼고 입력하세요"
              className={Pretendard_SemiBold.className}
            />
          </Profile.ProfileInputWrapper>
          <Profile.ProfileInputWrapper marb="32px">
            <Profile.ProfileInputText className={Pretendard_SemiBold.className}>
              이메일
            </Profile.ProfileInputText>
            <Profile.ProfileInput
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="이메일"
              className={Pretendard_SemiBold.className}
            />
          </Profile.ProfileInputWrapper>
          <Profile.BirthBox>
            <Profile.BirthText className={Pretendard_SemiBold.className}>
              생년월일
            </Profile.BirthText>
            <Profile.YearInput
              maxLength={4}
              type="number"
              value={year}
              onChange={(e) => {
                let { value } = e.target;
                if (value > 2023) {
                  value = 2023;
                }
                setYear(value);
              }}
              placeholder="년"
              className={Pretendard_SemiBold.className}
            />
            <Profile.MonthInput
              maxLength={2}
              value={month}
              type="number"
              onChange={(e) => {
                let { value } = e.target;
                if (value > 12) {
                  value = 12;
                }
                setMonth(value);
              }}
              placeholder="월"
              className={Pretendard_SemiBold.className}
            />
            <Profile.DayInput
              onChange={(e) => {
                let { value } = e.target;
                if (value > 31) {
                  value = 31;
                }
                setDay(value);
              }}
              type="number"
              value={day}
              maxLength={2}
              placeholder="일"
              className={Pretendard_SemiBold.className}
            />
          </Profile.BirthBox>
          <Profile.GenderBox>
            <Profile.BirthText className={Pretendard_SemiBold.className}>
              성별
            </Profile.BirthText>
            <RowRadioButtonsGroup
              onChange={(e) => setGender(e.target.value)}
              gender={0}
            />
          </Profile.GenderBox>
        </Profile.InputWrapper>
      </Modify.MyInfoWrapper>
      <Footer
        onClick={onClickRegist}
        child={
          <Image
            width={59}
            height={42}
            src={CheckIconWhite.src}
            alt="체크아이콘"
          />
        }
      />
    </>
  );
};

export default Regist;
