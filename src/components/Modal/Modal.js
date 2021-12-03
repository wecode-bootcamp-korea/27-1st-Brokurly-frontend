import React, { useRef } from 'react';
import './Modal.scss';

function Modal({ children, closeModal }) {
  const modalContent = useRef();

  const clickOutside = e => {
    if (!modalContent.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={clickOutside}>
      <div className="modalContent" ref={modalContent}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
