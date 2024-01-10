"use client";

import Package from "@/app/(page)/packages/[package]/package.style";
import Schedule from "./Schedule";
import DayTitle from "./DayTitle";

const OneDayCourse = ({ contents, day, title }) => {
  let showTitle = "";
  if (window.innerWidth <= 500) {
    showTitle = title.length >= 20 ? `${title.slice(0, 20)}...` : title;
  } else {
    showTitle = title.length >= 50 ? `${title.slice(0, 50)}...` : title;
  }
  return (
    <Package.OneDayCourseBox>
      <DayTitle num={day} title={showTitle} />
      {contents.map((v, i) => {
        if (i === contents.length - 1) {
          return (
            <Schedule key={v.id} flight={v.isFlight} content={v.content} last />
          );
        }
        return <Schedule key={v.id} flight={v.isFlight} content={v.content} />;
      })}
    </Package.OneDayCourseBox>
  );
};

export default OneDayCourse;
