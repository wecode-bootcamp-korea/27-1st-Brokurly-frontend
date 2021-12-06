import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <header className="headerContainer">
        <div className="join">
          <Link className="joinSignup" to="/signup">
            회원가입
          </Link>
          <Link className="joinSignin" to="/signin">
            로그인
          </Link>
        </div>
        <div className="navLogo">
          <Link className="clickToMain" to="/">
            <img
              className="mainLog"
              src="http://localhost:3000/images/brokurlylog.png"
              alt="logo"
            />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
