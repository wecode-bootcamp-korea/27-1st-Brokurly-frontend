import React from 'react';
import '../SignupModal/SignupModal.scss';

function SignupModal({ message }) {
  return (
    <div className="modalBackground">
      <div className="modalBox">{message}</div>
    </div>
  );
}
export default SignupModal;
