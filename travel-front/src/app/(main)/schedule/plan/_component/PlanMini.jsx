"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Plan from "../plan.style";
import PlanFolder from "@/assets/img/PlanFolder.svg";
import DeleteIcon from "@/assets/img/DeleteIcon.svg";
import { Pretendard_Bold, Pretendard_Medium } from "@/assets/fonts/fonts";

const PlanMiniComponent = ({ onClickDeleteButton, type, plan }) => {
  const navigator = useRouter();
  const [img, setImg] = useState("");

  const { title, startAt, endAt, details } = plan;
  const start = startAt.slice(2).replaceAll("-", "/");
  const end = endAt.slice(2).replaceAll("-", "/");

  const onClickPlan = () => {
    navigator.push(`/schedule/plan/${plan.id}`);
  };

  useEffect(() => {
    for (let i = 0; i < details.length; i += 1) {
      if (details[i].image) {
        setImg(details[i].image.location);
        return;
      }
    }
  }, [setImg, details]);

  return (
    <Plan.PlanBox>
      <Plan.PlanMiniWrapper onClick={onClickPlan} url={PlanFolder.src}>
        <Plan.PlanMiniHeader>
          <Plan.PlanMiniHeaderText className={Pretendard_Bold.className}>
            {title}
          </Plan.PlanMiniHeaderText>
        </Plan.PlanMiniHeader>
        <Plan.PlanPicture
          imgsrc={img}
          left={-2}
          top={-37}
          rot={type ? -5 : 3}
        />
        <Plan.PlanMiniDateText
          className={Pretendard_Medium.className}
        >{`${start} ~ ${end}`}</Plan.PlanMiniDateText>
      </Plan.PlanMiniWrapper>
      <Plan.MiniDeleteBox onClick={onClickDeleteButton} url={DeleteIcon.src}>
        <Image src={DeleteIcon.src} width={24} height={24} alt="삭제아이콘" />
      </Plan.MiniDeleteBox>
    </Plan.PlanBox>
  );
};

export default PlanMiniComponent;
