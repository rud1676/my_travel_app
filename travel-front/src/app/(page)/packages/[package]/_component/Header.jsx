"use client";

import { useRouter } from "next/navigation";
import Package from "@/app/(page)/packages/[package]/package.style";
import Arrow from "@/assets/img/Arrow_Back.svg";
import Image from "next/image";
import { Pretendard_Regular } from "@/assets/fonts/fonts";

const Header = ({ title }) => {
  const navigator = useRouter();
  const onClickBack = () => {
    navigator.back();
  };
  return (
    <Package.Header className={Pretendard_Regular.className}>
      <Package.HeaderBackButton onClick={onClickBack}>
        <Image width={17} height={29} src={Arrow.src} alt="" />
      </Package.HeaderBackButton>
      {title}
    </Package.Header>
  );
};

export default Header;
