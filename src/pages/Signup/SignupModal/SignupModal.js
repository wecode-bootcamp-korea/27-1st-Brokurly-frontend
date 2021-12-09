import React from 'react';
import '../SignupModal/SignupModal.scss';

function SignupModal({ modalMessage, closeModalBtn }) {
  return (
    <div className="modalBackground" onClick={closeModalBtn}>
      <div className="modalContainer">
        <div className="textBox">
          <div className="modalText">{modalMessage}</div>
          <button className="closeBtn" onClick={closeModalBtn}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignupModal;
