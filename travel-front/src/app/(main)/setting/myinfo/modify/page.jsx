"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/app/_component/common/Header";
import Footer from "@/app/_component/common/Footer";
import Modal from "@/app/_component/ConfirmModal";
import MyInfoSuspens from "./_component/MyInfoSuspens";

import useUser from "@/hooks/useUser";
import useCustomMutate from "@/hooks/useCustomMutate";
import { globalApi } from "@/api/global";

import { MakeFormData } from "@/util/makeData";
import { ModifyUserValid } from "@/util/valid";
import CheckIcon from "@/assets/img/CheckIconWhite.svg";

const MyInfoModifyPage = () => {
  const navigator = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});

  const { user, isLoading } = useUser();

  const mutate = useCustomMutate(
    ({ formData, id }) => globalApi.profilePut(formData, id),
    "프로필이 수정되었습니다.",
    (_data) => `/myinfo`
  );

  const onClickModify = (form, id) => {
    if (
      ModifyUserValid({
        name: form.name,
        day: form.day,
        year: form.year,
        month: form.month,
      })
    ) {
      const formData = MakeFormData({
        name: form.name,
        day: form.day,
        phone: form.phone,
        email: form.email,
        gender: form.gender,
        file: form.file,
        year: form.year,
        month: form.month,
      });
      mutate({ formData, id });
    }
  };
  if (isLoading) return null;
  return (
    <>
      <Header
        onClickBack={() => {
          setOpen(true);
        }}
        title="회원 정보 수정"
      />
      <MyInfoSuspens setForm={setForm} id={user.id} />
      <Footer
        onClick={() => {
          onClickModify(form, user.id);
        }}
        bgcolor="#00CE9D"
        child={<Image src={CheckIcon.src} width={30} height={30} />}
      />
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        onClickConfirm={() => {
          setOpen(false);
          navigator.replace("/setting/myinfo");
        }}
        title="변경 확인"
        content="변경한 내용이 저장이 되지 않습니다. 정말 나가시겠습니까?"
        calcelText="취소"
        confirmText="확인"
      />
    </>
  );
};

export default MyInfoModifyPage;
