import React, { useState } from 'react';
import './ProductListHeader.scss';

function ProductListHeader({ productMenu }) {
  const { menuName, categories } = productMenu;
  const [categoryCheck, setCategoryCheck] = useState([
    true,
    false,
    false,
    false,
  ]);

  const clickCategory = id => {
    setCategoryCheck(categoryCheck.map((_, i) => (i === id ? true : false)));
  };

  return (
    <div className="productListHeader">
      <h2 className="menuName">{menuName}</h2>
      <div className="categories">
        <button
          className={`category ${categoryCheck[0] ? 'category-checked' : ''}`}
          onClick={() => clickCategory(0)}
        >
          전체보기
        </button>
        {categories.map((category, i) => (
          <button
            className={`category ${
              categoryCheck[i + 1] ? 'category-checked' : ''
            }`}
            key={i}
            onClick={() => clickCategory(i + 1)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductListHeader;
