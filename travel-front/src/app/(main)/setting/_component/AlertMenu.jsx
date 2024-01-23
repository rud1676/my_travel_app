"use cleint";

import { useState } from "react";

import { Box } from "@mui/material";
import styles from "./component.module.css";

import Menu from "./Menu";

const AlertMenu = () => {
  const [swt, setSwt] = useState(false);

  return (
    <>
      <Menu title="알림 설정" />
      <Box
        className={styles.menuAlert}
        sx={{ marginBottom: swt ? "17px" : "54px" }}
      >
        <p className={styles.menuAlertText}>일정 알림</p>
        <Box
          className={styles.minimalSwitchBox}
          sx={{ background: swt ? `#6549ba` : `#D9D9D9` }}
          onClick={() => {
            setSwt((prev) => !prev);
          }}
        >
          <Box
            className={styles.minimalSwitchCircle}
            sx={{ left: swt ? "23px" : "0px" }}
          />
        </Box>
      </Box>
      {swt && (
        <Box className={styles.MenuAlertTime}>
          <p className={styles.menuAlertText}>알림 시간</p>
          <p className={styles.menuAlertMinute}>30분 전</p>
        </Box>
      )}
    </>
  );
};

export default AlertMenu;
