import React, { useEffect, useState } from 'react';
import OrderDetail from './OrderDetail/OrderDetail';
import './Order.scss';
import API from '../../config';

function Order() {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // fetch('/data/orderData.json')
    fetch(API.orders)
      .then(res => res.json())
      .then(res => setOrders(res.result))
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e);
      })
      .finally(setLoaded(true));
  }, []);

  const changeOrderState = order_id => {
    setOrders(
      orders.map(order =>
        order.order_id === order_id
          ? { ...order, order_status: '주문취소' }
          : order
      )
    );
  };

  return (
    <div className="orderWrapper">
      <div className="orderInner">
        <h2 className="orderPageTitle">주문 내역</h2>
        <div className="orders">
          {!loaded && <h2 className="loading">로딩중...</h2>}

          {loaded && !orders.length ? (
            <h2 className="loading">주문 내역이 없습니다</h2>
          ) : (
            orders.map(order => (
              <OrderDetail
                order={order}
                key={order.id}
                changeOrderState={changeOrderState}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
