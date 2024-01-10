"use client";

import Make from "../make.style";
import Calendar from "@/app/_component/Calendar";

const Main = ({ range, setRange, page, setTitle, title }) => {
  return (
    <Make.MainWrapper mode={(page === 1).toString()}>
      {page === 0 && <Make.MainTitleText>여행제목</Make.MainTitleText>}
      <Make.TitleInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {page === 1 && (
        <Calendar range={range} setRange={setRange} isFooter={false} />
      )}
    </Make.MainWrapper>
  );
};

export default Main;
