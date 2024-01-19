"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import Header from "@/app/_component/common/Header";
import Footer from "@/app/_component/common/Footer";
import UserForm from "@/app/_component/ui/UserForm";

import CheckIconWhite from "@/assets/img/CheckIconWhite.svg";

import useCustomMutate from "@/hooks/useCustomMutate";
import { globalApi, setToken } from "@/api/global";
import { LocalSave } from "@/LocalSave";
import { ModifyUserValid } from "@/util/valid";
import { MakeFormData } from "@/util/makeData";

const Regist = () => {
  const navigator = useRouter();
  const searchParams = useSearchParams();

  const snsId = searchParams.get("snsId");

  const [form, setForm] = useState({});

  const mutate = useCustomMutate(
    ({ formData }) => globalApi.snsJoin(formData),
    "회원가입이 완료되었습니다.",
    (data) => {
      LocalSave.setToken(data.token);
      setToken(data.token);
      return `/`;
    }
  );

  const onClickRegist = (form) => {
    if (
      ModifyUserValid({
        name: form.name,
        birth: form.birth,
      })
    ) {
      form["snsId"] = snsId;
      form["provider"] = "kakao";
      const formData = MakeFormData(form);
      mutate({ formData });
    }
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
      <UserForm form={form} setForm={setForm} />
      <Footer
        onClick={() => {
          onClickRegist(form);
        }}
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
