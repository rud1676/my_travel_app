"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import styles from "./confirmreserve.module.css";

import DateShowBox from "@/app/_component/ui/DataShowGroup/DateShowBox";
import OptionSelectBox from "@/app/_component/ui/SelectBoxGroup/OptionSelectBox";
import PeopleSelectBox from "@/app/_component/ui/SelectBoxGroup/PeopleSelectBox";

import { travelPackageApi } from "@/api/travel";
import CloseDrawerIcon from "@/assets/img/CloseDrawerIcon.svg";
import { InputValid } from "@/util/valid";
import useCustomMutate from "@/hooks/useCustomMutate";

const ConfirmReserve = ({ id, options, setOpenConfirm, range }) => {
  const [selOption, setSelOption] = useState(0);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);

  const mutate = useCustomMutate(
    ({ data, id }) => travelPackageApi.createReservePackage(data, id),
    "예약이 완료되었습니다. 메인 페이지로 이동합니다.",
    (data) => `/packages/confirm/${data.id}`
  );

  const totalPrice = useMemo(
    () => (adult + child) * (options[selOption]?.price || 0),
    [adult, child, selOption, options]
  );

  const onClickDown = () => {
    setOpenConfirm(false);
  };

  const onClickReserve = () => {
    if (InputValid(range, adult, child, setOpenConfirm)) {
      const data = {
        startAt: range.from,
        endAt: range.to,
        adultCount: adult,
        childCount: child,
        travelPackageOptionId: options[selOption].id,
      };
      mutate({ data, id });
    }
  };
  return (
    <Box>
      <Box className={styles.calendarWrapper}>
        <Box className={styles.calendarHeaderButtonBox} onClick={onClickDown}>
          <Image
            alt="내려가기버튼"
            width={52}
            height={9}
            src={CloseDrawerIcon.src}
          />
        </Box>
        <DateShowBox range={range} />
        <OptionSelectBox
          options={options}
          selOption={selOption}
          setSelOption={setSelOption}
        />
        <PeopleSelectBox
          adult={adult}
          setAdult={setAdult}
          child={child}
          setChild={setChild}
        />
        <Box className={styles.totalPriceBox}>
          <p className={styles.totalPriceLabel}>총 금액</p>

          <p
            className={styles.totalPriceText}
          >{`₩ ${totalPrice.toLocaleString()}`}</p>
        </Box>
        <Box
          className={styles.confirmFooterWrapper}
          onClick={() => {
            onClickReserve();
          }}
        >
          예약 문의하기
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmReserve;
