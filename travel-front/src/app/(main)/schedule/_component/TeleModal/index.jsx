"use client";

import { Modal, Box, Button } from "@mui/material";
import styles from "./telemodal.module.css";

const TeleModal = ({ phone = "", open, handleClose, onClickConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modalWrapper}>
        <Box className={styles.modalContent}>
          <p className={styles.modalTitle}>{phone}</p>
        </Box>
        <Box className={styles.buttonWrapper}>
          <Button className={styles.confirmButton} onClick={handleClose}>
            취소
          </Button>
          <Button onClick={onClickConfirm}>
            <p className={styles.closeText}>전화걸기</p>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TeleModal;
