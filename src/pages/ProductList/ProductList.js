import React, { useEffect, useRef, useState } from 'react';
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
  const [products, setProducts] = useState([]);
  const [cartInfo, setCartInfo] = useState({});
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loaded, setLoaded] = useState(false);
  const token = useRef('');

  useEffect(() => {
    token.current = sessionStorage.getItem('token');
  });

  useEffect(() => {
    const menu = searchParams.get('menu') || '채소';
    setProductMenu(PRODUCT_MENU[menu]);
  }, [searchParams]);

  useEffect(() => {
    // TODO 백엔드 완료되면 아래 URL 사용예정
    // const menu = searchParams.get('menu') || '채소';
    // const category = searchParams.get('category') || '';
    // const sort = searchParams.get('sort') || 0;
    fetch('http://10.58.10.2:8000/products', {
      headers: {
        token: token.current,
      },
    })
      .then(res => res.json())
      .then(res => {
        setProducts(res);
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e);
      })
      .finally(setLoaded(true));
  }, [searchParams]);

  const putInfoIntoModal = product => {
    setCartInfo(product);
    setIsCartModalOpen(true);
  };

  const closeModal = () => {
    setCartInfo({});
    setIsCartModalOpen(false);
  };

  const changeCategoty = (id, category) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (category === '전체보기') {
      newSearchParams.set('category', '');
    } else {
      newSearchParams.set('category', category);
    }
    setSearchParams(newSearchParams);
    setCurrentCategory(id);
  };

  const changeSort = (id, sortName) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('sort', sortName);
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
        {!loaded && <h2 className="loading">로딩중...</h2>}
        {loaded && !products.length ? (
          <h2 className="loading">상품 없음</h2>
        ) : (
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
  채소: {
    id: 0,
    menuName: '채소',
    categories: ['전체보기', '브로컬리', '쌈채소', '간편채소'],
  },
  샐러드: {
    id: 1,
    menuName: '샐러드',
    categories: ['전체보기', '닭가슴살', '오늘의 샐러드', '야채 샐러드'],
  },
  과일: {
    id: 2,
    menuName: '과일',
    categories: ['전체보기', '제철과일', '국산과일', '수입과일'],
  },
  간편식: {
    id: 3,
    menuName: '간편식',
    categories: ['전체보기', '선식', '샌드위치', '시리얼'],
  },
};
