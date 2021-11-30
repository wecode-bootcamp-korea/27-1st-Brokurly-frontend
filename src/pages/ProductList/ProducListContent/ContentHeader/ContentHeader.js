import React, { useState } from 'react';
import './ContentHeader.scss';

function ContentHeader({ setCurCategoty, curCategoty }) {
  const [sortCheck, setSortCheck] = useState(0);
  const SORT_BTNS = ['신상품순', '낮은 가격순', '높은 가격순'];
  const TOTAL = 6;

  const clickSortBtn = id => {
    setSortCheck(id);
    setCurCategoty(`${curCategoty}${id}`);
  };

  return (
    <div className="contentHeader">
      <span className="productsTotal">총 {TOTAL}개</span>
      <div className="sortBtns">
        {SORT_BTNS.map((name, i) => (
          <button
            className={`sortBtn ${sortCheck === i ? 'checked' : ''}`}
            onClick={() => clickSortBtn(i)}
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
