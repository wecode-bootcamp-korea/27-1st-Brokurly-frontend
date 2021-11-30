import React from 'react';
import './Products.scss';
import Product from './Product/Product';

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
