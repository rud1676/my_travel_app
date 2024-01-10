"use client";

import { Modal } from "@mui/material";
import AppStyle from "../app.style";
import {
  Pretendard_Bold,
  Pretendard_SemiBold,
  Pretendard_Regular,
} from "@/assets/fonts/fonts";

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
      <AppStyle.ModalWrapper>
        <AppStyle.ModalContent>
          <AppStyle.ModalTitle className={Pretendard_Bold.className}>
            {title}
          </AppStyle.ModalTitle>
          <AppStyle.ModalSubTtitle className={Pretendard_Regular.className}>
            {content}
          </AppStyle.ModalSubTtitle>
        </AppStyle.ModalContent>
        <AppStyle.ButtonWrapper>
          <AppStyle.ConfirmButton
            className={Pretendard_Regular.className}
            onClick={handleClose}
          >
            {calcelText}
          </AppStyle.ConfirmButton>
          <AppStyle.CloseButton
            className={Pretendard_SemiBold.className}
            onClick={onClickConfirm}
          >
            {confirmText}
          </AppStyle.CloseButton>
        </AppStyle.ButtonWrapper>
      </AppStyle.ModalWrapper>
    </Modal>
  );
};

export default ConfirmModal;
