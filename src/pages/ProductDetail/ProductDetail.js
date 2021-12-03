import React, { useState, useEffect } from 'react';
import ArticleLeft from './ArticleLeft/ArticleLeft';
import ArticleRight from './ArticleRight/ArticleRight';
import DetailExplain from './DetailExplain/DetailExplain';
import './ProductDetail.scss';

function ProductDetail() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/productDetail.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data[0]);
      });
  }, []);

  return (
    <div className="productDetail">
      <section className="articleContainer">
        <ArticleLeft productData={productData} />
        <ArticleRight price={productData.product_price} />
      </section>
      <DetailExplain />
    </div>
  );
}

export default ProductDetail;
