import React from 'react';
import Product from './Product/Product';
import './Products.scss';

function Products({ products, putInfoIntoModal }) {
  return (
    <div className="products">
      {products.map((product, i) => (
        <Product
          product={product}
          putInfoIntoModal={putInfoIntoModal}
          key={i}
        />
      ))}
    </div>
  );
}

export default Products;
