"use client";
import { Box } from "@mui/material";
const Error = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
      }}
    >
      서버 에러가 났습니다 관리자에게 문의해주세요
    </Box>
  );
};

export default Error;
