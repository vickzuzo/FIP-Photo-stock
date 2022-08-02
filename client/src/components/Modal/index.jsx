import React from "react";
import { Modal as FIPModal } from "flexibull2/build/modal";
import {
  ModalBody,
  ModalCloseButton,
  ModalTitle,
  StyledDemoModalContainer,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children, title, titlePos = "left" }) => {
  return (
    <FIPModal open={isOpen} center={true} onClose={onClose}>
      <StyledDemoModalContainer>
        <ModalCloseButton onClick={onClose}>
          <AiOutlineClose />
        </ModalCloseButton>
        <ModalTitle pos={titlePos}>{title}</ModalTitle>
        <ModalBody>{children}</ModalBody>
      </StyledDemoModalContainer>
    </FIPModal>
  );
};

export default Modal;
