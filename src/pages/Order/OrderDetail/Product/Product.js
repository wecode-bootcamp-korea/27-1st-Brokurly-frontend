import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ product }) {
  const { id, name, image, price, quantity } = product;
  return (
    <div className="orderProduct">
      {/* 백 image */}
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} />
      </Link>
      {/* <img src={`/images/${image}`} alt={name} /> */}
      <div className="information">
        <Link to={`/products/${id}`}>
          <span className="name">{name}</span>
        </Link>
        <div className="detail">
          <span className="totalPrice">
            {Number(price * quantity).toLocaleString()}원
          </span>
          <span className="border">|</span>
          <span className="quantity">{quantity}개</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
