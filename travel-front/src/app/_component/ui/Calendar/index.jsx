"use client";

import React, { useCallback } from "react";
import { ko } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { Global, css } from "@emotion/react";
import PropTypes from "prop-types";

import styles from "./calendar.module.css";
import { Box } from "@mui/material";
import "react-day-picker/dist/style.css";

import Image from "next/image";
import CloseDrawerIcon from "@/assets/img/CloseDrawerIcon.svg";
import CheckIconWhite from "@/assets/img/CheckIconWhite.svg";

const Calendar = ({
  totaldays = -1,
  setOpenDate,
  range,
  setRange,
  isFooter = true,
}) => {
  const footer = "";
  //    <p>해당 일자는 예약할 수 없습니다.</p>;
  const onClickDown = useCallback(() => {
    setOpenDate(false);
  }, [setOpenDate]);

  const disabledDays = [{ from: new Date(2022, 4, 18), to: new Date() }];
  return (
    <Box>
      <Box className={styles.calendarWrapper}>
        <Global
          styles={css`
            .css-9emuhu-MuiPaper-root-MuiDrawer-paper {
              border-radius: 20px 20px 0px 0px;
            }
            .rdp-day_selected {
              background: #c0abff !important;
              color: black !important;
              font-weight: 700 !important;
            }
            .rdp-head_cell {
              color: var(--label-colors-lcl-secondary, rgba(60, 60, 67, 0.6));
              text-align: center;
              font-feature-settings:
                "clig" off,
                "liga" off;
              font-size: 12px !important;
              font-style: normal;
              font-weight: 400 !important;
              line-height: 16px;
            }
            .rdp-tfoot > tr > td > p {
              margin-top: 31px;
              color: #cf0000;
              text-align: center;
              font-feature-settings:
                "clig" off,
                "liga" off;
              font-size: 16px;
              font-weight: 600;
              line-height: 21px; /* 131.25% */
              letter-spacing: -0.32px;
            }
          `}
        />
        {isFooter && (
          <Box className={styles.calendarHeaderButtonBox} onClick={onClickDown}>
            <Image
              alt="내려가기버튼"
              width={52}
              height={9}
              src={CloseDrawerIcon.src}
            />
          </Box>
        )}

        {isFooter ? (
          <DayPicker
            showOutsideDays
            disabled={disabledDays}
            id="test"
            mode="range"
            locale={ko}
            selected={range}
            footer={footer}
            onSelect={(e) => {
              if (totaldays !== -1) return;
              setRange(e);
            }}
            onDayClick={(e) => {
              if (totaldays === -1) return;

              const clictday = new Date(e);
              const endDay = new Date(e);
              endDay.setDate(clictday.getDate() + totaldays - 1);
              const temp = {
                from: clictday,
                to: endDay,
              };
              setRange(temp);
            }}
          />
        ) : (
          <Box className={styles.dayPickerWrapper}>
            <DayPicker
              showOutsideDays
              id="test"
              mode="range"
              locale={ko}
              selected={range}
              footer={footer}
              onSelect={setRange}
            />
          </Box>
        )}

        {isFooter && (
          <Box className={styles.calendarFooterWrapper} onClick={onClickDown}>
            <Image
              width={59}
              height={42}
              src={CheckIconWhite.src}
              alt="체크아이콘"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

Calendar.propTypes = {
  setOpenDate: PropTypes.func,
  range: PropTypes.any,
  setRange: PropTypes.func,
};
export default Calendar;
