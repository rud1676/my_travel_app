"use client";

import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import styles from "./sortingbox.module.css";
import { Box } from "@mui/material";

import Filter_Active from "@/assets/img/Filter_Active.svg";
import Filter from "@/assets/img/Filter.svg";

import { myPlanApi } from "@/api/myplan";

const SotringLayer = ({ setMinView, minView }) => {
  const queryClient = useQueryClient();
  const [active, setActive] = useState(0);

  const onClickSort = (params) => {
    queryClient.fetchQuery({
      queryKey: ["plan"],
      queryFn: () => myPlanApi.list(params === 0 ? "desc" : "asc"),
    });
    setActive(params);
  };

  return (
    <Box className={styles.sortingLayerWrapper}>
      <Box className={styles.sortingWrapper}>
        <button
          style={{
            background: `url("${
              active === 0 ? Filter_Active.src : Filter.src
            }")`,
          }}
          className={styles.sortingButton}
          onClick={() => {
            onClickSort(0);
          }}
        >
          최신순
        </button>
        <button
          className={styles.sortingButton}
          style={{
            background: `url("${
              active === 1 ? Filter_Active.src : Filter.src
            }")`,
          }}
          onClick={() => {
            onClickSort(1);
          }}
        >
          오래된 순
        </button>
      </Box>
      <Box className={styles.minimalViewWrapper}>
        <p className={styles.minimalText}>간단히 보기</p>
        <Box
          className={styles.minimalSwitchBox}
          sx={{
            backgroundColor: minView ? `#6549ba` : `#D9D9D9`,
          }}
          onClick={() => {
            setMinView((prev) => !prev);
          }}
        >
          <Box
            className={styles.minimalSwitchCircle}
            sx={{
              left: minView ? `23px` : `0px`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default SotringLayer;
