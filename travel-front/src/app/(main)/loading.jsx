"use client";
import { CircularProgress } from "@mui/material";
import MainStyle from "./main.style";
const Loading = () => {
  return (
    <MainStyle.LoadingBox>
      <CircularProgress isindeterminate={true.toString()} color="primary" />
    </MainStyle.LoadingBox>
  );
};

export default Loading;
