import React from 'react';
import { Link } from 'react-router-dom';
import './AfterLogin.scss';

function AfterLogin({ userName, setIsLogin }) {
  const goingTologout = () => {
    setIsLogin(false);
    sessionStorage.clear();
  };

  return (
    <div className="afterLogin">
      <Link className="showUserName" to="/">
        {userName}님
      </Link>
      <Link className="logOut" to="/" onClick={goingTologout}>
        로그아웃
      </Link>
    </div>
  );
}

export default AfterLogin;
