"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/app/_component/common/Header";
import Footer from "@/app/_component/common/Footer";
import Modal from "@/app/_component/ui/Modal/ConfirmModal";
import UserForm from "@/app/_component/ui/Frame/UserForm";

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

  const { user } = useUser();
  const mutate = useCustomMutate(
    ({ formData, id }) => globalApi.profilePut(formData, id),
    "프로필이 수정되었습니다.",
    (_data) => `/setting/myinfo`
  );

  const onClickModify = (form, id) => {
    console.log(form);
    if (
      ModifyUserValid({
        name: form.name,
        birth: form.birth,
      })
    ) {
      const formData = MakeFormData(form);
      mutate({ formData, id });
    }
  };

  useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  return (
    <>
      <Header
        onClickBack={() => {
          setOpen(true);
        }}
        title="회원 정보 수정"
      />
      <UserForm form={form} setForm={setForm} />
      <Footer
        onClick={() => {
          onClickModify(form, user.id);
        }}
        backgroundColor="#00CE9D"
        child={
          <Image src={CheckIcon.src} width={63} height={46} alt="체크아이콘" />
        }
      />
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        onClickConfirm={() => {
          setOpen(false);
          navigator.replace("/setting/myinfo");
        }}
        title="변경 확인"
        content="변경 내용이 저장이 되지 않습니다.<br/> 정말 나가시겠습니까?"
        calcelText="취소"
        confirmText="확인"
      />
    </>
  );
};

export default MyInfoModifyPage;
