"use client";

import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

import Main from "@/app/(page)/packages/[package]/_component/Main";
import Footer from "@/app/(page)/packages/[package]/_component/Footer";
import ConfirmReserve from "@/app/(page)/packages/[package]/_component/confirm-reserve/ConfirmReserve";
import Header from "@/app/(page)/packages/[package]/_component/Header";

import { travelPackageApi } from "@/api/travel";

const TravelDetail = ({ params }) => {
  const package_id = parseInt(params.package);
  const { data: travel } = useSuspenseQuery({
    queryKey: ["package", package_id],
    queryFn: () => travelPackageApi.getTravelPackage(package_id),
    enabled: true,
  });

  const [range, setRange] = useState(undefined);
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <>
      <Header title={travel.title} />
      <Main travel={travel} range={range} setRange={setRange} />
      <Footer setOpenConfirm={setOpenConfirm} />
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
