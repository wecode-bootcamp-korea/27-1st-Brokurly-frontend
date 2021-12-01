import React from 'react';
import './Product.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Product({ product }) {
  const { name, image, price, introduction } = product;

  return (
    <article className="product">
      <div className="imgContainer">
        <img src={`./images/${image}`} alt={name} />
        <button className="cartBtn">
          <AiOutlineShoppingCart />
        </button>
      </div>
      <h3 className="name">{name}</h3>
      <span className="price">{Number(price).toLocaleString()}원</span>
      <span className="information">{introduction}</span>
    </article>
  );
}

export default Product;
