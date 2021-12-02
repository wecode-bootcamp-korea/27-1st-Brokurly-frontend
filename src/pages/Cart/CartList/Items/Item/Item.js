import React from 'react';
import './Item.scss';

function Item(item) {
  const { image, name, quantity, price } = item;
  return (
    <div className="item">
      <div className="left">
        <button className="checkBtn">*</button>
        <img src={image} alt={name} />
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
        <button className="deleteBtn">x</button>
      </div>
    </div>
  );
}

export default Item;
