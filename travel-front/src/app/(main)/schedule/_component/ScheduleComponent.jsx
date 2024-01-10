"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import GoogleMap from "./GoogleMapComponent";
import Schedule from "../schedule.style";
import {
  Pretendard_Bold,
  Pretendard_ExtraBold,
  Pretendard_Medium,
} from "@/assets/fonts/fonts";
import FlightIcon from "@/assets/img/FlightIcon.svg";
import CallIcon from "@/assets/img/CallIcon.svg";
import MemoIcon from "@/assets/img/MemoIcon.svg";
// import PictureIcon from "@/assets/img/PictureIcon.svg";

const ScheduleComponent = ({ setMemo, setPhoneNum, plan }) => {
  const navigator = useRouter();
  const [placeName, setPlaceName] = useState("");
  const [planTitle, setPlanTitle] = useState("");
  const [mapOpen, setMapOpen] = useState(false);
  const degs = [5, 3, -5];
  const onClickDetailPlan = () => {
    navigator.replace(`/plandetail/make?id=${plan.id}`);
  };

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setPlanTitle(
        plan.title.length >= 14
          ? `${plan.title.slice(0, 13)}...`
          : `${plan.title.slice(0, 30)}`
      );
      setPlaceName(
        plan.locationName.length >= 8
          ? `${plan.locationName.slice(0, 8)}...`
          : plan.locationName
      );
    } else {
      setPlanTitle(
        plan.title.length >= 24
          ? `${plan.title.slice(0, 25)}...`
          : `${plan.title.slice(0, 30)}`
      );
      setPlaceName(
        plan.locationName.length >= 25
          ? `${plan.locationName.slice(0, 24)}...`
          : plan.locationName
      );
    }
  }, [setPlaceName, plan]);

  return (
    <Schedule.SchduleComponentWrapper>
      <Schedule.ScheduleHeader
        onClick={onClickDetailPlan}
        backcolor={tagcolor[plan.color]}
      >
        <Schedule.ScheduleSticker
          className={Pretendard_Bold.className}
          url={sticker[plan.color]}
        >
          {plan.order}
        </Schedule.ScheduleSticker>
        <Schedule.ScheduleTitle className={Pretendard_Bold.className}>
          {planTitle}
        </Schedule.ScheduleTitle>
      </Schedule.ScheduleHeader>
      <Schedule.SchduleMain>
        <Schedule.LeftBox>
          <Schedule.SchedulePicture
            imgsrc={plan.image ? plan.image.location : ""}
            rot={degs[plan.id % 3]}
          />
          <Schedule.ScheduleDetail>
            <Schedule.ScheduleTime className={Pretendard_ExtraBold.className}>
              {plan.time.slice(0, 5)}
            </Schedule.ScheduleTime>
            <Schedule.SchedulePlace className={Pretendard_Medium.className}>
              {placeName}
            </Schedule.SchedulePlace>
          </Schedule.ScheduleDetail>
        </Schedule.LeftBox>
        <Schedule.ScheduleIconBox>
          {plan.location && (
            <Image
              onClick={() => {
                setMapOpen(true);
              }}
              width={30}
              height={30}
              src={FlightIcon.src}
              alt="위치아이콘"
            />
          )}
          {plan.mainPhoneNumber && (
            <Image
              onClick={() => setPhoneNum(plan.mainPhoneNumber)}
              width={30}
              height={30}
              src={CallIcon.src}
              alt="전화아이콘"
            />
          )}
          {plan.memo && (
            <Image
              onClick={() => {
                setMemo(plan.memo);
              }}
              width={30}
              height={30}
              src={MemoIcon.src}
              alt="메모"
            />
          )}
          {
            // plan.googleImgSrc && (
            // <Image width={30} height={30} src={PictureIcon.src} alt="그림" />
          }
        </Schedule.ScheduleIconBox>
      </Schedule.SchduleMain>
      {mapOpen && (
        <GoogleMap
          location={plan.location}
          placeName={plan.locationName}
          mapOpen={mapOpen}
          setMapOpen={setMapOpen}
        />
      )}
    </Schedule.SchduleComponentWrapper>
  );
};

export default ScheduleComponent;
