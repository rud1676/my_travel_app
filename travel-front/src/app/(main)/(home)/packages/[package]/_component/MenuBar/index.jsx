"use client";

import { Box } from "@mui/material";
import styles from "./menubar.module.css";
import PropTypes from "prop-types";

const menus = ["여행정보", "코스소개", "필수안내", "예약 및 취소규정"];

const Navigator = ({ setPage, page }) => {
  return (
    <Box className={styles.navigatorWrapper}>
      {menus.map((v, i) => {
        return (
          <Box
            key={v}
            className={styles.navItem}
            borderBottom={`4.25px solid ${page === i ? "#6549ba" : "#C7C7C7"}`}
            color={page === i ? "#6549ba" : "#C7C7C7"}
            onClick={() => {
              setPage(i);
            }}
            activate={(page === i).toString()}
          >
            {v}
          </Box>
        );
      })}
    </Box>
  );
};

Navigator.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navigator;
