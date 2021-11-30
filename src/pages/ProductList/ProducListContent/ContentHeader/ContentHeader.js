import React from 'react';
import { Link } from 'react-router-dom';
import './ContentHeader.scss';

function ContentHeader() {
  // const SORT_BTNS = ['신상품순', '낮은 가격순', '높은 가격순'];
  const SORT_BTNS = ['낮은 가격순', '높은 가격순'];
  const TOTAL = 6;
  return (
    <div className="contentHeader">
      <span className="productsTotal">총 {TOTAL}개</span>
      <div className="sortBtns">
        <Link to="/" className="sortBtn checked">
          신상품순
        </Link>
        {SORT_BTNS.map((btn, i) => (
          <Link to="/" className="sortBtn" key={i}>
            {btn}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContentHeader;
