import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListHeader.scss';

function ProductListHeader({ productMenu }) {
  const { menuName, categories } = productMenu;
  return (
    <div className="productListHeader">
      <h2 className="menuName">{menuName}</h2>
      <div className="categories">
        <Link className="category category-checked" to="/">
          전체보기
        </Link>
        {categories.map((category, i) => (
          <Link className="category" to="/" key={i}>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListHeader;
