import React from 'react';
import '../SignupModal/SignupModal.scss';

function SignupModal({ modalMessage }) {
  return (
    <div className="modalBackground">
      <div className="modalBox">{modalMessage}</div>
    </div>
  );
}
export default SignupModal;
