import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Product.scss';

function Product({ product, putInfoIntoModal }) {
  const { name, image, price, introduction, id } = product;
  const cartBtn = useRef();
  const navigate = useNavigate();
  const gotoProductDetail = e => {
    if (!cartBtn.current.contains(e.target)) {
      navigate(`product/${id}`);
    }
  };

  return (
    <article className="product" onClick={gotoProductDetail}>
      <div className="imgContainer">
        <img src={image} alt={name} />
        <button
          className="cartBtn"
          ref={cartBtn}
          onClick={() => putInfoIntoModal(product)}
        >
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
