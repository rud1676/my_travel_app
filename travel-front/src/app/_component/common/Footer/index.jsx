"use client";

import PropTypes from "prop-types";

import { Box } from "@mui/material";
import styles from "./footer.module.css";

const Footer = ({
  backgroundColor,
  bgcolor = "#6549ba", //지울예정
  onClick,
  child,
}) => {
  return (
    <Box
      className={styles.footerWrapper}
      backgroundColor={backgroundColor || bgcolor}
      onClick={onClick}
    >
      {child}
    </Box>
  );
};

Footer.propTypes = {
  backgroundColor: PropTypes.string,
  bgcolor: PropTypes.string,
  child: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};

export default Footer;
