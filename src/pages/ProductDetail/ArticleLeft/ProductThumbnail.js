import React from 'react';
import './ProductThumbnail.scss';

function ProductThumbnail({ productData }) {
  return (
    <article className="productThumbnail">
      <img className="detailImage" src={productData.images} alt="상품" />
    </article>
  );
}

export default ProductThumbnail;
