"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Schedule from "../schedule.style";
import {
  Pretendard_ExtraBold,
  Pretendard_SemiBold,
} from "@/assets/fonts/fonts";
import ArrowBack from "@/assets/img/Arrow_Back_ios.svg";

const TravelInfo = ({ year, month, day, title, details }) => {
  const navigator = useRouter();

  const onClickPlan = () => {
    if (title !== "세부 일정 없음" && details)
      navigator.push(`/plandetail?id=${details.id}`);
  };

  return (
    <Schedule.HeaderBox>
      <Schedule.DateTextWrapper>
        <Schedule.DateBigText className={Pretendard_ExtraBold.className}>
          {month}월 {day}일
        </Schedule.DateBigText>
        <Schedule.DateSmallText className={Pretendard_ExtraBold.className}>
          {year}
        </Schedule.DateSmallText>
      </Schedule.DateTextWrapper>

      <Schedule.PlanButton
        onClick={onClickPlan}
        cursor={(title !== "세부 일정 없음").toString()}
      >
        <Schedule.DetailText className={Pretendard_SemiBold.className}>
          {title}
        </Schedule.DetailText>
        {title !== "세부 일정 없음" && (
          <Image alt="뒤로가기" src={ArrowBack} width={13} height={15} />
        )}
      </Schedule.PlanButton>
    </Schedule.HeaderBox>
  );
};

export default TravelInfo;
