"use client";

import { Modal, Box, Typography } from "@mui/material";
import styles from "./modal.module.css";

const ConfirmModal = ({
  title = "세부 일정 삭제",
  content = "정말로 삭제 하시겠습니까?",
  open,
  handleClose,
  onClickConfirm,
  calcelText = "취소",
  confirmText = "삭제",
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modalWrapper}>
        <Box className={styles.modalContent}>
          <Typography className={styles.modalTitle}>{title}</Typography>
          <Typography
            className={styles.modalSubTtitle}
            dangerouslySetInnerHTML={{ __html: content }}
          ></Typography>
        </Box>
        <Box className={styles.buttonWrapper}>
          <Button className={styles.confirmButton} onClick={handleClose}>
            {calcelText}
          </Button>
          <Button className={styles.closeButton} onClick={onClickConfirm}>
            {confirmText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
