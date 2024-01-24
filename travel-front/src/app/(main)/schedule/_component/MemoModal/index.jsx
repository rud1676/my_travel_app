"use client";

import { Modal, Box } from "@mui/material";
import styles from "./memomodal.module.css";

import ShowMemo from "@/assets/img/ShowMemo.svg";

const MemoModal = ({ memo = "", setMemo }) => {
  const isOpen = memo !== "" ? true : false;
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setMemo("");
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className={styles.memoWrapper}
        sx={{ backgroundImage: `url("${ShowMemo.src}")` }}
      >
        <textarea
          className={styles.memoTextarea}
          disabled
          value={memo}
          cols="3"
          rows="3"
        />
      </Box>
    </Modal>
  );
};

export default MemoModal;
