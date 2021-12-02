import React from 'react';
import './ArticleRight.scss';

function ArticleRight({ price }) {
  return (
    <article className="articleRight">
      <div className="productTitleWrap">
        <h1>새빨간 오렌지</h1>
        <p>새빨간 거짓말 같은 오렌지다</p>
      </div>
      <div className="productPriceWrap">
        <h2>{price}</h2>
      </div>
      <div className="productInformation">
        <ul>
          <li className="productTitle">
            판매단위<span className="listValue">1팩</span>
          </li>
          <li className="productTitle">
            중량<span className="listValue">100g</span>
          </li>
          <li className="productTitle">
            배송구분<span className="listValue">샛별배송</span>
          </li>
          <li className="productTitle">
            원산지<span className="listValue">국내산</span>
          </li>
          <li className="productTitle">
            포장타입<span className="listValue">냉장</span>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ArticleRight;
