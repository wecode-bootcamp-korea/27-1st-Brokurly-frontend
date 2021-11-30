import React from 'react';
import './Product.scss';

function Product({ productName }) {
  return (
    <div className="product">
      <article className="product">
        <div className="img">
          <img src="" alt={productName} />
          <button className="cartBtn" />
        </div>
        <h3 className="name">브로콜리</h3>
        <span className="price">5,490 원</span>
        <span className="infomation">너무도 맛있는 브로콜리</span>
      </article>
    </div>
  );
}

export default Product;
