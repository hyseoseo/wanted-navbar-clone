import React from "react";

const Modal = (props) => {
  const { handleLoginModal } = props;

  return (
    <div className="login-modal" onClick={handleLoginModal}>
      <div
        className="login-modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        modal content
      </div>
    </div>
  );
};

export default Modal;
