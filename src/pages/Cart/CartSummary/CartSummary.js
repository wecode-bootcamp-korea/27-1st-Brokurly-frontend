import React from 'react';
import './CartSummary.scss';

function CartSummary() {
  return (
    <div className="cartSummery">
      <div className="addressContainer">
        <h3>배송지</h3>
        <span className="address">서초구 서초동</span>
      </div>
      <div className="totalPriceContainer">
        <span className="totalPrice">{Number(1000).toLocaleString()}</span>
      </div>
      <button className="orderBtn">주문하기</button>
    </div>
  );
}

export default CartSummary;
