import React from 'react';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProducListContent from './ProducListContent/ProducListContent';
import './ProductList.scss';

function ProductList() {
  const PRODUCT_MENU = {
    menuName: '채소',
    categories: ['브로컬리', '쌈채소', '간편채소'],
  };
  return (
    <section className="productList">
      <div className="productListContent">
        <ProductListHeader productMenu={PRODUCT_MENU} />
        <ProducListContent />
      </div>
    </section>
  );
}

export default ProductList;
