"use client";

import { Box, Typography } from "@mui/material";
import styles from "./component.module.css";

import PropTypes from "prop-types";

const Option = ({ last = false, title, content, price }) => {
  const priceText = `₩${price.toLocaleString()}`;
  return (
    <Box
      className={styles.optionBox}
      marginBottom={last !== "true" && `margin-bottom: 35px;`}
    >
      <Typography className={styles.optionDetailText}>{title}</Typography>
      <Typography className={styles.optionDetailText}>{content}</Typography>
      <Box className={styles.priceOuter}>
        <Box className={styles.priceInner}>
          <p className={styles.priceText}>{priceText}</p>
        </Box>
      </Box>
    </Box>
  );
};

Option.propTypes = {
  last: PropTypes.bool,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Option;
