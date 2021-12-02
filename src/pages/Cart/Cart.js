import React, { useEffect, useState } from 'react';
import './Cart.scss';
import CartList from './CartList/CartList';
import CartSummary from './CartSummary/CartSummary';

function Cart() {
  const [coldItems, setColdItems] = useState([]);
  const [boxItems, setBoxItems] = useState([]);

  useEffect(() => {
    let coldArray = [];
    let boxArray = [];
    Items.forEach(item => {
      if (item.package === 'cold') {
        coldArray.push(item);
      } else {
        boxArray.push(item);
      }
    });
    setColdItems(coldArray);
    setBoxItems(boxArray);
  }, []);

  return (
    <section className="cart">
      <h2>장바구니</h2>
      <main>
        <div className="cartList">
          <CartList items={coldItems} title="냉장 상품" />
          {/* <CartSummary /> */}
        </div>
      </main>
    </section>
  );
}

export default Cart;

const Items = [
  {
    id: 1,
    name: '전체',
    image: 'whole_broccoli.jpg',
    price: '6000',
    introduction: '너무 맛있는 브로콜리',
    quantity: '10',
    package: 'cold',
  },
  {
    id: 2,
    name: '손질된 브로콜리',
    image: 'cut_broccoli.jpg',
    price: '7500',
    introduction: '편리한 브로콜리',
    quantity: '1',
    package: 'box',
  },
  {
    id: 3,
    name: '햇 브로컬리',
    image: 'thisyear_broccoli.jpg',
    price: '6500',
    introduction: '갓 수확된 브로컬리',
    quantity: '5',
    package: 'box',
    img: '',
  },
  {
    id: 4,
    name: '오일 브로컬리',
    image: 'oil_broccoli.jpg',
    price: '11000',
    introduction: '오일에 버무려진 브로컬리',
    quantity: '2',
    package: 'cold',
  },
  {
    id: 5,
    name: '컬리플라워',
    image: 'whole_cauliflower.jpg',
    price: '8000',
    introduction: '건강식 컬리플라워',
    quantity: '20',
    package: 'cold',
  },
  {
    id: 6,
    name: '요리된 컬리플라워',
    image: 'cooked_cauliflower.jpg',
    price: '10000',
    introduction: '먹기만 하면 되는 컬리플라워',
    quantity: '8',
    package: 'box',
  },
];
