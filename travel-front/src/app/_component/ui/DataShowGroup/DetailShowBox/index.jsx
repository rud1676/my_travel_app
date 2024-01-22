"use client";

import { Box } from "@mui/material";
import DetailInfo from "./_component/DetailInfo";

const DetailShowBox = ({ detail_array }) => {
  return (
    <Box sx={{ width: "86%" }}>
      {detail_array.map((v) => (
        <DetailInfo key={v.id} title={v.title} content={v.content} />
      ))}
    </Box>
  );
};

export default DetailShowBox;
