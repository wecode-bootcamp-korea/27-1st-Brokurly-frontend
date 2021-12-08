import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import ProductInformation from './ProductInformation/ProductInformation';
import DetailExplain from './DetailExplain/DetailExplain';
import './ProductDetail.scss';

function ProductDetail() {
  const [productData, setProductData] = useState([]);
  //통신할 때의 코드
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://10.58.0.187:8000/products/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setProductData(data.result);
  //     });
  // });
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
            packages={productData.itemPackage}
            origin={productData.origin}
          />
        </section>
        <DetailExplain
          images={productData.images}
          description={productData.description}
          productId={productData.id}
        />
      </main>
    </div>
  );
}

export default ProductDetail;
