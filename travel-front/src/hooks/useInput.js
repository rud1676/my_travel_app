import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  return [value, setValue, onChangeValue];
};

export default useInput;
