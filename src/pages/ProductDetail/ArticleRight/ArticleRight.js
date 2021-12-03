import React, { useState } from 'react';
import DetailTable from './DetailTable';
import './ArticleRight.scss';

function ArticleRight(props) {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => (count > 0 ? setCount(count - 1) : setCount(0));

  return (
    <article className="articleRight">
      <div className="productTitleWrap">
        <h1 className="productName">새빨간 오렌지</h1>
        <p className="productExplain">새빨간 거짓말 같은 오렌지다</p>
      </div>
      <div className="productPriceWrap">
        <h2 className="productPrice">
          {}
          <span className="priceUnit">원</span>
        </h2>
      </div>
      <div className="productContainer">
        {}
        <dl className="productWrap">
          <dt className="listTitle">판매단위</dt>
          <dd className="listValue">1</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">중량/용량</dt>
          <dd className="listValue">100g</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">배송구분</dt>
          <dd className="listValue">샛별배송</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">원산지</dt>
          <dd className="listValue">국산</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">포장타입</dt>
          <dd className="listValue">냉장</dd>
        </dl>
        <dl className="productWrap">
          <dt className="listTitle">구매수량</dt>
          <dd className="buttonBox">
            <button className="purchaseButton" onClick={decreaseCount}>
              -
            </button>
            <span>{count}</span>
            <button className="purchaseButton" onClick={increaseCount}>
              +
            </button>
          </dd>
        </dl>
      </div>
      <div className="totalPriceBox">
        <span className="totalPriceTitle">총 상품금액 : </span>
        <span className="totalPrice">30000</span>
        <span className="totalPriceUnit">원</span>
      </div>
      <button className="detailPurchase">구매하기</button>
    </article>
  );
}

export default ArticleRight;
