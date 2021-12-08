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
      <nav className="navContainer">
        <div className="stickyNav">
          <div className="categoryBar">
            <ul className="categoryList">
              {CATEGORY_DATA.map(category => (
                <li className="categoryName" key={category.id}>
                  <Link className="focusLink" to="/vegetables">
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
      </nav>
    </div>
  );
}

export default Nav;
