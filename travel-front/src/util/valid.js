import { toast } from "react-hot-toast";

export const PlanDetailMakeValid = (form) => {
  const [h, m] = form.time.split(":");
  const hoursRegex = /^(?:[01]?[0-9]|2[0-3])$/;
  const minutesRegex = /^[0-5]?[0-9]$/;
  if (!(minutesRegex.test(m) && hoursRegex.test(h))) {
    toast.error("시간을 정확히 입력해주세요");
    return false;
  }
  console.log(form?.title);
  if (form?.title === undefined || form.title === "") {
    toast.error("제목을 입력하세요");
    return false;
  }
  if (form.title !== "" && form.title.length >= 30) {
    toast.error("제목을 30자 이내로 작성해주세요.");
    return false;
  }
  if (!form.color) {
    toast.error("컬러를 지정해주세요");
    return false;
  }
  if (!form.location) {
    toast.error("장소를 지정해주세요");
    return false;
  }
  return true;
};

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

export const ModifyUserValid = ({ name, birth }) => {
  console.log(name, birth);
  console.log(birth.split("-")[0].length);
  if (name.length === 0) {
    toast.error("이름을 입력해주세요!");
    return false;
  }
  if (
    birth.split("-")[0].length === 0 ||
    birth.split("-")[1].length === 0 ||
    birth.split("-")[2].length === 0
  ) {
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
