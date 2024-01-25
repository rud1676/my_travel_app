"use client";

import toast from "react-hot-toast";

import { SwipeableDrawer, Typography } from "@mui/material";
import styles from "./footerdrawer.module.css";

import { useRouter } from "next/navigation";

const FooterDrawer = ({ details, plan_id, open, setOpen }) => {
  const navigator = useRouter();

  return (
    <SwipeableDrawer
      classes={{ paperAnchorBottom: styles.drawFooterWrapper }}
      anchor="bottom"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      onOpen={() => {
        setOpen(true);
      }}
    >
      <Box className={styles.drawerOuterWrapper}>
        <Box className={styles.drawerInnerWrapper}>
          <Box
            sx={{ borderRadius: "9px 9px 0px 0px" }}
            className={styles.buttonWrapper}
            onClick={() => {
              navigator.push(`/schedule/plan/make?id=${plan_id}&step=0`);
            }}
          >
            <Typography className={styles.buttonTitle}>
              여행 제목 변경
            </Typography>
          </Box>
          <Box
            sx={{ borderRadius: "0px 0px 9px 9px" }}
            className={styles.buttonWrapper}
            onClick={() => {
              if (details.length === 0) {
                toast.remove();
                navigator.push(`/schedule/plan/make?id=${plan_id}&step=1`);
              } else {
                toast.error(
                  "이미 작성된 세부 일정이 있어 기간을 변경 할 수 없습니다.세부 일정을 모두 삭제 한 뒤에 기간 변경을 해주세요."
                );
              }
            }}
          >
            <Typography className={styles.buttonTitle}>기간 변경</Typography>
          </Box>
          <Box
            className={styles.closeButtonWrapper}
            onClick={() => {
              setOpen(false);
            }}
          >
            <Typography className={styles.buttonTitle}>닫기</Typography>
          </Box>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default FooterDrawer;
