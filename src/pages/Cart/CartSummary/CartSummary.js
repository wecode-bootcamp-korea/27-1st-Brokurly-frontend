import React, { useEffect, useState } from 'react';
import './CartSummary.scss';
import { GrLocation } from 'react-icons/gr';

function CartSummary({ coldItems, boxItems, orderItems }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      coldItems.reduce((a, c) => {
        if (c.notChecked) return a;
        return a + c.quantity * c.price;
      }, 0) +
        boxItems.reduce((a, c) => {
          if (c.notChecked) return a;
          return a + c.quantity * c.price;
        }, 0)
    );
  }, [coldItems, boxItems]);
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
    </div>
  );
}

export default CartSummary;
