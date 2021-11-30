import React, { useEffect, useState } from 'react';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProducListContent from './ProducListContent/ProducListContent';
import './ProductList.scss';

function ProductList() {
  const [curCategoty, setCurCategoty] = useState(0);
  const [products, setProducts] = useState([]);

  const PRODUCT_MENU = {
    menuName: '채소',
    categories: ['전체보기', '브로컬리', '쌈채소', '간편채소'],
  };

  useEffect(() => {
    fetch(`data/productListData${curCategoty}.json`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        setProducts(res);
      });
  }, [curCategoty]);

  return (
    <section className="productList">
      <div className="productListContent">
        <ProductListHeader
          productMenu={PRODUCT_MENU}
          setCurCategoty={setCurCategoty}
        />
        <ProducListContent
          products={products}
          curCategoty={curCategoty}
          setCurCategoty={setCurCategoty}
        />
      </div>
    </section>
  );
}

export default ProductList;
