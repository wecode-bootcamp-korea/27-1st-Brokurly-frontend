import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import API from '../../../config';
import './ProductInformation.scss';

function ProductInformation({
  name,
  price,
  introduction,
  unit,
  weight,
  shipping,
  packages,
  origin,
  productId,
}) {
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const increaseCount = () => setCount(prevCount => prevCount + 1);
  const decreaseCount = () => setCount(prevCount => prevCount - 1);
  const handleValue = e =>
    isNaN(e.target.value)
      ? alert('숫자를 입력해 주세요^^')
      : setCount(Number(e.target.value));

  const totalPrice = count * price;

  const isToken = sessionStorage.getItem('token');

  const goToCart = () => {
    if (!!isToken) {
      fetch(API.product, {
        method: 'POST',
        headers: {
          token: '토큰',
        },
        body: JSON.stringify({
          product_id: { productId },
          quantity: count,
        }),
      })
        .then(response => response.json())
        .then(result => (result.SUCCESS ? navigate('/cart') : null));
    } else {
      alert('로그인해주세요^^');
    }
  };

  return (
    <article className="productInformation">
      <h1 className="productName">{name}</h1>
      <p className="productExplain">{introduction}</p>
      <div className="productPriceWrap">
        <h2 className="productPrice">
          {Number(price).toLocaleString()}
          <span className="priceUnit">원</span>
        </h2>
      </div>
      <div>
        <dl className="productWrap">
          <dt className="listTitle">판매단위</dt>
          <dd className="listValue">{unit}</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">중량/용량</dt>
          <dd className="listValue">{weight}</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">배송구분</dt>
          <dd className="listValue">{shipping}</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">원산지</dt>
          <dd className="listValue">{origin}</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">포장타입</dt>
          <dd className="listValue">{packages}</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">구매수량</dt>
          <dd className="buttonBox">
            <button
              className="purchaseButton"
              onClick={decreaseCount}
              disabled={count < 2}
            >
              -
            </button>
            <input
              className="productQuantity"
              type="text"
              onChange={handleValue}
              value={count}
            />
            <button className="purchaseButton" onClick={increaseCount}>
              +
            </button>
          </dd>
        </dl>
      </div>
      <div className="totalPriceBox">
        <span className="totalPriceTitle">총 상품금액 : </span>
        <span className="totalPriceNumber">{totalPrice.toLocaleString()}</span>
        <span className="totalPriceUnit">원</span>
      </div>
      <button
        className="detailPurchase"
        onClick={count > 0 ? goToCart : setCount(1)}
      >
        구매하기
      </button>
    </article>
  );
}

export default ProductInformation;
