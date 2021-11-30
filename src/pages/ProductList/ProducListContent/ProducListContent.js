import React from 'react';
import ContentHeader from './ContentHeader/ContentHeader';
import Products from './Products/Products';
import './ProducListContent';

function ProducListContent({ products, setCurCategoty, curCategoty }) {
  return (
    <div className="productListContent">
      <ContentHeader
        setCurCategoty={setCurCategoty}
        curCategoty={curCategoty}
      />
      <Products products={products} />
    </div>
  );
}

export default ProducListContent;
