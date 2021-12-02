import React from 'react';
import './Signup.scss';

function Signup() {
  return (
    <div className="signup">
      <header className="signupHeader">
        <div className="signupHeaderName">회원가입</div>
      </header>
      <div className="signupBox">
        <div className="essentialInput">
          <span className="starMark">*필수입력사항</span>
        </div>
        <div className="signSection">
          <div className="signTable"></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
