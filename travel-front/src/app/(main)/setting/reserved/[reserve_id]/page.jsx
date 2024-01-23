"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/app/_component/common/Header";

import { Box } from "@mui/material";
import styles from "./reservedetail.module.css";

import Confirm from "@/app/_component/ui/Frame/Confirm";
import ArrowFront from "@/assets/img/ArrowFront.svg";
import { travelPackageApi } from "@/api/travel";
import { useSuspenseQuery } from "@tanstack/react-query";

const ReserveTravel = ({ params }) => {
  const navigator = useRouter();
  const reserve_id = parseInt(params.reserve_id);
  const { data: reserve } = useSuspenseQuery({
    queryKey: ["reserve", reserve_id],
    queryFn: () => travelPackageApi.getReservePackage(reserve_id),
    enabled: false,
  });

  const onClickShowPackag = () => {
    navigator.push(`/packages/${reserve.travelPackage.id}`);
  };

  if (!reserve) {
    navigator.push(`/`);
    return null;
  }
  return (
    <>
      <Header
        title="예약 내역 상세"
        onClickBack={() => {
          navigator.back();
        }}
      />
      <Confirm
        reserved={reserve}
        width="100%"
        child={
          <Box className={styles.showDetailInfo} onClick={onClickShowPackag}>
            상품 페이지 보기
            <Image
              style={{ cursor: "pointer" }}
              src={ArrowFront.src}
              width={13}
              height={13}
              alt="상세아이콘"
            />
          </Box>
        }
      />
    </>
  );
};

export default ReserveTravel;
