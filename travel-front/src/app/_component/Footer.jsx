"use client";

import AppStyle from "../app.style";
import { Pretendard_Bold } from "@/assets/fonts/fonts";

const Footer = ({ bgcolor = "#6549ba", onClick, child }) => {
  return (
    <AppStyle.FooterWrapper
      bgcolor={bgcolor}
      className={Pretendard_Bold.className}
      onClick={onClick}
    >
      {child}
    </AppStyle.FooterWrapper>
  );
};

export default Footer;
