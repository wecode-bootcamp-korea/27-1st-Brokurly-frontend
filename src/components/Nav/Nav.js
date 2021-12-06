import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import CATEGORY_DATA from '../../data/categoryData';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <header className="navContainer">
        <div className="moveHeader">
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
        </div>
        <div className="stickyNav">
          <div className="categoryBar">
            <ul className="categoryList">
              {CATEGORY_DATA.map(category => (
                <li className="categoryName" key={category.id}>
                  <Link className="focusLink" to={`/?menu=${category.name}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navSearch">
            <input
              className="searchInput"
              text="text"
              placeholder="검색어를 입력해주세요"
            />
            <button className="searchButton">
              <BiSearch />
            </button>
          </div>
          <div className="navIcon">
            <Link className="iconWrap" to="/">
              <HiOutlineLocationMarker className="iconImage" />
            </Link>
            <Link className="iconWrap" to="/cart">
              <FiShoppingCart className="iconImage" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
