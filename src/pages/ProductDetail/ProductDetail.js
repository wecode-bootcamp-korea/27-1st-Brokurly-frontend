import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import ProductInformation from './ProductInformation/ProductInformation';
import DetailExplain from './DetailExplain/DetailExplain';
import './ProductDetail.scss';

function ProductDetail() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/productDetail.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data[0]);
      });
  }, []);

  return (
    <div className="productDetail">
      <main className="mainDetailPage">
        <section className="articleContainer">
          <ProductThumbnail id={productData.id} images={productData.images} />
          <ProductInformation
            name={productData.name}
            price={productData.price}
            introduction={productData.introduction}
            unit={productData.unit}
            weight={productData.weight}
            shipping={productData.shipping}
            packages={productData.package}
            origin={productData.origin}
          />
        </section>
        <DetailExplain
          images={productData.images}
          description={productData.description}
        />
      </main>
    </div>
  );
}

export default ProductDetail;
