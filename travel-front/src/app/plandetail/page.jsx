"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Box } from "@mui/material";
import { showFooter } from "@/Atom";
import Header from "./Header";
import Main from "./Main";
import DateSection from "./DateSection";
import Footer from "./Footer";
import ConfirmModal from "@/app/_component/ConfirmModal";
import FooterDrawer from "./FooterDrawer";
import { myPlanApi } from "@/api/myplan";

const PlanDetail = () => {
  const navigator = useRouter();
  const params = useSearchParams();
  const plan_id = parseInt(params.get("id"), 10);

  const setFooterMode = useSetRecoilState(showFooter);

  const [travel, setTravel] = useState(undefined);
  const [details, setDetails] = useState([]);
  const [curdate, setCurdate] = useState("");
  const [modal, setModal] = useState(false);
  const [delId, setDelId] = useState(undefined);
  const [open, setOpen] = useState(false);

  const [isSetting, setIsSetting] = useState(false);
  const [settingModal, setSettingModal] = useState(false);

  const onClickDeleteButton = (planId) => {
    const DeleteMyPlan = async (id) => {
      await myPlanApi.deleteMyPlanDetail(id);
      setTravel(undefined);
    };

    DeleteMyPlan(planId);
  };

  const ChnageDetials = (travelData, curD) => {
    const travelDetails = travelData.details;

    let [year, month, day] = curD.split("-");
    if (month?.length === 1) {
      month = `0${month}`;
    }
    if (day?.length === 1) {
      day = `0${day}`;
    }
    if (year?.length === 1) {
      year = `0${year}`;
    }
    const temp = [];
    for (let i = 0; i < travelDetails.length; i += 1) {
      if (travelDetails[i].date === `${year}-${month}-${day}`) {
        temp.push(travelDetails[i]);
      }
    }
    setDetails(temp);
  };

  useEffect(() => {
    // 불러올 여행아이디가 없다면 잘못된 접근!
    if (!plan_id) {
      navigator.push("/schedule");
      return;
    }
    setFooterMode(false);
    const LoadPlan = async (id) => {
      const { data } = await myPlanApi.getPlanById(id);
      ChnageDetials(data, data.startAt);
      setTravel(data);
      setCurdate(data.startAt);
    };

    if (travel === undefined) {
      LoadPlan(plan_id);
    }
  }, [setTravel, plan_id, travel, setFooterMode, navigator]);

  if (travel === undefined) return null;

  return (
    <Box
      sx={{
        maxHeight:
          "calc(100vh - 80px)" /* 화면 전체 높이에서 푸터 높이를 빼준다 */,
        overflowY: "auto",
      }}
    >
      <Header
        title={travel.title}
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
        travel={travel}
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
        travel={travel}
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
    </Box>
  );
};

export default PlanDetail;
