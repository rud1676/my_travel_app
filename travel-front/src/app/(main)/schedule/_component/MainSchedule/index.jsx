"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Box } from "@mui/material";
import styles from "./mainschedule.module.css";

import GoogleMap from "../GoogleMap.jsx/index.jsx";

import FlightIcon from "@/assets/img/FlightIcon.svg";
import CallIcon from "@/assets/img/CallIcon.svg";
import MemoIcon from "@/assets/img/MemoIcon.svg";
// import PictureIcon from "@/assets/img/PictureIcon.svg";

import ScheduleFrame from "@/app/_component/ui/Frame/ScheduleFrame";

const ScheduleComponent = ({ setMemo, setPhoneNum, plan }) => {
  const navigator = useRouter();

  const [mapOpen, setMapOpen] = useState(false);
  const onClickDetailPlan = () => {
    navigator.replace(`/plandetail/make?id=${plan.id}`);
  };
  return (
    <>
      <ScheduleFrame plan={plan} onClickSchedule={onClickDetailPlan}>
        <Box className={styles.scheduleIconBox}>
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
        </Box>
      </ScheduleFrame>
      {mapOpen && (
        <GoogleMap
          location={plan.location}
          placeName={plan.locationName}
          mapOpen={mapOpen}
          setMapOpen={setMapOpen}
        />
      )}
    </>
  );
};

export default ScheduleComponent;
