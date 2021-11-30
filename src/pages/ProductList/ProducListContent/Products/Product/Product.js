import React from 'react';
import './Product.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Product({ product }) {
  const { name, image, price, introduction } = product;

  const addComma = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <article className="product">
      <div className="imgContainer">
        <img src={`./images/${image}`} alt={name} />
        <button className="cartBtn">
          <AiOutlineShoppingCart />
        </button>
      </div>
      <h3 className="name">{name}</h3>
      <span className="price">{addComma(price)}원</span>
      <span className="information">{introduction}</span>
    </article>
  );
}

export default Product;
