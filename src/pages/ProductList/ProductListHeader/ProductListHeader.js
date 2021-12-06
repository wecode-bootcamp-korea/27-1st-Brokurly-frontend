import React from 'react';
import './ProductListHeader.scss';

function ProductListHeader({ productMenu, currentCategory, changeCategoty }) {
  const { menuName, categories, categoryName } = productMenu;

  return (
    <div className="productListHeader">
      <h2 className="menuName">{menuName}</h2>
      <div className="categories">
        {categories.map((category, i) => (
          <button
            className={`category ${
              currentCategory === i ? 'category-checked' : ''
            }`}
            key={i}
            onClick={() => changeCategoty(i, categoryName[i])}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductListHeader;
