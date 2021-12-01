import React from 'react';
import './ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="productDetail">
      <article className="articleLeft">
        <img
          className="detailImage"
          src="images/dummy_detail_img.jpg"
          alt="상품"
        />
      </article>
    </div>
  );
}

export default ProductDetail;
