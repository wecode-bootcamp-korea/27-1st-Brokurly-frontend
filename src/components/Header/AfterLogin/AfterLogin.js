import React from 'react';
import { Link } from 'react-router-dom';
import './AfterLogin.scss';

function AfterLogin({ userName }) {
  return (
    <div className="afterLogin">
      <Link className="showUserName" to="/">
        {userName}님
      </Link>
      <Link className="logOut" to="/" onClick={() => sessionStorage.clear()}>
        로그아웃
      </Link>
    </div>
  );
}

export default AfterLogin;
