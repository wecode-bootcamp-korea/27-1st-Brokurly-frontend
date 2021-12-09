import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import './CartSummary.scss';

function CartSummary({ items, orderItems }) {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const total = items.reduce((previousTotal, currentItem) => {
    if (currentItem.notChecked) {
      return previousTotal;
    }
    return previousTotal + currentItem.quantity * currentItem.product_price;
  }, 0);

  const gotoOrderPage = () => {
    if (!token) {
      alert('로그인해주세요^^');
      return;
    } else {
      navigate('/order');
    }
  };

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
      <button className="toOrderPageBtn" onClick={gotoOrderPage}>
        주문 내역
      </button>
    </div>
  );
}

export default CartSummary;
