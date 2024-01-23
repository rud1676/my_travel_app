"use client";
import { CircularProgress } from "@mui/material";
import Suspense from "../_component/ui/Frame/Suspense";

const Loading = () => {
  return (
    <Suspense
      title={
        <CircularProgress isindeterminate={true.toString()} color="primary" />
      }
      color="primary"
    />
  );
};

export default Loading;
