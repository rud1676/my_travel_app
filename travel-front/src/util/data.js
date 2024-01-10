import moment from "moment";

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
