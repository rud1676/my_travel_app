"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ReserveConfirm from "@/app/_component/ReserveConfirm";

import Confirm from "@/app/(main)/(home)/packages/confirm/[id]/confirm.style";
import { Pretendard_Bold, Pretendard_Regular } from "@/assets/fonts/fonts";
import CheckIconWhite from "@/assets/img/CheckIconWhite.svg";
import { travelPackageApi } from "@/api/travel";
import { useSuspenseQuery } from "@tanstack/react-query";

const ConfirmPackage = ({ params }) => {
  const navigator = useRouter();
  const reserved_id = parseInt(params.id);
  const { data: reserved } = useSuspenseQuery({
    queryKey: ["reserve", reserved_id],
    queryFn: () => travelPackageApi.getReservePackage(reserved_id),
    enabled: false,
  });

  const onClickCheckButton = () => {
    navigator.push("/");
  };

  return (
    <Confirm.TravelConfirmWrapper>
      <Confirm.Title className={Pretendard_Regular.className}>
        예약 문의 완료
      </Confirm.Title>
      <ReserveConfirm reserved={reserved} />
      <Confirm.FooterWrapper
        onClick={onClickCheckButton}
        className={Pretendard_Bold.className}
      >
        <Image
          width={59}
          height={42}
          src={CheckIconWhite.src}
          alt="체크아이콘"
        />
      </Confirm.FooterWrapper>
    </Confirm.TravelConfirmWrapper>
  );
};

export default ConfirmPackage;
