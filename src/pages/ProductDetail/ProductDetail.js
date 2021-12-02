import React, { useState, useEffect } from 'react';
import ArticleLeft from './ArticleLeft/ArticleLeft';
import ArticleRight from './ArticleRight/ArticleRight';
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
      <ArticleLeft productData={productData} />
      <ArticleRight price={productData.product_price} />
    </div>
  );
}

export default ProductDetail;
