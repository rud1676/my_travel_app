"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  MiniDeleteBox,
  PlanMiniWrapper,
  PlanMiniHeader,
  PlanBox,
  PlanMiniHeaderText,
  PlanPicture,
  PlanMiniDateText,
} from "../style";
import PlanFolder from "@/assets/img/PlanFolder.svg";
import DeleteIcon from "@/assets/img/DeleteIcon.svg";
import { Pretendard_Bold, Pretendard_Medium } from "@/assets/fonts/fonts";

const PlanMiniComponent = ({
  setDeleteid,
  id,
  onClickDeleteButton,
  type,
  plan,
}) => {
  const navigator = useRouter();
  const [img, setImg] = useState("");

  const { title, startAt, endAt, details } = plan;
  const start = startAt.slice(2).replaceAll("-", "/");
  const end = endAt.slice(2).replaceAll("-", "/");

  const onClickPlan = useCallback(() => {
    navigator.push(`/plandetail?id=${plan.id}`);
  }, [navigator, plan]);

  useEffect(() => {
    for (let i = 0; i < details.length; i += 1) {
      if (details[i].image) {
        setImg(details[i].image.location);
        return;
      }
    }
  }, [setImg, details]);

  return (
    <PlanBox>
      <PlanMiniWrapper onClick={onClickPlan} url={PlanFolder.src}>
        <PlanMiniHeader>
          <PlanMiniHeaderText className={Pretendard_Bold.className}>
            {title}
          </PlanMiniHeaderText>
        </PlanMiniHeader>
        <PlanPicture imgsrc={img} left={-2} top={-37} rot={type ? -5 : 3} />
        <PlanMiniDateText
          className={Pretendard_Medium.className}
        >{`${start} ~ ${end}`}</PlanMiniDateText>
      </PlanMiniWrapper>
      <MiniDeleteBox
        onClick={() => {
          onClickDeleteButton();
          setDeleteid(id);
        }}
        url={DeleteIcon.src}
      >
        <Image src={DeleteIcon.src} width={24} height={24} alt="삭제아이콘" />
      </MiniDeleteBox>
    </PlanBox>
  );
};

export default PlanMiniComponent;
