import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './CartSummary.scss';

function CartSummary({ items, orderItems }) {
  const total = items.reduce((previousTotal, currentItem) => {
    if (currentItem.notChecked) {
      return previousTotal;
    }
    return previousTotal + currentItem.quantity * currentItem.price;
  }, 0);

  return (
    <div className="cartSummery">
      <div className="cartSummeryContent">
        <div className="addressContainer">
          <h3 className="location">
            <span className="locationIcon">
              <GrLocation />
            </span>
            배송지
          </h3>
          <span className="address">서울특별시 강남구 테헤란로 427 위코드</span>
        </div>
        <div className="totalPriceContainer">
          <span className="totalPriceTitle">결제예정금액</span>
          <span className="totalPrice">
            {Number(total).toLocaleString()} <span className="unit">원</span>
          </span>
        </div>
      </div>
      <button className="orderBtn" onClick={orderItems}>
        주문하기
      </button>
      <Link to="/order">
        <button className="toOrderPageBtn">주문 내역</button>
      </Link>
    </div>
  );
}

export default CartSummary;
