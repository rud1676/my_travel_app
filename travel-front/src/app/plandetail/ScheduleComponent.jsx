"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  SchduleComponentWrapper,
  ScheduleHeader,
  ScheduleTitle,
  ScheduleSticker,
  SchduleMain,
  SchedulePicture,
  ScheduleDetail,
  ScheduleTime,
  SchedulePlace,
  LeftBox,
  sticker,
  tagcolor,
} from "../(main)/schedule/schedule.style";
import { ScheduleMove, IconBox, MiniDeleteBox } from "./style";
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
}) => {
  const navigator = useRouter();

  const onClickNewtravel = () => {
    if (isSetting) return toast.error("편집중이 아니여야 합니다.");
    return navigator.replace(`/plandetail/make?id=${detail.id}`);
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
    <SchduleComponentWrapper>
      <ScheduleHeader
        onClick={onClickNewtravel}
        backcolor={tagcolor[detail.color]}
      >
        <ScheduleSticker
          className={Pretendard_Bold.className}
          url={sticker[detail.color]}
        >
          {index}
        </ScheduleSticker>
        <ScheduleTitle className={Pretendard_Bold.className}>
          {planTitle}
        </ScheduleTitle>
      </ScheduleHeader>
      <SchduleMain>
        <LeftBox>
          <SchedulePicture
            imgsrc={detail.image ? detail.image.location : ""}
            rot={degs[detail.id % 3]}
          />
          <ScheduleDetail>
            <ScheduleTime className={Pretendard_ExtraBold.className}>
              {time}
            </ScheduleTime>
            <SchedulePlace className={Pretendard_Medium.className}>
              {place}
            </SchedulePlace>
          </ScheduleDetail>
        </LeftBox>
      </SchduleMain>
      {isSetting && (
        <>
          <ScheduleMove>
            <IconBox imgurl={UpDownIcon.src} />
          </ScheduleMove>
          <MiniDeleteBox
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
          </MiniDeleteBox>
        </>
      )}
    </SchduleComponentWrapper>
  );
};

export default ScheduleComponent;
