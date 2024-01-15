"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import PlanStyle from "./plan.style";

import Header from "@/app/_component/Header";
import ConfirmModal from "@/app/_component/ConfirmModal";
import Plans from "./_component/Plans";
import SotringViewLayer from "./_component/SotringLayer";
import useCustomMutate from "@/hooks/useCustomMutate";
import { myPlanApi } from "@/api/myplan";

const Plan = () => {
  const navigator = useRouter();
  const queryClient = useQueryClient();

  const [minView, setMinView] = useState(false);
  const [modal, setModal] = useState(false);
  const [Deleteid, setDeleteid] = useState(0);

  const mutate = useCustomMutate(
    ({ id }) => myPlanApi.deleteMyPlan(id),
    "삭제 하였습니다.",
    () => {
      queryClient.refetchQueries({ queryKey: ["plan"], type: "active" });
      return;
    }
  );

  return (
    <>
      <Header
        title="내 여행 목록"
        onClickBack={() => {
          navigator.push("/schedule");
        }}
      />
      <SotringViewLayer setMinView={setMinView} minView={minView} />
      <PlanStyle.MainWrapper>
        <Plans
          setModal={setModal}
          minView={minView}
          setDeleteid={setDeleteid}
        />
      </PlanStyle.MainWrapper>
      <ConfirmModal
        title="내 여행 삭제"
        content="정말로 삭제 하시겠습니까?"
        open={modal}
        calcelText="취소"
        handleClose={() => setModal(false)}
        onClickConfirm={() => {
          mutate({ id: Deleteid });
          setModal(false);
        }}
        confirmText="삭제"
      />
    </>
  );
};

export default Plan;
