import React from 'react';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProducListContent from './ProducListContent/ProducListContent';
import './ProductList.scss';

function ProductList() {
  return (
    <section className="productList">
      <ProductListHeader />
      <ProducListContent />
    </section>
  );
}

export default ProductList;
