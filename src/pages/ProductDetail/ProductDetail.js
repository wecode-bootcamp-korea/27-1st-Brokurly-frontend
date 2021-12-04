import React, { useState, useEffect } from 'react';
import ProductThumbnail from './ArticleLeft/ProductThumbnail';
import ArticleRight from './ArticleRight/ArticleRight';
import DetailExplain from './DetailExplain/DetailExplain';
import './ProductDetail.scss';

function ProductDetail() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/productDetail.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  return (
    <div className="productDetail">
      <main className="mainDetailPage">
        <section className="articleContainer">
          <ProductThumbnail productData={productData} />
          <ArticleRight price={productData.price} />
        </section>
        <DetailExplain />
      </main>
    </div>
  );
}

export default ProductDetail;
