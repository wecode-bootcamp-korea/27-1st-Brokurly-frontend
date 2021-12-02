import React, { useState } from 'react';
import DetailTable from './DetailTable';
import './ArticleRight.scss';

function ArticleRight() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };
  const decreaseCount = () => {
    setCount(count + 1);
  };
  return (
    <article className="articleRight">
      <div className="productTitleWrap">
        <h1>새빨간 오렌지</h1>
        <p>새빨간 거짓말 같은 오렌지다</p>
      </div>
      <div className="productPriceWrap">
        <h2>ddd</h2>
      </div>
      <div className="productInformation">
        <dl>
          <dt className="productTitle">판매단위</dt>
          <dd className="listValue">1</dd>

          <dt className="productTitle">중량/용량</dt>
          <dd className="listValue">100g</dd>

          <dt className="productTitle">배송구분</dt>
          <dd className="listValue">샛별배송</dd>

          <dt className="productTitle">원산지</dt>
          <dd className="listValue">국산</dd>

          <dt className="productTitle">포장타입</dt>
          <dd className="listValue">냉장</dd>

          <button onClick={increaseCount}>-</button>
          <span>{count}</span>
          <button onClick={decreaseCount}>+</button>
        </dl>
      </div>
      <button className="detailPurchase">구매하기</button>
    </article>
  );
}

export default ArticleRight;
