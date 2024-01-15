"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import moment from "moment";
import Image from "next/image";

import Header from "@/app/_component/Header";
import Footer from "@/app/_component/Footer";
import Main from "./_component/Main";
import CheckIcon from "@/assets/img/CheckIconWhite.svg";

import { myPlanApi } from "@/api/myplan";
import useCustomMutate from "@/hooks/useCustomMutate";
import { CheckMakeTravelTitle, CheckRangeValid } from "@/util/valid";

const MakePlan = () => {
  const navigator = useRouter();
  const params = useSearchParams();

  // 수정 일때 사용
  const plan_id = parseInt(params.get("id"), 10);
  const step = parseInt(params.get("step"), 10);

  const [page, setPage] = useState(0);
  const [title, setTitle] = useState("");
  const [range, setRange] = useState(undefined);
  const pageTitle = plan_id ? "여행 수정하기" : "새여행 만들기";

  const onClickBack = () => {
    toast.remove();
    if (page === 0) navigator.back();
    setPage((prev) => prev - 1);
  };

  const Createmutate = useCustomMutate(
    (formData) => myPlanApi.createMyPlan(formData),
    `여행 일정을 생성했습니다. 세부 일정 페이지로 이동합니다.`,
    (data) => `/schedule/plan/${data.id}`
  );

  // 여행계획 수정
  const Modifymutate = useCustomMutate(
    (formData) => myPlanApi.modifyMyPlan(formData, id),
    `여행 일정을 수정했습니다.`,
    (data) => `/schedule/plan/${data.id}`
  );

  const onClickBottom = () => {
    if (!CheckMakeTravelTitle(title)) return;
    const startday = range?.from;
    const endday = range?.to === undefined ? range?.from : range?.to;
    const postData = {
      startAt: moment(startday).format("YYYY-MM-DD"),
      endAt: moment(endday).format("YYYY-MM-DD"),
      planid: plan_id,
      step,
      title,
    };
    // 수정이라면 화면 넘어가지 않고 바로 제출
    if (plan_id) {
      modifyPlan(postData, plan_id);
    }
    if (page === 0) {
      setPage(1);
    } else if (page === 1 && CheckRangeValid(range)) {
      if (plan_id) {
        // 수정하기
        Modifymutate(postData, plan_id);
      } else {
        //생성하기
        Createmutate(postData);
      }
    }
  };
  /*
  useEffect(() => {
    // 여행 수정이라면 데이터로드를 위한 함수
    const LoadPlan = async (id) => {
      const { data } = await myPlanApi.getPlanById(id);
      setTitle(data.title);
      setRange({ from: new Date(data.startAt), to: new Date(data.endAt) });
    };
    if (plan_id) {
      LoadPlan(plan_id);
      setPage(step);
    }
  }, [plan_id, step]);
*/
  return (
    <>
      <Header onClickBack={onClickBack} title={pageTitle} />
      <Main
        range={range}
        setRange={setRange}
        page={page}
        title={title}
        setTitle={setTitle}
      />
      <Footer
        bgcolor="#00CE9D"
        child={
          <Image src={CheckIcon.src} alt="체크버튼" width={63} height={46} />
        }
        onClick={onClickBottom}
      />
    </>
  );
};

export default MakePlan;
