import React from 'react';
import './ArticleLeft.scss';

function ArticleLeft({ productData }) {
  console.log(productData);
  console.log(productData.image_url);
  return (
    <article className="articleLeft">
      <img className="detailImage" src={productData.image_url} alt="상품" />
    </article>
  );
}

export default ArticleLeft;
