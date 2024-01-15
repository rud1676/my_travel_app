"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

import Sechdule, {
  sticker,
  tagcolor,
} from "@/app/(main)/schedule/schedule.style";
import PlanDetail from "../plandetail.style";
import {
  Pretendard_Bold,
  Pretendard_ExtraBold,
  Pretendard_Medium,
} from "@/assets/fonts/fonts";
import UpDownIcon from "@/assets/img/UpDownIcon.svg";
import DeleteIcon from "@/assets/img/DeleteIcon.svg";

const ScheduleComponent = ({
  isSetting,
  setDelId,
  onClickDelete,
  detail,
  index,
  plan_id,
}) => {
  const navigator = useRouter();

  const onClickNewtravel = () => {
    if (isSetting) return toast.error("편집중이 아니여야 합니다.");
    return navigator.replace(`/schedule/plan/${plan_id}/make?id=${detail.id}`);
  };

  const time = `${detail.time.slice(0, 2)}:${detail.time.slice(3, 5)}`;
  const degs = [5, 3, -5];

  const [planTitle, setPlanTitle] = useState("");
  const [place, setPlace] = useState("");
  useEffect(() => {
    if (window.innerWidth <= 500) {
      setPlanTitle(
        detail.title.length >= 15
          ? `${detail.title.slice(0, 13)}...`
          : `${detail.title}`
      );
      setPlace(
        detail.locationName.length >= 15
          ? `${detail.locationName.slice(0, 16)}...`
          : `${detail.locationName}`
      );
    } else {
      setPlanTitle(detail.title);
      setPlace(detail.locationName);
    }
  }, [planTitle, setPlanTitle, setPlace, detail]);

  return (
    <Sechdule.SchduleComponentWrapper>
      <Sechdule.ScheduleHeader
        onClick={onClickNewtravel}
        backcolor={tagcolor[detail.color]}
      >
        <Sechdule.ScheduleSticker
          className={Pretendard_Bold.className}
          url={sticker[detail.color]}
        >
          {index}
        </Sechdule.ScheduleSticker>
        <Sechdule.ScheduleTitle className={Pretendard_Bold.className}>
          {planTitle}
        </Sechdule.ScheduleTitle>
      </Sechdule.ScheduleHeader>
      <Sechdule.SchduleMain>
        <Sechdule.LeftBox>
          <Sechdule.SchedulePicture
            imgsrc={detail.image ? detail.image.location : ""}
            rot={degs[detail.id % 3]}
          />
          <Sechdule.ScheduleDetail>
            <Sechdule.ScheduleTime className={Pretendard_ExtraBold.className}>
              {time}
            </Sechdule.ScheduleTime>
            <Sechdule.SchedulePlace className={Pretendard_Medium.className}>
              {place}
            </Sechdule.SchedulePlace>
          </Sechdule.ScheduleDetail>
        </Sechdule.LeftBox>
      </Sechdule.SchduleMain>
      {isSetting && (
        <>
          <PlanDetail.ScheduleMove>
            <PlanDetail.IconBox imgurl={UpDownIcon.src} />
          </PlanDetail.ScheduleMove>
          <PlanDetail.MiniDeleteBox
            onClick={() => {
              onClickDelete();
              setDelId(detail.id);
            }}
            url={DeleteIcon.src}
          >
            <Image
              src={DeleteIcon.src}
              width={24}
              height={24}
              alt="삭제아이콘"
            />
          </PlanDetail.MiniDeleteBox>
        </>
      )}
    </Sechdule.SchduleComponentWrapper>
  );
};

export default ScheduleComponent;
