import React from 'react';
import './ProductThumbnail.scss';

function ProductThumbnail({ images }) {
  return (
    <article className="productThumbnail">
      <img className="detailImage" src={images} alt="상품" />
    </article>
  );
}

export default ProductThumbnail;
