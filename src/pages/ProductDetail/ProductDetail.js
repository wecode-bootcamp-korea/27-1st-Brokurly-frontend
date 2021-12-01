import React from 'react';
import './ProductDetail.scss';
import ArticleLeft from './ArticleLeft/ArticleLeft';
import ArticleRight from './ArticleRight/ArticleRight';

function ProductDetail() {
  return (
    <div className="productDetail">
      <ArticleLeft />
      <ArticleRight />
    </div>
  );
}

export default ProductDetail;
