import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ product }) {
  const { id, name, image, price, quantity } = product;
  return (
    <Link to={`/prducts/${id}`}>
      <li className="orderProduct">
        <img src={`/images/${image}`} alt={name} />
        <div className="information">
          <span className="name">{name}</span>
          <div className="detail">
            <span className="totalPrice">
              {Number(price * quantity).toLocaleString()}원
            </span>
            <span className="border">|</span>
            <span className="quantity">{quantity}개</span>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default Product;
