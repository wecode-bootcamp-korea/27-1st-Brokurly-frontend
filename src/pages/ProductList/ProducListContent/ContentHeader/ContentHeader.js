import React from 'react';
import { Link } from 'react-router-dom';
import './ContentHeader.scss';

function ContentHeader() {
  return (
    <div className="contentHeader">
      <span className="ProductsTotal">총 6개</span>
      <div className="sortBtns">
        <button className="sortBtn">
          <Link>추천</Link>
        </button>
      </div>
    </div>
  );
}

export default ContentHeader;
