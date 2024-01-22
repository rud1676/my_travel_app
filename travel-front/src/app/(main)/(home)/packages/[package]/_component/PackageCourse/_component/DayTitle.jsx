"use client";

import PropTypes from "prop-types";
import { Box } from "@mui/material";
import styles from "./component.module.css";

import Filter_Active from "@/assets/img/Filter_Active.svg";

const DayTitle = ({ num, title }) => {
  return (
    <Box className={styles.dayTitleBox}>
      <Box
        className={styles.dayNumberBox}
        sx={{ backgroundImage: `url(${Filter_Active.src})` }}
      >
        {num}일차
      </Box>
      <Box className={styles.dayName}>{title}</Box>
    </Box>
  );
};

DayTitle.propTypes = {
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default DayTitle;
