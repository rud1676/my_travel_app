"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Pretendard_Bold } from "@/assets/fonts/fonts";

import ShowDate from "../../../../../_component/ShowDate";
import Options from "./Options";
import People from "./People";

import { travelPackageApi } from "@/api/travel";
import Package from "@/app/(page)/packages/[package]/package.style";
import CloseDrawerIcon from "@/assets/img/CloseDrawerIcon.svg";
import AppStyle from "@/app/app.style";
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
    <AppStyle.ContentWrapper>
      <AppStyle.CalendarWrapper>
        <AppStyle.CalendarHeaderButtonBox onClick={onClickDown}>
          <Image
            alt="내려가기버튼"
            width={52}
            height={9}
            src={CloseDrawerIcon.src}
          />
        </AppStyle.CalendarHeaderButtonBox>
        <ShowDate range={range} />
        <Options
          options={options}
          selOption={selOption}
          setSelOption={setSelOption}
        />
        <People
          adult={adult}
          setAdult={setAdult}
          child={child}
          setChild={setChild}
        />
        <Package.TotalPriceBox>
          <p
            style={{
              fontSize: "16px",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
            className={Pretendard_Bold.className}
          >
            총 금액
          </p>

          <p
            style={{
              textAlign: "right",
              fontSize: "24px",
              fontStyle: "normal",
              lineHeight: "normal",
            }}
            className={Pretendard_Bold.className}
          >{`₩ ${totalPrice.toLocaleString()}`}</p>
        </Package.TotalPriceBox>
        <Package.ConfirmFooterWrapper
          className={Pretendard_Bold.className}
          onClick={() => {
            onClickReserve();
          }}
        >
          예약 문의하기
        </Package.ConfirmFooterWrapper>
      </AppStyle.CalendarWrapper>
    </AppStyle.ContentWrapper>
  );
};

export default ConfirmReserve;
