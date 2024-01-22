"use client";

import { Box, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

import DateSelectBox from "@/app/_component/ui/SelectBoxGroup/DateSelectBox";
import OptionShowBox from "@/app/_component/ui/DataShowGroup/OptionsShowBox";
import DetailShowBox from "@/app/_component/ui/DataShowGroup/DetailShowBox";
import Calendar from "@/app/_component/ui/Calendar";

import styles from "./packageinfo.module.css";

const TravelInfo = ({
  totaldays,
  detail_array,
  optionlist,
  range,
  setRange,
}) => {
  const [openDate, setOpenDate] = useState(false);

  return (
    <Box className={styles.travelInfoBox}>
      <DateSelectBox setOpenDate={setOpenDate} range={range} />
      <OptionShowBox optionlist={optionlist} />
      <DetailShowBox detail_array={detail_array} />
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
    </Box>
  );
};

export default TravelInfo;
