import React from 'react';
import ContentHeader from './ContentHeader/ContentHeader';
import Products from './Products/Products';
import './ProducListContent';

function ProducListContent({ products, setCurrentSort, currentSort }) {
  return (
    <div className="productListContent">
      <ContentHeader
        setCurrentSort={setCurrentSort}
        currentSort={currentSort}
        productTotal={products.length}
      />
      <Products products={products} />
    </div>
  );
}

export default ProducListContent;
