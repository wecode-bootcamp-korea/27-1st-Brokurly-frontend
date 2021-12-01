import React from 'react';
import './ArticleRight.scss';

function ArticleRight() {
  return (
    <article className="articleRight">
      <div className="productTitleWrap">
        <h1>새빨간 오렌지</h1>
        <p>새빨간 거짓말 같은 오렌지다</p>
      </div>
      <div className="productPriceWrap">
        <h2>2300</h2>
        <span>원</span>
      </div>
      <div className="productInformation">
        <ul>
          <li>first</li>
        </ul>
      </div>
    </article>
  );
}

export default ArticleRight;
