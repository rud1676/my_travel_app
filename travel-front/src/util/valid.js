import { toast } from "react-hot-toast";

export const CheckRangeValid = (range) => {
  if (range?.from === undefined && range?.to === undefined) {
    toast.error("날짜를 지정해주세요.");
    return false;
  }
  return true;
};

export const CheckMakeTravelTitle = (title) => {
  if (title.length === 0) {
    toast.error("여행 일정 제목을 입력하세요.");
    return false;
  } else if (title.length >= 20) {
    toast.error("20자 이내로 적어주세요");
    return false;
  }
  return true;
};

export const ModifyUserValid = ({ name, year, month, day }) => {
  if (name.length === 0) {
    toast.error("이름을 입력해주세요!");
    return false;
  }
  if (year.length === 0 || month.length === 0 || day.length === 0) {
    toast.error("날짜를 정확하게 입력해주세요.");
    return false;
  }
  return true;
};

export const Checkuser = (user) => {
  if (!user) {
    toast.error("로그인을 해야합니다.");
    return false;
  }
  return true;
};

export const InputValid = (range, adult, child, setOpen) => {
  if (range?.from === undefined || range?.to === undefined) {
    toast.error("날짜를 설정해주세요");
    setOpen(false);
    return false;
  }
  if (adult === 0 && child === 0) {
    toast.error("인원수는 최소 1명입니다!");
    return false;
  }
  return true;
};
