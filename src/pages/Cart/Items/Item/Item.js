import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';

import './Item.scss';

function Item({ item }) {
  const { image, name, quantity, price } = item;
  return (
    <div className="item">
      <div className="left">
        <button className="checkBtn">
          <AiFillCheckCircle />
        </button>
        <img src={`/images/${image}`} alt={name} />
        <span className="name">{name}</span>
      </div>
      <div className="right">
        <div className="changeAmountContainer">
          <button className="changeBtn">-</button>
          {quantity}
          <button className="changeBtn">+</button>
        </div>
        <div className="totalPrice">
          {Number(price * quantity).toLocaleString()}
        </div>
        <button className="deleteBtn">
          <TiDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default Item;
