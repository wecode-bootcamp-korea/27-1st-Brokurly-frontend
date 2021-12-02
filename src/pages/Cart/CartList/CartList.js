import React from 'react';
import './CartList.scss';
import Items from './Items/Items';
import SelectBtns from './SelectBtns/SelectBtns';

function CartList({ title, items }) {
  return (
    <div className="cartList">
      <h3>{title}</h3>
      <SelectBtns />
      <Items items={items} />
      <SelectBtns />
    </div>
  );
}

export default CartList;
