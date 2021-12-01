import React from 'react';
import './ContentHeader.scss';

function ContentHeader({ setCurrentSort, productTotal, currentSort }) {
  return (
    <div className="contentHeader">
      <span className="productsTotal">총 {productTotal}개</span>
      <div className="sortBtns">
        {SORT_BTNS.map((name, i) => (
          <button
            className={`sortBtn ${currentSort === i ? 'checked' : ''}`}
            onClick={() => setCurrentSort(i)}
            key={i}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ContentHeader;

const SORT_BTNS = ['신상품순', '낮은 가격순', '높은 가격순'];
