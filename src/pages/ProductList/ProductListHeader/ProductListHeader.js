import React, { useState } from 'react';
import './ProductListHeader.scss';

function ProductListHeader({ productMenu, setCurCategoty }) {
  const { menuName, categories } = productMenu;
  const [categoryCheck, setCategoryCheck] = useState(0);

  const clickCategory = id => {
    setCurCategoty(`${id}0`);
    setCategoryCheck(id);
  };

  return (
    <div className="productListHeader">
      <h2 className="menuName">{menuName}</h2>
      <div className="categories">
        {categories.map((category, i) => (
          <button
            className={`category ${
              categoryCheck === i ? 'category-checked' : ''
            }`}
            key={i}
            onClick={() => clickCategory(i)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductListHeader;
