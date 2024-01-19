import moment from "moment";
import PinRed from "@/assets/img/Pin_Red.svg";
import PinYellow from "@/assets/img/Pin_Yellow.svg";
import PinSky from "@/assets/img/Pin_Sky.svg";
import PinPurple from "@/assets/img/Pin_Purple.svg";
import PinOrange from "@/assets/img/Pin_Orange.svg";
import PinLightBlue from "@/assets/img/Pin_LightBlue.svg";
import PinGreen from "@/assets/img/Pin_Green.svg";
import PinBlue from "@/assets/img/Pin_Blue.svg";

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
