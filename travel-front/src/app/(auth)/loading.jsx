"use client";
import { CircularProgress, Backdrop } from "@mui/material";
const Loading = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress isindeterminate={true.toString()} color="primary" />
    </Backdrop>
  );
};

export default Loading;
