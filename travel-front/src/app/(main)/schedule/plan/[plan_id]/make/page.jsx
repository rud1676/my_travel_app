"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

import Header from "@/app/_component/common/Header";
import MakePageFooter from "./_component/MakePageFooter";
import MakeMain from "./_component/MakeMain";
import { myPlanApi } from "@/api/myplan";

const Make = ({ params }) => {
  const param = useSearchParams();
  const navigator = useRouter();

  const travelId = parseInt(params.plan_id, 10); // detail_id가 있으면 세부사항을 수정합니다.
  const day = param.get("day"); // day가 있다면 세부사항을 생성합니다.
  const detail_id = parseInt(param.get("id"), 10); // detail id가 있다면 세부여행을 수정하는 것입니다.

  /* Input Form Data */
  const [form, setForm] = useState({});
  const [mapOpen, setMapOpen] = useState(false);
  const setFormData = (data) => {
    setForm({
      title: data.title,
      color: data.color,
      locationName: data.locationName,
      location: {
        lat: data.location.coordinates[0],
        lng: data.location.coordinates[1],
      },
      photo: data.googleImgSrc,
      memo: data.memo,
      time: data.time,
      date: data.date,
      planId: data.id,
    });
  };

  /* detail_id가 존재할 때, 즉, 수정할 때 기존값으로 필드값을 셋팅합니다. */
  if (detail_id) {
    const { data: detail } = useSuspenseQuery({
      queryKey: ["detail", detail_id],
      queryFn: () => myPlanApi.getDetailById(detail_id),
      enabled: true,
      refetchOnMount: true,
    });
    useEffect(() => {
      setFormData(detail);
    }, [detail]);
  }

  return (
    <>
      <Header
        onClickBack={() => {
          navigator.replace(`/schedule/plan/${travelId}`);
        }}
        title="상세 일정 편집"
      />
      <MakeMain
        form={form}
        setForm={setForm}
        day={day} // 수정에 필요한 값
        mapOpen={mapOpen}
        setMapOpen={setMapOpen}
      />
      <MakePageFooter
        form={form}
        setMapOpen={setMapOpen}
        day={day}
        detail_id={detail_id}
        travelId={travelId}
        mapOpen={mapOpen}
      />
    </>
  );
};

export default Make;
