import React, { FC, ReactNode } from "react";

import Modal from "react-modal";
import { Icon } from "@/app/components/Icon";

interface BaseModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const customStyles = {
  overlay: {
    backgroundColor: "#faf4f490",
    zIndex: 9999,
  },
  content: {
    backgroundColor: "#1a1a1a",
    border: "1px solid #78716c",
    borderRadius: "12px",
    minWidth: "100px",
    width: "min-content",
    height: "min-content",
    minHeight: "100px",
    padding: "32px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
};

export const BaseModal: FC<BaseModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  Modal.setAppElement(document.body);

  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onClose}>
      <button className="w-5 h-5 absolute right-3 top-3" onClick={onClose}>
        <Icon
          name={"close"}
          className={"w-5 h-5 fill-globalForeground hover:fill-hoverColor"}
        />
      </button>
      {children}
    </Modal>
  );
};
