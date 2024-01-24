"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Box } from "@mui/material";

import styles from "./mainfooter.module.css";

import FooterIconBox from "./FooterIconBox";

import { useCheckUser } from "@/util/valid";
import { ScheduleIcons, SettingIcons, HomeIcons } from "@/util/data";

const MainFooter = () => {
  const isChecked = useCheckUser();
  const navigator = useRouter();
  const path = usePathname();
  const AuthRoute = (path) => {
    if (isChecked) {
      navigator.push(path);
    } else {
      navigator.push("/login");
    }
  };

  return (
    <Box className={styles.footerWrapper}>
      <Box className={styles.footerImgBox}>
        <FooterIconBox
          color="#ff89ec"
          checkRouter={path === "/"}
          onClick={() => navigator.push("/")}
        >
          <Image
            src={path === "/" ? HomeIcons[0] : HomeIcons[1]}
            width={28}
            height={28}
            style={{ marginTop: "9px" }}
            alt="이미지"
          />
        </FooterIconBox>
        <FooterIconBox
          color="#9AE56C"
          checkRouter={path.includes("/schedule")}
          onClick={() => AuthRoute("/schedule")}
        >
          <Image
            src={
              path.includes("/schedule") ? ScheduleIcons[0] : ScheduleIcons[1]
            }
            width={28}
            height={28}
            style={{ marginTop: "9px" }}
            alt="이미지"
          />
        </FooterIconBox>
        <FooterIconBox
          color="#C1C1C1"
          checkRouter={path.includes("/setting")}
          onClick={() => AuthRoute("/setting")}
        >
          <Image
            src={path.includes("/setting") ? SettingIcons[0] : SettingIcons[1]}
            width={28}
            height={28}
            style={{ marginTop: "9px" }}
            alt="이미지"
          />
        </FooterIconBox>
      </Box>
    </Box>
  );
};

export default MainFooter;
