"use client";

import { Modal } from "@mui/material";
import Schedule from "../schedule.style";
import {
  Pretendard_Bold,
  Pretendard_SemiBold,
  Pretendard_Regular,
} from "@/assets/fonts/fonts";

const TeleModal = ({ phone = "", open, handleClose, onClickConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Schedule.ModalWrapper>
        <Schedule.ModalContent>
          <Schedule.ModalTitle className={Pretendard_Bold.className}>
            {phone}
          </Schedule.ModalTitle>
        </Schedule.ModalContent>
        <Schedule.ButtonWrapper>
          <Schedule.ConfirmButton
            className={Pretendard_Regular.className}
            onClick={handleClose}
          >
            취소
          </Schedule.ConfirmButton>
          <Schedule.CloseButton onClick={onClickConfirm}>
            <Schedule.CloseText className={Pretendard_SemiBold.className}>
              전화걸기
            </Schedule.CloseText>
          </Schedule.CloseButton>
        </Schedule.ButtonWrapper>
      </Schedule.ModalWrapper>
    </Modal>
  );
};

export default TeleModal;
