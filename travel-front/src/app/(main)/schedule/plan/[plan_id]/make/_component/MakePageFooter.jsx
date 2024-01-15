"use client";

import Image from "next/image";

import Make from "../make.style";
import { Pretendard_Bold } from "@/assets/fonts/fonts";
import CheckIconWhite from "@/assets/img/CheckIconWhite.svg";

import useCustomMutate from "@/hooks/useCustomMutate";

import { myPlanApi } from "@/api/myplan";
import { PlanDetailMakeValid } from "@/util/valid";

const MakePageFooter = ({
  detail_id,
  travelId,
  day,
  mapOpen,
  setMapOpen,
  form,
}) => {
  const mutate = useCustomMutate(
    ({ data, id }) => myPlanApi.createPlanDetail(data, id),
    "수정 혹은 생성이 완료되었습니다.",
    () => `/schedule/plan/${travelId}`
  );

  const onClickBottom = () => {
    if (PlanDetailMakeValid(form)) {
      const formData = {
        color: form.color,
        memo: form.memo,
        title: form.title,
        location: form.location,
        time: form.time,
        locationName: form.locationName,
        imgsrc: form.photo,
        phoneNumber: form.phone,
        date: day || form.date,
      };

      if (detail_id) {
        formData.detailId = detail_id; // 수정하기 일시 사용.
      } else if (travelId) {
        formData.travelId = travelId;
      }
      console.log(formData);
      mutate({ data: formData, id: travelId });
    }
  };

  return (
    <Make.FooterWrapper
      className={Pretendard_Bold.className}
      onClick={mapOpen ? () => setMapOpen(false) : onClickBottom}
    >
      {mapOpen ? (
        "장소지정하기"
      ) : (
        <Image
          width={59}
          height={42}
          src={CheckIconWhite.src}
          alt="체크아이콘"
        />
      )}
    </Make.FooterWrapper>
  );
};

export default MakePageFooter;
