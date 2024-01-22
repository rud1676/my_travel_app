"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";

const ImageCarousel = ({ imgs }) => {
  const [current, setCurrent] = React.useState(`1/${imgs.length}`);

  return (
    <Swiper
      style={{ marginTop: "10px" }}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => {
        setCurrent(`${swiper.activeIndex + 1}/${imgs.length}`);
      }}
    >
      {imgs.map((v) => (
        <SwiperSlide key={v.id}>
          <img
            width="100%"
            key={v.id}
            src={v.location}
            style={{ objectFit: "contain", height: 184, width: "100%" }}
            alt=""
          />
        </SwiperSlide>
      ))}
      <Box
        sx={{
          position: "absolute",
          bottom: 11,
          right: 13,
          fontSize: "10px",
          fontWeight: 700,
          color: "rgba(0, 0, 0, 0.50)",
        }}
      >
        {current}
      </Box>
    </Swiper>
  );
};

export default ImageCarousel;
