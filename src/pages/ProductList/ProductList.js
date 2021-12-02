import React, { useEffect, useState } from 'react';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProducListContent from './ProducListContent/ProducListContent';
import './ProductList.scss';
import CartModal from './CartModal/CartModal';

function ProductList() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentSort, setCurrentSort] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartInfo, setCartInfo] = useState({});

  const PRODUCT_MENU = {
    menuName: '채소',
    categories: ['전체보기', '브로컬리', '쌈채소', '간편채소'],
  };

  const isCartModalOpen = !!Object.keys(cartInfo).length;

  useEffect(() => {
    fetch(`data/productListData${currentCategory}${currentSort}.json`)
      .then(res => res.json())
      .then(res => setProducts(res));
  }, [currentCategory, currentSort]);

  const openCartModal = product => {
    setCartInfo(product);
  };

  return (
    <section className="productList">
      <div className="productListContent">
        <ProductListHeader
          productMenu={PRODUCT_MENU}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <ProducListContent
          products={products}
          setCurrentSort={setCurrentSort}
          currentSort={currentSort}
          openCartModal={openCartModal}
        />
      </div>
      {isCartModalOpen && (
        <CartModal setCartInfo={setCartInfo} product={cartInfo} />
      )}
    </section>
  );
}

export default ProductList;
