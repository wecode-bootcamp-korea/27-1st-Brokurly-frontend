import React, { useEffect, useState } from 'react';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProducListContent from './ProducListContent/ProducListContent';
import './ProductList.scss';
import CartModal from './CartModal/CartModal';
import Modal from '../../components/Modal/Modal';
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentSort, setCurrentSort] = useState(0);
  const [productMenu, setProductMenu] = useState(null);
  const [products, setProducts] = useState(null);
  const [cartInfo, setCartInfo] = useState({});
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const menu = searchParams.get('menu') || 'vegetables';
    setProductMenu(PRODUCT_MENU[menu]);
  }, [searchParams]);

  useEffect(() => {
    // TODO 백엔드 완료되면 아래 URL 사용예정
    const menu = searchParams.get('menu') || 'vegetables';
    // const category = searchParams.get('category') || 'all';
    // const sort = searchParams.get('sort') || 'date';
    // fetch(
    //   `http://10.58.3.112:8000/products?menu=${menu}&category=${category}&sort=${sort}`
    // )
    // MockData용
    // fetch(
    //   `/data/productListData00.json`
    // )
    // 백엔드 테스트용
    // fetch(`http://10.58.3.112:8000/products?&category=쌈채소`)
    fetch(`http://10.58.3.112:8000/products?&category=간편채소`)
      .then(res => res.json())
      .then(res => {
        setProducts(res.result);
      });
  }, [searchParams]);

  const putInfoIntoModal = product => {
    setCartInfo(product);
    setIsCartModalOpen(true);
  };

  const closeModal = () => {
    setCartInfo({});
    setIsCartModalOpen(false);
  };

  const changeCategoty = (id, categoryName) => {
    let newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('category', categoryName);
    setSearchParams(newSearchParams);
    setCurrentCategory(id);
  };

  const changeSort = (id, sortName) => {
    let newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('category', sortName);
    setSearchParams(newSearchParams);
    setCurrentSort(id);
  };

  return (
    <section className="productList">
      <div className="productListContent">
        {productMenu && (
          <ProductListHeader
            productMenu={productMenu}
            currentCategory={currentCategory}
            changeCategoty={changeCategoty}
          />
        )}
        {!!products && (
          <ProducListContent
            products={products}
            changeSort={changeSort}
            currentSort={currentSort}
            putInfoIntoModal={putInfoIntoModal}
          />
        )}
      </div>
      {isCartModalOpen && (
        <Modal closeModal={closeModal}>
          <CartModal closeModal={closeModal} product={cartInfo} />
        </Modal>
      )}
    </section>
  );
}

export default ProductList;

const PRODUCT_MENU = {
  vegetables: {
    id: 0,
    menuName: '채소',
    categories: ['전체보기', '브로컬리', '쌈채소', '간편채소'],
    categoryName: [
      'all',
      'broccolis',
      'wrap_vegetables',
      'convenient_vegetables',
    ],
  },
  salads: {
    id: 1,
    menuName: '샐러드',
    categories: ['전체보기', '닭가슴살', '오늘의 샐러드', '야채 샐러드'],
    categoryName: [
      'all',
      'chicken_breasts',
      'today_salads',
      'vegetables_salads',
    ],
  },
  fruits: {
    id: 2,
    menuName: '과일',
    categories: ['전체보기', '제철과일', '국산과일', '수입과일'],
    categoryName: ['all', 'seasonal_fruits', 'local_fruits', 'foreign_fruits'],
  },
  meals: {
    id: 3,
    menuName: '간편식',
    categories: ['전체보기', '선식', '샌드위치', '시리얼'],
    categoryName: ['all', 'sunsiks', 'sandwiches', 'cereals'],
  },
};
