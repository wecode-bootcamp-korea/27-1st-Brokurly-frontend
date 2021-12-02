import React from 'react';
import './CartModal.scss';

function CartModal() {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="top">
          <div className="productName">브로콜리</div>
          <div className="productDetail">
            <div className="price">{Number(6000).toLocaleString()}원</div>
            <div className="quantityContainer">
              <button className="down">-</button>
              <span className="quantity">1</span>
              <button className="up">+</button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="totalContainer">
            <h3 className="totalText">합계</h3>
            <h2 className="total">
              {Number(12000).toLocaleString()}
              <span className="unit">원</span>
            </h2>
          </div>
          <div className="btns">
            <button className="cancel btn">취소</button>
            <button className="addToCart btn">장바구니 담기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
