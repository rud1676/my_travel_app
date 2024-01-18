"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/_component/common/Header";
import ReservedTravels from "./_component/ReservedTravels";
import Reserved from "./reserved.style";

const ReservedPackages = () => {
  const navigator = useRouter();

  return (
    <>
      <Header
        title="예약 내역"
        onClickBack={() => {
          navigator.back();
        }}
      />
      <Reserved.ReservedWrapper>
        <ReservedTravels />
      </Reserved.ReservedWrapper>
    </>
  );
};

export default ReservedPackages;
