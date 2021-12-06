import React from 'react';
import OrderDetail from './OrderDetail/OrderDetail';
import './Order.scss';

function Order() {
  return (
    <div className="orderWrapper">
      <div className="orderInner">
        <h2 className="orderPageTitle">주문 내역</h2>
        <div className="orders">
          {ORDER &&
            ORDER.map(order => <OrderDetail order={order} key={order.id} />)}
        </div>
      </div>
    </div>
  );
}

export default Order;

const ORDER = [
  {
    id: 1,
    order_number: 123456,
    order_status: '배송 완료',
    products: [
      {
        id: 1,
        name: '데굴데굴 브로컬리',
        image: 'cut_broccoli.jpg',
        price: 1000,
        quantity: 5,
      },
      {
        id: 2,
        name: '간편한 선식',
        image: 'thisyear_broccoli.jpg',
        price: 5000,
        quantity: 2,
      },
      {
        id: 3,
        name: '콜리플라워',
        image: 'cut_broccoli.jpg',
        price: 5000,
        quantity: 2,
      },
    ],
  },
  {
    id: 2,
    order_number: 2123456,
    order_status: '배송 완료',
    products: [
      {
        id: 1,
        name: '초록 브로컬리',
        image: 'oil_broccoli.jpg',
        price: 3000,
        quantity: 5,
      },
      {
        id: 2,
        name: '신선한 우유',
        image: 'whole_cauliflower.jpg',
        price: 15000,
        quantity: 2,
      },
      {
        id: 3,
        name: '플라워 콜리플라워',
        image: 'oil_broccoli.jpg',
        price: 25000,
        quantity: 2,
      },
    ],
  },
];
