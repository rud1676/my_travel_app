import moment from "moment";
import PinRed from "@/assets/img/Pin_Red.svg";
import PinYellow from "@/assets/img/Pin_Yellow.svg";
import PinSky from "@/assets/img/Pin_Sky.svg";
import PinPurple from "@/assets/img/Pin_Purple.svg";
import PinOrange from "@/assets/img/Pin_Orange.svg";
import PinLightBlue from "@/assets/img/Pin_LightBlue.svg";
import PinGreen from "@/assets/img/Pin_Green.svg";
import PinBlue from "@/assets/img/Pin_Blue.svg";

import schedule from "@/assets/img/schedule.svg";
import home from "@/assets/img/home.svg";
import setting from "@/assets/img/setting.svg";
import home_active from "@/assets/img/home_active.svg";
import schedule_active from "@/assets/img/schedule_active.svg";
import setting_active from "@/assets/img/setting_active.svg";

import { LocalSave } from "@/LocalSave";
import { globalApi } from "@/api/global";

export const ScheduleIcons = [schedule_active.src, schedule.src];
export const SettingIcons = [setting_active.src, setting.src];
export const HomeIcons = [home_active.src, home.src];

export const color = ["#7D7D7D", "#6549BA", "#d52f2f", "#00C596"];
export const statusText = [
  "상담 대기중",
  "결제 완료",
  "예약 취소",
  "예약 확정",
];
export const days = ["일", "월", "화", "수", "목", "금", "토"];

export const genderText = (gender) => {
  return gender === 0 ? "남자" : gender === 1 ? "여자" : "선택 안함";
};

export const makeToday = () => {
  const today = moment();
  const year = today.year();
  const month = today.month();
  const day = today.date();
  return [year, month, day];
};

export const RandomPins = [
  PinGreen.src,
  PinLightBlue.src,
  PinRed.src,
  PinYellow.src,
  PinSky.src,
  PinPurple.src,
  PinOrange.src,
  PinBlue.src,
];

export const Menus = (navigator) => {
  return [
    {
      title: "개인",
      MenuBottom: [
        {
          title: "회원 정보",
          Click: () => {
            navigator.push("/setting/myinfo");
          },
        },
        {
          title: "예약 내역",
          Click: () => {
            navigator.push("/setting/reserved");
          },
        },
      ],
    },
    {
      title: "기타",
      MenuBottom: [
        {
          title: "공지사항",
          Click: () => {},
        },
        {
          title: "로그아웃",
          Click: () => {
            LocalSave.setToken("");
            navigator.push("/");
          },
        },
        {
          title: "탈퇴하기",
          Click: async () => {
            if (window.confirm("탈퇴하시겠습니까? 모든 정보가 삭제됩니다.")) {
              try {
                await globalApi.withdraw();
                LocalSave.setToken("");
                navigator.push("/");
              } catch (err) {
                console.log(err);
              }
            }
          },
        },
      ],
    },
  ];
};
