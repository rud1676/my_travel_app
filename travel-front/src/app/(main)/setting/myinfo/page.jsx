"use client";
import { useRouter } from "next/navigation";
import ProfileImage from "@/app/_component/ProfileImage";
import MyInfo from "./myinfo.style";

import Header from "@/app/_component/common/Header";
import Footer from "@/app/_component/common/Footer";
import useUser from "@/hooks/useUser";
import { genderText } from "@/util/data";
import { Pretendard_Regular } from "@/assets/fonts/fonts";

const ProfileInfoBox = ({ title, content }) => {
  return (
    <MyInfo.InfoBox>
      <MyInfo.TitleBox className={Pretendard_Regular.className}>
        {title}
      </MyInfo.TitleBox>
      <MyInfo.ContentBox>{content}</MyInfo.ContentBox>
    </MyInfo.InfoBox>
  );
};

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
      <MyInfo.ProfileInfoWrapper>
        <MyInfo.MyInfoWrapper>
          <ProfileImage thumnail={user?.image?.location} />
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
        </MyInfo.MyInfoWrapper>
      </MyInfo.ProfileInfoWrapper>
      <Footer onClick={onClickModify} child={`회원 정보 수정하기`} />
    </>
  );
};

export default MyInfoPage;
