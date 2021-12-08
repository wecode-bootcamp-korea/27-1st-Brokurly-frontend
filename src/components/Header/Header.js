import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BeforeLogin from './BeforeLogin/BeforeLogin';
import AfterLogin from './AfterLogin/AfterLogin';
import './Header.scss';

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const userName = useRef();
  const location = useLocation();

  useEffect(() => {
    if (!!sessionStorage.getItem('token')) {
      setIsLogin(true);
    }
    userName.current = sessionStorage.getItem('username');
  }, [location, isLogin]);

  return (
    <div className="header">
      <header className="headerContainer">
        <div className="join">
          {!isLogin ? (
            <BeforeLogin />
          ) : (
            <AfterLogin userName={userName.current} setIsLogin={setIsLogin} />
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
