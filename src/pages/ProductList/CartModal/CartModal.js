import React, { useEffect, useRef, useState } from 'react';
import './CartModal.scss';

function CartModal({ product, closeModal }) {
  const [quantity, setQuantity] = useState(1);
  const { name, price, id } = product;
  const token = sessionStorage.getItem('token');

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity === 1) {
      alert('최소 수량은 1개 입니다.');
      return;
    }
    setQuantity(quantity - 1);
  };

  const addProductToCart = () => {
    if (!!token) {
      fetch('http://10.58.4.106:8000/cart', {
        method: 'POST',
        headers: {
          token: token,
        },
        body: JSON.stringify({
          product_id: id,
          quantity: quantity,
        }),
      })
        .then(res => res.json())
        .then(res => {
          switch (res.message) {
            case 'UPDATE':
            case 'CREATED':
              alert('장바구니에 상품이 추가 되었습니다.');
              closeModal();
              break;
            // TODO 에러 메세지 처리하기
            default:
              break;
          }
        })
        .catch(e => {
          // eslint-disable-next-line no-console
          console.log(e);
        });
    } else {
      alert('로그인해주세요^^');
    }
  };

  return (
    <div className="cartModal">
      <div className="top">
        <div className="productName">{name}</div>
        <div className="productCartDetail">
          <div className="price">{Number(price).toLocaleString()}원</div>
          <div className="quantityContainer">
            <button className="down" onClick={removeQuantity}>
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="up" onClick={addQuantity}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="totalContainer">
          <h3 className="totalText">합계</h3>
          <h2 className="total">
            {Number(quantity * price).toLocaleString()}
            <span className="unit">원</span>
          </h2>
        </div>
        <div className="btns">
          <button className="cancel btn" onClick={closeModal}>
            취소
          </button>
          <button className="addToCart btn" onClick={addProductToCart}>
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
