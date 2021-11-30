import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';

import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <header className="navContainer">
        <div className="moveHeader">
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
        </div>
        <div className="stickyNav">
          <div className="categoryBar">
            <ul className="categoryList">
              <li className="categoryName">
                <Link className="focusLink" to="/vegetables">
                  채소
                </Link>
              </li>
              <li className="categoryName">
                <Link className="focusLink" to="/salads">
                  샐러드
                </Link>
              </li>
              <li className="categoryName">
                <Link className="focusLink" to="/fruits">
                  과일
                </Link>
              </li>
              <li className="categoryName">
                <Link className="focusLink" to="/meal">
                  간편식
                </Link>
              </li>
            </ul>
          </div>
          <div className="navSearch">
            <input
              className="searchInput"
              text="text"
              placeholder="검색어를 입력해주세요.."
            />
            <button className="searchButton">
              <BiSearch />
            </button>
          </div>
          <div className="navIcon">
            <Link className="iconWrap" to="/">
              <HiOutlineLocationMarker className="iconImage" />
            </Link>
            <Link className="iconWrap" to="/">
              <FiShoppingCart className="iconImage" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
