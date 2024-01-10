"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import SchduleComponent from "./ScheduleComponent";

import Schedule from "../schedule.style";
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
    <Schedule.MainWrapper>
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
      <Schedule.TravelButtonBox>
        <Image
          onClick={onClickMakePlan}
          src={NewTravelMake.src}
          width={177}
          height={127}
          alt="새로운여행버튼"
        />
        <Image
          onClick={onClickMyPlan}
          src={MyTravelList.src}
          width={177}
          height={127}
          alt="내여행목록버튼"
        />
      </Schedule.TravelButtonBox>
    </Schedule.MainWrapper>
  );
};

export default Main;
