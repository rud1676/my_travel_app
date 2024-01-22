"use client";

import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Footer from "@/app/_component/common/Footer";
import Header from "@/app/_component/common/Header";
import Main from "@/app/(main)/(home)/packages/[package]/_component/Main";
import ConfirmReserve from "@/app/(main)/(home)/packages/[package]/_component/ConfirmReserve";

import { useCheckUser } from "@/util/valid";
import { travelPackageApi } from "@/api/travel";

const TravelDetail = ({ params }) => {
  const isChecked = useCheckUser();
  const navigator = useRouter();
  const package_id = parseInt(params.package);

  const [range, setRange] = useState(undefined);
  const [openConfirm, setOpenConfirm] = useState(false);

  const onClickBack = () => {
    navigator.back();
  };

  const FooterClick = () => {
    if (isChecked) setOpenConfirm(true);
    else navigator.push("/login");
  };

  const { data: travel } = useSuspenseQuery({
    queryKey: ["package", package_id],
    queryFn: () => travelPackageApi.getTravelPackage(package_id),
    enabled: true,
  });
  return (
    <>
      <Header onClickBack={onClickBack} title={travel.title} />
      <Main travel={travel} range={range} setRange={setRange} />
      <Footer
        onClick={FooterClick}
        backgroundColor="#00ce9d"
        child="예약 문의하기"
      />
      <SwipeableDrawer
        anchor="bottom"
        open={openConfirm}
        onClose={() => {
          setOpenConfirm(false);
        }}
        onOpen={() => {
          setOpenConfirm(true);
        }}
      >
        <ConfirmReserve
          options={travel.options}
          range={range}
          setOpenConfirm={setOpenConfirm}
          id={travel.id}
        />
      </SwipeableDrawer>
    </>
  );
};

export default TravelDetail;
