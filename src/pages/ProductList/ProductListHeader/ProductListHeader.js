import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListHeader.scss';

function ProductListHeader({ title }) {
  return (
    <div className="productListHeader">
      <h2 className="title">{title}</h2>
      <div className="categories">
        <button className="category">
          <Link>category</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductListHeader;
