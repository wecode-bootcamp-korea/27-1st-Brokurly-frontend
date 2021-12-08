import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BeforeLogin from './BeforeLogin/BeforeLogin';
import AfterLogin from './AfterLogin/AfterLogin';
import './Header.scss';

function Header() {
  //TODO: API통신때는 불필요하기 때문에 삭제 필요
  sessionStorage.test = '123';
  sessionStorage.setItem('token', 'ddd');
  sessionStorage.setItem('username', '구유진');

  const isLogin = useRef();
  const userName = useRef();

  const location = useLocation();
  useEffect(() => {
    isLogin.current = sessionStorage.getItem('token');
    userName.current = sessionStorage.getItem('username');
  }, [location]);

  return (
    <div className="header">
      <header className="headerContainer">
        <div className="join">
          {!isLogin.current ? (
            <BeforeLogin />
          ) : (
            <AfterLogin userName={userName.current} />
          )}
        </div>
        <div className="navLogo">
          <Link className="clickToMain" to="/">
            <img className="mainLog" src="/images/brokurlylog.png" alt="logo" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
