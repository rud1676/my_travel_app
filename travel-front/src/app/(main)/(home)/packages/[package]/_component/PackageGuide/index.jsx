"use client";

import { Box } from "@mui/material";
import QuillViewer from "@/lib/QuillViewer";

const TravelGuide = ({ content }) => {
  return (
    <Box
      sx={{
        padding: "21px 33px 0 33px",
        background: "#fff",
        paddingBottom: "150px",
        minHeight: "800px",
      }}
    >
      <QuillViewer content={content} />
    </Box>
  );
};

export default TravelGuide;
