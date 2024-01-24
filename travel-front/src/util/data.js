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

import TagSticker_Gray from "@/assets/img/TagSticker_Gray.svg";
import TagSticker_Orange from "@/assets/img/TagSticker_Orange.svg";
import TagSticker_Yellow from "@/assets/img/TagSticker_Yellow.svg";
import TagSticker_Green from "@/assets/img/TagSticker_Green.svg";
import TagSticker_Blue from "@/assets/img/TagSticker_Blue.svg";
import TagSticker_Violet from "@/assets/img/TagSticker_Violet.svg";
import TagSticker_Purple from "@/assets/img/TagSticker_Purple.svg";
import TagSticker_Pink from "@/assets/img/TagSticker_Pink.svg";

import { LocalSave } from "@/LocalSave";
import { globalApi } from "@/api/global";

import StickerBall from "@/assets/img/StickerBall.svg";
import StickerCamera from "@/assets/img/StickerCamera.svg";
import StickerFlag from "@/assets/img/StickerFlag.svg";
import StickerFlight from "@/assets/img/StickerFlight.svg";
import StickerFlower from "@/assets/img/StickerFlower.svg";
import StickerHeart from "@/assets/img/StickerHeart.svg";
import StickerMail from "@/assets/img/StickerMail.svg";
import StickerMusic from "@/assets/img/StickerMusic.svg";
import StickerSmile from "@/assets/img/StickerSmile.svg";
import StickerStar from "@/assets/img/StickerStar.svg";

import PlanSticker1 from "@/assets/img/PlanSticker1.svg";
import PlanSticker2 from "@/assets/img/PlanSticker2.svg";
import PlanSticker3 from "@/assets/img/PlanSticker3.svg";
import PlanSticker4 from "@/assets/img/PlanSticker4.svg";
import PlanSticker5 from "@/assets/img/PlanSticker5.svg";

import LineSticker1 from "@/assets/img/LineSticker1.svg";
import LineSticker2 from "@/assets/img/LineSticker2.svg";
import LineSticker3 from "@/assets/img/LineSticker3.svg";
import LineSticker4 from "@/assets/img/LineSticker4.svg";
import LineSticker5 from "@/assets/img/LineSticker5.svg";

import Type2LineSticker1 from "@/assets/img/Type2LineSticker1.svg";
import Type2LineSticker2 from "@/assets/img/Type2LineSticker2.svg";
import Type2LineSticker3 from "@/assets/img/Type2LineSticker3.svg";
import Type2LineSticker4 from "@/assets/img/Type2LineSticker4.svg";
import Type2LineSticker5 from "@/assets/img/Type2LineSticker5.svg";

export const Type2LineStickers = [
  Type2LineSticker1.src,
  Type2LineSticker2.src,
  Type2LineSticker3.src,
  Type2LineSticker4.src,
  Type2LineSticker5.src,
];

export const LineSticker = [
  LineSticker1.src,
  LineSticker2.src,
  LineSticker3.src,
  LineSticker4.src,
  LineSticker5.src,
];

export const PlanSticker = [
  PlanSticker1.src,
  PlanSticker2.src,
  PlanSticker3.src,
  PlanSticker4.src,
  PlanSticker5.src,
];

export const Stickers = [
  StickerBall.src,
  StickerCamera.src,
  StickerFlag.src,
  StickerFlight.src,
  StickerFlower.src,
  StickerHeart.src,
  StickerMail.src,
  StickerMusic.src,
  StickerSmile.src,
  StickerStar.src,
];

export const ScheduleIcons = [schedule_active.src, schedule.src];
export const SettingIcons = [setting_active.src, setting.src];
export const HomeIcons = [home_active.src, home.src];

export const sticker = [
  TagSticker_Gray.src,
  TagSticker_Orange.src,
  TagSticker_Yellow.src,
  TagSticker_Green.src,
  TagSticker_Blue.src,
  TagSticker_Violet.src,
  TagSticker_Purple.src,
  TagSticker_Pink.src,
];
export const tagcolor = [
  "#DFDFDF",
  "#FFDEDE",
  "#FFF0C9",
  "#CEFEC2",
  "#CDF3FF",
  "#C5CAFF",
  "#DBACFF",
  "#FFC1F9",
];

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
