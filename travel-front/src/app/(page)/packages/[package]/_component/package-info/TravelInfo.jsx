"use client";

import { Box, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

import SelectDate from "./SelectDate";
import OptionList from "./OptionList";
import DetailInfo from "./DetailInfo";
import Calendar from "@/app/_component/Calendar";
import Package from "@/app/(page)/packages/[package]/package.style";

const TravelInfo = ({
  totaldays,
  detail_array,
  optionlist,
  range,
  setRange,
}) => {
  const [openDate, setOpenDate] = useState(false);

  return (
    <Package.TravelInfoBox>
      <SelectDate setOpenDate={setOpenDate} range={range} />
      <OptionList optionlist={optionlist} />
      <Box sx={{ width: "86%" }}>
        {detail_array.map((v) => (
          <DetailInfo key={v.id} title={v.title} content={v.content} />
        ))}
      </Box>
      <Box sx={{ height: 100 }} />
      <SwipeableDrawer
        anchor="bottom"
        open={openDate}
        onClose={() => {
          setOpenDate(false);
        }}
        onOpen={() => {
          setOpenDate(true);
        }}
      >
        <Calendar
          totaldays={totaldays}
          setOpenDate={setOpenDate}
          range={range}
          setRange={setRange}
        />
      </SwipeableDrawer>
    </Package.TravelInfoBox>
  );
};

export default TravelInfo;
