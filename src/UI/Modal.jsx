import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className ,onClose}) => {
  const modalRef = useRef();
  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    }
    if(!open){
      modalRef.current.close();
    }
  }, [open]);
  return createPortal(
    <dialog className={`modal ${className}`}  ref={modalRef} onClose={onClose}>{children}</dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
