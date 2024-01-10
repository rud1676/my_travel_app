"use client";

import { Modal } from "@mui/material";

import Schedule from "../schedule.style";
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
      <Schedule.MemoWrapper imgsrc={ShowMemo.src}>
        <Schedule.MemoTextarea disabled value={memo} cols="3" rows="3" />
      </Schedule.MemoWrapper>
    </Modal>
  );
};

export default MemoModal;
