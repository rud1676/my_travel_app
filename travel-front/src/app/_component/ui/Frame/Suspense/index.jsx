"use client";

import { Box } from "@mui/material";
import styles from "./suspense.module.css";
import PropTypes from "prop-types";

const Suspense = ({ title, color }) => {
  return (
    <Box className={styles.loadingBox} color={color}>
      {title}
    </Box>
  );
};

Suspense.propTypes = {
  title: PropTypes.any.isRequired,
  color: PropTypes.string,
};

export default Suspense;
