"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { myPlanApi } from "@/api/myplan";

import CommonHeader from "@/component/common/CommonHeader";
import MakePageFooter from "./MakePageFooter";
import MakeDetail from "./MakeDetailsdd";

const Make = () => {
  const param = useSearchParams();
  const detail_id = parseInt(param.get("id"), 10); // detail id가 있다면 세부여행을 수정하는 것입니다.

  const travelId = parseInt(param.get("travelId"), 10); // travel_id와 day가 있다면 세부사항을 생성합니다.
  const day = param.get("day");

  /* Input Form Data */
  const [formColor, setFormColor] = useState(0);
  const [travel, setTravel] = useState(undefined);
  const [formPlanTitle, setFormPlanTitle] = useState("");
  const [formLocation, setFormLocation] = useState(undefined);
  const [formMemo, setFormMemo] = useState("");
  const [formLocationName, setFormLocationName] = useState("");
  const [formTime, setFormTime] = useState("");
  const [forminute, setForminute] = useState("");
  const [imgsrc, setImgsrc] = useState(""); // Google Image URl
  const [phoneNumber, setPhoneNumber] = useState(""); // get Google Phone Number
  const [curdate, setCurdate] = useState("");
  const [mapOpen, setMapOpen] = useState(false);

  /* detail_id가 존재할 때, 즉, 수정할 때 기존값으로 필드값을 셋팅합니다. */
  const setFormData = (data) => {
    setTravel(data);
    setCurdate(data.date);
    setFormColor(data.color);
    setFormLocationName(data.locationName);
    setFormLocation({
      latitude: data.location.coordinates[0],
      longitude: data.location.coordinates[1],
    });
    const [time, minute] = data.time.split(":");
    setFormTime(time);
    setImgsrc(data.googleImgSrc);
    setForminute(minute);
    setFormPlanTitle(data.title);

    setFormMemo(data.memo);
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
      <CommonHeader
        route={`plandetail?id=${travelId ? travelId : travel.myPlanId}`}
        title="상세 일정 편집"
      />
      <MakeDetail
        formColor={formColor}
        formLocationName={formLocationName}
        setFormLocationName={setFormLocationName}
        setFormLocation={setFormLocation}
        setFormTime={setFormTime}
        formTime={formTime}
        setFormColor={setFormColor}
        setForminute={setForminute}
        setFormPlanTitle={setFormPlanTitle}
        setFormMemo={setFormMemo}
        formMemo={formMemo}
        forminute={forminute}
        formPlanTitle={formPlanTitle}
        setImgsrc={setImgsrc}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        day={day} // 생성에 필요
        curdate={curdate} // 수정에 필요한 값
        mapOpen={mapOpen}
        setMapOpen={setMapOpen}
      />
      <MakePageFooter
        setMapOpen={setMapOpen}
        formColor={formColor}
        formPlanTitle={formPlanTitle}
        formLocation={formLocation}
        formLocationName={formLocationName}
        phoneNumber={phoneNumber}
        formTime={formTime}
        forminute={forminute}
        formMemo={formMemo}
        imgsrc={imgsrc}
        curdate={curdate}
        detail_id={detail_id}
        travelId={travelId ? travelId : travel.myPlanId}
        day={day}
        mapOpen={mapOpen}
      />
    </>
  );
};

export default Make;
