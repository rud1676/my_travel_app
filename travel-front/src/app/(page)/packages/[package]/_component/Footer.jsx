"use client";

import Proptypes from "prop-types";
import { useRouter } from "next/navigation";
import Package from "@/app/(page)/packages/[package]/package.style";
import { Pretendard_Bold } from "@/assets/fonts/fonts";
import useUser from "@/hooks/useUser";
import { Checkuser } from "@/util/valid";

const Footer = ({ setOpenConfirm }) => {
  const { user } = useUser();
  const navigator = useRouter();
  return (
    <Package.FooterWrapper
      onClick={() => {
        if (Checkuser(user)) setOpenConfirm(true);
      }}
      className={Pretendard_Bold.className}
    >
      예약 문의하기
    </Package.FooterWrapper>
  );
};
Footer.propTypes = {
  setOpenConfirm: Proptypes.func.isRequired,
};

export default Footer;
