"use client";

import { useEffect, useState } from "react";
import { useSuspenseQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Header from "./_component/Header";
import Main from "./_component/Main";
import DateSection from "./_component/DateSection";
import Footer from "@/app/_component/common/Footer";

import ConfirmModal from "@/app/_component/ui/Modal/ConfirmModal";
import FooterDrawer from "./_component/FooterDrawer";

import { myPlanApi } from "@/api/myplan";
import useCustomMutate from "@/hooks/useCustomMutate";
const PlanDetail = ({ params }) => {
  const QueryClient = useQueryClient();
  const plan_id = parseInt(params.plan_id);
  const navigator = useRouter();

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

  const deletemutate = useCustomMutate(
    ({ id }) => myPlanApi.deleteMyPlanDetail(id),
    "세부여행계획이 삭제되었습니다.",
    (_data) => {
      QueryClient.refetchQueries({
        queryKey: ["mytravel", plan_id],
      });
      return;
    }
  );

  const ordermutate = useCustomMutate(
    ({ data }) => myPlanApi.orderingDetails(data),
    "순서 편집을 완료했습니다.",
    (_data) => null
  );

  const onClickDeleteButton = (planId) => {
    deletemutate({ id: planId });
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

  const onClickFooter = (details) => {
    if (isSetting) {
      ordermutate(details);
      setIsSetting(false);
    } else navigator.push(`/schedule/plan/${plan.id}/make?day=20${curdate}`);
  };

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
        onClick={() => {
          onClickFooter(details);
        }}
        backgroundColor="#6549ba"
        child={isSetting ? "순서 적용하기" : "상세 일정 만들기"}
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
          console.log(delId);
          onClickDeleteButton(delId);
          setModal(false);
        }}
      />
    </>
  );
};

export default PlanDetail;
