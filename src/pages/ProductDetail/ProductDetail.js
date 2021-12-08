import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailExplain from './DetailExplain/DetailExplain';
import ProductInformation from './ProductInformation/ProductInformation';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import API from '../../config';
import './ProductDetail.scss';

function ProductDetail() {
  const [productData, setProductData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.product}/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.result) {
          setProductData(data.result);
        } else {
          alert(
            '예상치 못한 에러가 발생하였습니다. 처음부터 다시 시작해 주세요.'
          );
          navigate('/');
        }
      });
  }, [id, navigate]);

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
            productId={productData.id}
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
