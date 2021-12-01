import React from 'react';
import Product from './Product/Product';
import './Products.scss';

function Products({ products }) {
  return (
    <div className="products">
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}

export default Products;
