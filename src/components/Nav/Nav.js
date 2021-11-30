import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <header className="moveHeader">
        <div className="join">
          <Link className="joinSignup" to="">
            회원가입
          </Link>
          <Link className="joinSignin" to="">
            로그인
          </Link>
        </div>
        <div className="navLogo">
          <img src="images/dummylog.png" alt="logo" />
        </div>
      </header>
      <div className="stickyNav">
        <div className="categoryBar">
          <ul className="categoryList">
            <li className="categoryName">
              <Link to="/vegetables">채소</Link>
            </li>
            <li className="categoryName">
              <Link to="/salads">샐러드</Link>
            </li>
            <li className="categoryName">
              <Link to="/fruits">과일</Link>
            </li>
            <li className="categoryName">
              <Link to="/meal">간편식</Link>
            </li>
          </ul>
          <div className="navSearch">
            <input className="searchInput" text="text" placeholder="검색" />
            <button className="searchButton">검색</button>
          </div>
          <div className="navIcon">
            <Link to="/">
              <HiOutlineLocationMarker />
            </Link>
            <Link to="/cart">
              <BsCart2 />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
