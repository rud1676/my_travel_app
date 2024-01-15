"use client";

import { useEffect, useState } from "react";
import Header from "./_component/Header";
import Main from "./_component/Main";
import DateSection from "./_component/DateSection";
import Footer from "./_component/Footer";
import ConfirmModal from "@/app/_component/ConfirmModal";
import FooterDrawer from "./_component/FooterDrawer";

import { myPlanApi } from "@/api/myplan";
import { useSuspenseQuery } from "@tanstack/react-query";

const PlanDetail = ({ params }) => {
  const plan_id = parseInt(params.plan_id);

  const [details, setDetails] = useState([]);
  const [curdate, setCurdate] = useState("");
  const [modal, setModal] = useState(false);
  const [delId, setDelId] = useState(undefined);
  const [open, setOpen] = useState(false);

  const [isSetting, setIsSetting] = useState(false);
  const [settingModal, setSettingModal] = useState(false);

  const { data: plan } = useSuspenseQuery({
    queryKey: ["mytravel", plan_id],
    queryFn: () => myPlanApi.getPlanById(plan_id),
    enabled: true,
    refetchOnMount: "always",
  });

  const onClickDeleteButton = (planId) => {
    const DeleteMyPlan = async (id) => {
      await myPlanApi.deleteMyPlanDetail(id);
    };
    DeleteMyPlan(planId);
  };

  const ChnageDetials = (plans, curD) => {
    const details = plans.details;
    let [year, month, day] = curD.split("-");
    if (month?.length === 1) {
      month = `0${month}`;
    }
    if (day?.length === 1) {
      day = `0${day}`;
    }
    year = `20${year}`;
    const temp = [];
    for (let i = 0; i < details.length; i += 1) {
      if (details[i].date === `${year}-${month}-${day}`) {
        temp.push(details[i]);
      }
    }
    setDetails(temp);
  };

  useEffect(() => {
    ChnageDetials(plan, curdate);
  }, [curdate, plan]);
  return (
    <>
      <Header
        title={plan.title}
        setIsSetting={setIsSetting}
        isSetting={isSetting}
        setSettingModal={setSettingModal}
        setOpen={setOpen}
      />

      <DateSection
        curdate={curdate}
        setCurdate={setCurdate}
        ChnageDetials={ChnageDetials}
        setDetails={setDetails}
        travel={plan}
      />
      <Main
        setDetails={setDetails}
        isSetting={isSetting}
        onClickDelete={() => setModal(true)}
        plan_id={plan_id}
        details={details}
        setDelId={setDelId}
      />
      <Footer
        setIsSetting={setIsSetting}
        details={details}
        isSetting={isSetting}
        curdate={curdate}
        plan={plan}
      />
      <ConfirmModal
        title="세부일정 순서 편집 취소"
        content="일정 순서 편집을 취소하시겠습니까?"
        calcelText="닫기"
        confirmText="취소"
        open={settingModal}
        handleClose={() => setSettingModal(false)}
        onClickConfirm={() => {
          // 취소하시겠습니까? 확인버튼
          setIsSetting(false);
          setSettingModal(false);
        }}
      />
      <FooterDrawer
        details={details}
        plan_id={plan_id}
        open={open}
        setOpen={setOpen}
      />
      <ConfirmModal
        open={modal}
        handleClose={() => setModal(false)}
        onClickConfirm={() => {
          onClickDeleteButton(delId);
          setModal(false);
        }}
      />
    </>
  );
};

export default PlanDetail;
