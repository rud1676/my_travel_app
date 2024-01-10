"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

import schedule from "@/assets/img/schedule.svg";
import home from "@/assets/img/home.svg";
import setting from "@/assets/img/setting.svg";
import home_active from "@/assets/img/home_active.svg";
import schedule_active from "@/assets/img/schedule_active.svg";
import setting_active from "@/assets/img/setting_active.svg";

import MainStyle from "@/app/(main)/main.style";
import useUser from "@/hooks/useUser";

import { Checkuser } from "@/util/valid";

const Footer = () => {
  const navigator = useRouter();
  const path = usePathname();
  const { user } = useUser();
  const AuthRoute = (path) => {
    if (Checkuser(user)) {
      navigator.push(path);
    } else {
      navigator.push("/login");
    }
  };

  return (
    <MainStyle.FooterWrapper>
      <MainStyle.FooterImgBox>
        <MainStyle.FooterSelectBox
          onClick={() => {
            navigator.push("/");
          }}
          btncolor="#ff89ec"
          active={(path === "/").toString()}
        >
          <MainStyle.IconImg src={path === "/" ? home_active.src : home.src} />
        </MainStyle.FooterSelectBox>
        <MainStyle.FooterSelectBox
          onClick={() => {
            AuthRoute("/schedule");
          }}
          btncolor="#9AE56C"
          active={(
            path.includes("/schedule") || path.includes("/plan")
          ).toString()}
        >
          <MainStyle.IconImg
            src={
              path.includes("/schedule") || path.includes("/plan")
                ? schedule_active.src
                : schedule.src
            }
          />
        </MainStyle.FooterSelectBox>
        <MainStyle.FooterSelectBox
          onClick={() => {
            AuthRoute("/setting");
          }}
          btncolor="#C1C1C1"
          active={path.includes("/setting").toString()}
        >
          <MainStyle.IconImg
            src={path.includes("/setting") ? setting_active.src : setting.src}
          />
        </MainStyle.FooterSelectBox>
      </MainStyle.FooterImgBox>
    </MainStyle.FooterWrapper>
  );
};

export default Footer;
