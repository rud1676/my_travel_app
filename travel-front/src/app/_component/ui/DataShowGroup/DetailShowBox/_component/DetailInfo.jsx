"use client";

import { Box } from "@mui/material";
import styles from "./component.module.css";

import PropTypes from "prop-types";

const DetailInfo = ({ title, content }) => {
  return (
    <Box className={styles.detailInfoBox}>
      <p className={styles.detailInfoTitle}>{title}</p>
      <p className={styles.detailInfoContent}>{content}</p>
    </Box>
  );
};

DetailInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default DetailInfo;
