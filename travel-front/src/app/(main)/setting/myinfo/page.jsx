"use client";

import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

import styles from "./myinfo.module.css";

import Header from "@/app/_component/common/Header";
import Footer from "@/app/_component/common/Footer";
import InputProfileImage from "@/app/_component/ui/InputGroups/InputProfileImage";
import ProfileInfoBox from "./_component/ProfileInfoBox";

import useUser from "@/hooks/useUser";
import { genderText } from "@/util/data";

const MyInfoPage = () => {
  const { user, isLoading } = useUser();
  const navigator = useRouter();
  const onClickModify = () => {
    navigator.push("/setting/myinfo/modify");
  };

  if (isLoading) return <></>;
  return (
    <>
      <Header
        title="회원 정보"
        onClickBack={() => {
          navigator.push("/setting");
        }}
      />
      <Box className={styles.myInfoWrapper}>
        <InputProfileImage thumnailsrc={user?.image?.location} />
        <ProfileInfoBox title="이름" content={user?.name} />
        <ProfileInfoBox
          title="연락처"
          content={user?.phone ? user?.phone : "없음"}
        />
        <ProfileInfoBox title="이메일" content={user?.email} />
        <ProfileInfoBox
          title="생년월일"
          content={user?.birth ? user?.birth : "없음"}
        />
        <ProfileInfoBox title="성별" content={genderText(user.gender)} />
      </Box>
      <Footer onClick={onClickModify} child={`회원 정보 수정하기`} />
    </>
  );
};

export default MyInfoPage;
