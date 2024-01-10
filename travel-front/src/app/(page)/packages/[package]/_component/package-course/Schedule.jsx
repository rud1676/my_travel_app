"use client";

import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Package from "@/app/(page)/packages/[package]/package.style";
import { Pretendard_Medium } from "@/assets/fonts/fonts";

const Schedule = ({ last = false, content, flight = false }) => {
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const [padding, setPadding] = useState(true);
  useEffect(() => {
    if (textRef.current && lineRef.current) {
      const textHeight = textRef.current.offsetHeight;
      let calheight = `${textHeight}px`;
      if (textHeight < 49) {
        setPadding(false);
        calheight = "60px";
      } else if (!flight) {
        calheight = `${textHeight + 60}px`;
      }

      lineRef.current.style.height = calheight;
    }
  }, [flight]);
  return (
    <Package.ScheduleWrapper pad={padding.toString()} last={last.toString()}>
      <Package.ScheduleIcon flight={flight.toString()} />
      <Package.ScheduleLine ref={lineRef} last={last.toString()} />
      <Package.ScheduleText
        ref={textRef}
        flight={flight.toString()}
        className={Pretendard_Medium.className}
      >
        {content}
      </Package.ScheduleText>
    </Package.ScheduleWrapper>
  );
};

Schedule.propTypes = {
  last: PropTypes.bool,
  flight: PropTypes.bool,
  content: PropTypes.string.isRequired,
};

export default Schedule;
