"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { myPlanApi } from "@/api/myplan";

import Header from "@/app/_component/Header";
import MakePageFooter from "./_component/MakePageFooter";
import MakeDetail from "./_component/MakeDetail";

const Make = ({ params }) => {
  const param = useSearchParams();
  const navigator = useRouter();

  const travelId = parseInt(params.plan_id, 10); // travel_id와 day가 있다면 세부사항을 생성합니다.
  const day = param.get("day");

  const detail_id = parseInt(param.get("id"), 10); // detail id가 있다면 세부여행을 수정하는 것입니다.

  /* Input Form Data */
  const [form, setForm] = useState({});
  const [travel, setTravel] = useState(undefined);
  const [curdate, setCurdate] = useState(day);
  const [mapOpen, setMapOpen] = useState(false);
  /* detail_id가 존재할 때, 즉, 수정할 때 기존값으로 필드값을 셋팅합니다. */
  const setFormData = (data) => {
    setForm({
      title: data.title,
      color: data.color,
      locationName: data.locationName,
      location: {
        latitude: data.location.coordinates[0],
        longitude: data.location.coordinates[1],
      },
      googleImgSrc: data.googleImgSrc,
      memo: data.memo,
      time: data.time,
      date: data.date,
    });
    setTravel(data);
  };

  useEffect(() => {
    const LoadPlan = async (detail_id_parameter) => {
      const { data } = await myPlanApi.getDetailById(detail_id_parameter);
      setFormData(data);
    };

    if (detail_id) LoadPlan(detail_id);
  }, [detail_id]);
  if (!travelId && !travel) return null;
  return (
    <>
      <Header
        onClickBack={() => {
          navigator.push(
            `schedule/plan/${travelId ? travelId : travel.myPlanId}`
          );
        }}
        title="상세 일정 편집"
      />
      <MakeDetail
        form={form}
        setForm={setForm}
        day={day} // 생성에 필요
        curdate={curdate} // 수정에 필요한 값
        mapOpen={mapOpen}
        setMapOpen={setMapOpen}
      />
      <MakePageFooter
        form={form}
        setMapOpen={setMapOpen}
        curdate={curdate}
        detail_id={detail_id}
        travelId={travelId ? travelId : travel.myPlanId}
        mapOpen={mapOpen}
      />
    </>
  );
};

export default Make;
