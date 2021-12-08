import React, { useEffect, useState } from 'react';
import OrderDetail from './OrderDetail/OrderDetail';
import './Order.scss';

function Order() {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // fetch('http://10.58.0.187:8000/orders')
    fetch('/data/orderData.json')
      .then(res => res.json())
      .then(res => setOrders(res))
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e);
      })
      .finally(setLoaded(true));
  }, []);

  return (
    <div className="orderWrapper">
      <div className="orderInner">
        <h2 className="orderPageTitle">주문 내역</h2>
        <div className="orders">
          {!loaded && <h2 className="loading">로딩중...</h2>}

          {loaded && !orders.length ? (
            <h2 className="loading">주문 내역이 없습니다</h2>
          ) : (
            orders.map(order => <OrderDetail order={order} key={order.id} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
