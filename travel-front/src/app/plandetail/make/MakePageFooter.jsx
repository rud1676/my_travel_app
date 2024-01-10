"use client";

import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { FooterWrapper } from "../style";
import { Pretendard_Bold } from "@/assets/fonts/fonts";
import CheckIconWhite from "@/assets/img/CheckIconWhite.svg";
import { myPlanApi } from "@/api/myplan";

const MakePageFooter = ({
  detail_id,
  formColor,
  forminute,
  formPlanTitle,
  formLocation,
  formTime,
  formLocationName,
  formMemo,
  imgsrc,
  travelId,
  curdate,
  day,
  mapOpen,
  setMapOpen,
  phoneNumber,
}) => {
  const navigator = useRouter();

  const CheckFormValue = () => {
    const hoursRegex = /^(?:[01]?[0-9]|2[0-3])$/;
    const minutesRegex = /^[0-5]?[0-9]$/;
    if (!(minutesRegex.test(forminute) && hoursRegex.test(formTime))) {
      return "시간을 정확히 입력해주세요";
    }
    if (formPlanTitle === "") {
      return "제목을 입력하세요";
    }
    if (formPlanTitle.length >= 30) {
      return "제목을 30자 이내로 작성해주세요.";
    }
    if (!formLocation) {
      return "장소를 지정해주세요";
    }
    return "";
  };

  const onClickBottom = () => {
    const CreateMyDetailPlan = async (data, id) => {
      await myPlanApi.createPlanDetail(data, id);
      toast.success("수정 혹은 생성이 완료되었습니다.");
      navigator.push(`/plandetail?id=${travelId}`);
    };
    const check = CheckFormValue();
    if (check === "") {
      const formData = {
        color: formColor,
        memo: formMemo,
        title: formPlanTitle,
        location: formLocation,
        time: `${formTime}:${forminute}`,
        locationName: formLocationName,
        imgsrc,
        phoneNumber,
      };
      if (detail_id) formData.detailId = detail_id; // 수정하기 일시 사용.
      if (curdate) formData.date = curdate;

      // 생성하기 일때 필요한 값.
      if (travelId) formData.travelId = travelId;
      if (day) formData.date = day; // 새로 생성일때 넣어줄 travel_Id

      CreateMyDetailPlan(formData, travelId);
    } else {
      toast.error(check);
    }
  };
  if (mapOpen) {
    return (
      <FooterWrapper
        bgcolor="#00CE9D"
        className={Pretendard_Bold.className}
        onClick={() => setMapOpen(false)}
      >
        장소 지정하기
      </FooterWrapper>
    );
  }
  return (
    <FooterWrapper
      bgcolor="#00CE9D"
      className={Pretendard_Bold.className}
      onClick={onClickBottom}
    >
      <Image width={59} height={42} src={CheckIconWhite.src} alt="체크아이콘" />
    </FooterWrapper>
  );
};

export default MakePageFooter;
