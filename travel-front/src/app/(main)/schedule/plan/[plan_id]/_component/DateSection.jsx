"use client";

import { useDraggable } from "react-use-draggable-scroll";
import moment from "moment";
import { useRef, useCallback, useEffect, useState } from "react";
import { DateSectionWrapper, DateWrapper } from "../plandetail.style";
import { Pretendard_Bold } from "@/assets/fonts/fonts";
import PlanDateBackground from "@/assets/img/PlanDateBackground.svg";
import PlanDateBackgroundNone from "@/assets/img/PlanDateBackgroundNone.svg";

const OneDateComponent = ({
  travel,
  setCurdate,
  date,
  ChnageDetials,
  curdate,
}) => {
  const [year, month, day] = date.split("-");
  const imgsrc =
    curdate === date ? PlanDateBackground.src : PlanDateBackgroundNone.src;

  const onClickOneDate = useCallback(() => {
    setCurdate(date);
    ChnageDetials(travel, `20${date}`);
  }, [setCurdate, date, travel, ChnageDetials]);
  return (
    <DateWrapper
      onClick={onClickOneDate}
      className={Pretendard_Bold.className}
      imgsrc={imgsrc}
    >
      {year}/{month}/{day}
    </DateWrapper>
  );
};

const DateSection = ({
  ChnageDetials,
  travel,
  curdate,
  setCurdate,
  setDetails,
}) => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const from = travel.startAt;
    const to = travel.endAt;
    const fromMoment = moment(from);
    const toMoment = moment(to);
    const diff = toMoment.diff(fromMoment, "days");
    const datesArray = Array.from({ length: diff + 1 }, (_, i) => {
      const temp = moment(from).clone().add(i, "days");
      return temp.format("YY-M-D");
    });
    setDates([...datesArray]);
    setCurdate(datesArray[0]);
  }, [travel, setCurdate, setDates]);
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <DateSectionWrapper {...events} ref={ref}>
      {dates.map((v) => {
        return (
          <OneDateComponent
            ChnageDetials={ChnageDetials}
            setDetails={setDetails}
            key={v}
            date={v}
            travel={travel}
            setCurdate={setCurdate}
            curdate={curdate}
          />
        );
      })}
    </DateSectionWrapper>
  );
};

export default DateSection;
