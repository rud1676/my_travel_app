"use client";

import Setting from "./setting.style";
import { Pretendard_Medium } from "@/assets/fonts/fonts";

const Header = () => {
  return (
    <Setting.HeaderWrapper>
      <Setting.HeaderText className={Pretendard_Medium.className}>
        설정
      </Setting.HeaderText>
    </Setting.HeaderWrapper>
  );
};

export default Header;
