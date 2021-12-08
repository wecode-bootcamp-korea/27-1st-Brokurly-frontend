import React from 'react';
import { Link } from 'react-router-dom';
import './BeforeLogin.scss';

function BeforeLogin() {
  return (
    <div className="beforeLogin">
      <Link className="joinSignup" to="/signup">
        회원가입
      </Link>
      <Link className="joinSignin" to="/signin">
        로그인
      </Link>
    </div>
  );
}

export default BeforeLogin;
