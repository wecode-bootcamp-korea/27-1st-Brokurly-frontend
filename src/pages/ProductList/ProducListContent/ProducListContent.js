import React from 'react';
import ContentHeader from './ContentHeader/ContentHeader';
import Products from './Products/Products';
import './ProducListContent';

function ProducListContent({
  products,
  setCurrentSort,
  currentSort,
  openCartModal,
}) {
  return (
    <div className="productListContent">
      <ContentHeader
        setCurrentSort={setCurrentSort}
        currentSort={currentSort}
        productTotal={products.length}
      />
      <Products products={products} openCartModal={openCartModal} />
    </div>
  );
}

export default ProducListContent;
