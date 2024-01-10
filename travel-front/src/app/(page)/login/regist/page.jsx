"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { useSetRecoilState } from "recoil";
import { useSearchParams } from "next/navigation";

import CheckIconWhite from "@/assets/img/CheckIconWhite.svg";
import { showFooter } from "@/Atom";
import CommonHeader from "@/component/common/CommonHeader";
import ProfileImage from "@/component/common/ProfileImage";

import {
  MyInfoWrapper,
  InputWrapper,
  ProfileInput,
  ProfileInputWrapper,
  ProfileInputText,
  BirthBox,
  BirthText,
  YearInput,
  MonthInput,
  DayInput,
  GenderBox,
  GenderRadio,
  MyInfoFooterWrapper,
  GenderFormControlLabel,
} from "@/app/(main)/setting/setting.style";

import { Pretendard_SemiBold, Pretendard_Bold } from "@/assets/fonts/fonts";
import { globalApi, setToken } from "@/api/global";
import { LocalSave } from "@/LocalSave";

const RowRadioButtonsGroup = ({ gender, onChange }) => {
  return (
    <FormControl onChange={onChange} sx={{ display: "flex" }}>
      <RadioGroup defaultValue={gender} row name="row-radio-buttons-group">
        <GenderFormControlLabel
          value={0}
          control={<GenderRadio />}
          label="남자"
        />
        <GenderFormControlLabel
          value={1}
          control={<GenderRadio />}
          label="여자"
        />
        <GenderFormControlLabel
          value={2}
          control={<GenderRadio />}
          label="선택안함"
        />
      </RadioGroup>
    </FormControl>
  );
};

const Regist = () => {
  const setShowFooter = useSetRecoilState(showFooter);
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
  useEffect(() => {
    setShowFooter(false);
  }, [setShowFooter]);
  return (
    <>
      <CommonHeader route="login" title="회원 정보 입력" color="black" />

      <MyInfoWrapper>
        <ProfileImage
          onFileChange={onFileChange}
          fileInput={fileInput}
          thumnail={thumnail}
        />
        <InputWrapper>
          <ProfileInputWrapper marb="25px">
            <ProfileInputText className={Pretendard_SemiBold.className}>
              이름
            </ProfileInputText>
            <ProfileInput
              placeholder="이름"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={Pretendard_SemiBold.className}
            />
          </ProfileInputWrapper>
          <ProfileInputWrapper>
            <ProfileInputText className={Pretendard_SemiBold.className}>
              전화번호
            </ProfileInputText>
            <ProfileInput
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="'-'를 빼고 입력하세요"
              className={Pretendard_SemiBold.className}
            />
          </ProfileInputWrapper>
          <ProfileInputWrapper marb="32px">
            <ProfileInputText className={Pretendard_SemiBold.className}>
              이메일
            </ProfileInputText>
            <ProfileInput
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="이메일"
              className={Pretendard_SemiBold.className}
            />
          </ProfileInputWrapper>
          <BirthBox>
            <BirthText className={Pretendard_SemiBold.className}>
              생년월일
            </BirthText>
            <YearInput
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
            <MonthInput
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
            <DayInput
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
          </BirthBox>
          <GenderBox>
            <BirthText className={Pretendard_SemiBold.className}>
              성별
            </BirthText>
            <RowRadioButtonsGroup
              onChange={(e) => setGender(e.target.value)}
              gender={0}
            />
          </GenderBox>
        </InputWrapper>
      </MyInfoWrapper>
      <MyInfoFooterWrapper
        bgcolor="#00CE9D"
        className={Pretendard_Bold.className}
        onClick={onClickRegist}
      >
        <Image
          width={59}
          height={42}
          src={CheckIconWhite.src}
          alt="체크아이콘"
        />
      </MyInfoFooterWrapper>
    </>
  );
};

export default Regist;
