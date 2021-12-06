import React from 'react';
import './ContentHeader.scss';

function ContentHeader({ changeSort, productTotal, currentSort }) {
  return (
    <div className="contentHeader">
      <span className="productsTotal">총 {productTotal}개</span>
      <div className="sortBtns">
        {SORT_KOREAN.map((name, i) => (
          <button
            className={`sortBtn ${currentSort === i ? 'sortBtnChecked' : ''}`}
            onClick={() => changeSort(i, SORT_ENGLISH[i])}
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

const SORT_KOREAN = ['신상품순', '낮은 가격순', '높은 가격순'];
const SORT_ENGLISH = ['dateHigh', 'priceLow', 'priceHigh'];
