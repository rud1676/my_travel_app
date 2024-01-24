"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import SchduleComponent from "../MainSchedule";

import { Box } from "@mui/material";
import styles from "./main.module.css";

import MyTravelList from "@/assets/img/MyTravelList.svg";
import NewTravelMake from "@/assets/img/NewTravelMake.svg";

const Main = ({ setMemo, setPhoneNum, plans }) => {
  const navigator = useRouter();
  const onClickMakePlan = () => {
    navigator.push("/schedule/plan/make");
  };
  const onClickMyPlan = () => {
    navigator.push("/schedule/plan");
  };
  return (
    <Box className={styles.mainWrapper}>
      {plans.map((v) => {
        return (
          <SchduleComponent
            setMemo={setMemo}
            setPhoneNum={setPhoneNum}
            key={v.id}
            plan={v}
          />
        );
      })}
      <Box className={styles.travelButtonBox}>
        <Image
          style={{ cursor: "pointer" }}
          onClick={onClickMakePlan}
          src={NewTravelMake.src}
          width={177}
          height={127}
          alt="새로운여행버튼"
        />
        <Image
          style={{ cursor: "pointer" }}
          onClick={onClickMyPlan}
          src={MyTravelList.src}
          width={177}
          height={127}
          alt="내여행목록버튼"
        />
      </Box>
    </Box>
  );
};

export default Main;
