"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/app/_component/common/Header";
import Reserved from "../reserved.style";
import ReserveConfirm from "@/app/_component/ReserveConfirm";
import ArrowFront from "@/assets/img/ArrowFront.svg";
import { Pretendard_Regular } from "@/assets/fonts/fonts";
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

  if (!reserve) return null;
  return (
    <>
      <Header
        title="예약 내역 상세"
        onClickBack={() => {
          navigator.back();
        }}
      />
      <ReserveConfirm
        reserved={reserve}
        child={
          <Reserved.ShowDetailInfo
            onClick={onClickShowPackag}
            className={Pretendard_Regular.className}
          >
            상품 페이지 보기
            <Image
              style={{ cursor: "pointer" }}
              src={ArrowFront.src}
              width={13}
              height={13}
              alt="상세아이콘"
            />
          </Reserved.ShowDetailInfo>
        }
      />
    </>
  );
};

export default ReserveTravel;
