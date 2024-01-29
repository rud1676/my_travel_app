"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ScheduleHeader from "@/app/(main)/schedule/_component/ScheduleHeader";
import Main from "@/app/(main)/schedule/_component/Main";
import TeleModal from "./_component/TeleModal";
import MemoModal from "./_component/MemoModal";

import { makeToday } from "@/util/data";

import { myPlanApi } from "@/api/myplan";

const Schedule = () => {
  const [year, month, day] = makeToday();
  const { data: plan } = useQuery({
    queryKey: ["plan", `${year}-${month + 1}-${day}`],
    queryFn: () => myPlanApi.getDetailListByDay(`${year}-${month + 1}-${day}`),
    enabled: true,
    retry: false,
  });
  const [phoneNum, setPhoneNum] = useState(null);
  const [memo, setMemo] = useState("");
  return (
    <>
      <ScheduleHeader
        details={plan}
        year={year}
        month={month + 1}
        day={day}
        title={plan?.title ? plan.title : "세부 일정 없음"}
      />
      <Main
        planid={plan?.id}
        plans={plan?.details ? plan.details : []}
        setPhoneNum={setPhoneNum}
        setMemo={setMemo}
      />
      <TeleModal
        phone={phoneNum}
        open={phoneNum !== null}
        handleClose={() => setPhoneNum(null)}
        onClickConfirm={() => setPhoneNum(null)}
      />
      <MemoModal memo={memo} setMemo={setMemo} />
    </>
  );
};

export default Schedule;
