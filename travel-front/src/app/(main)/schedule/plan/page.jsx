"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import Header from "@/app/_component/Header";
import ConfirmModal from "@/app/_component/ConfirmModal";
import Plans from "./_component/Plans";
import SotringViewLayer from "./_component/SotringViewLayer";

import { myPlanApi } from "@/api/myplan";

const Plan = () => {
  const navigator = useRouter();
  const [myPlans, setMyPlans] = useState(undefined);
  const [minView, setMinView] = useState(false);
  const [modal, setModal] = useState(false);
  const [Deleteid, setDeleteid] = useState(0);

  const SetMyPlans = (id) => {
    setMyPlans((prev) => {
      const temp = prev.filter((v) => v.id !== id);
      return [...temp];
    });
  };

  const onClickDeleteButton = (planId) => {
    const DeleteMyPlan = async (id) => {
      await myPlanApi.deleteMyPlan(id);
      SetMyPlans(id);
    };

    DeleteMyPlan(planId);
  };

  const onClickSort = (sort) => {};

  if (!myPlans) return null;
  return (
    <>
      <Header
        title="내 여행 목록"
        onClickBack={() => {
          navigator.push("/schedule");
        }}
      />
      <SotringViewLayer
        onClickSort={onClickSort}
        setMinView={setMinView}
        minView={minView}
      />
      <Plans
        onClickDeleteButton={() => {
          setModal(true);
        }}
        minView={minView}
        myPlans={myPlans}
        setDeleteid={setDeleteid}
      />
      <ConfirmModal
        open={modal}
        handleClose={() => setModal(false)}
        onClickConfirm={() => {
          onClickDeleteButton(Deleteid);
          setModal(false);
        }}
      />
    </>
  );
};

export default Plan;
