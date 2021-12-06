import React, { useEffect, useState } from 'react';
import OrderDetail from './OrderDetail/OrderDetail';
import './Order.scss';

function Order() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    // 백통신 url
    // Mock Data url
    // setOrders(res.result);
    // fetch('/data/orderData.json')
    fetch('http://10.58.0.187:8000/orders')
      .then(res => res.json())
      .then(res => setOrders(res.result));
    // .then(res => setOrders(res.result));
  }, []);

  return (
    <div className="orderWrapper">
      <div className="orderInner">
        <h2 className="orderPageTitle">주문 내역</h2>
        <div className="orders">
          {orders &&
            orders.map(order => <OrderDetail order={order} key={order.id} />)}
        </div>
      </div>
    </div>
  );
}

export default Order;
