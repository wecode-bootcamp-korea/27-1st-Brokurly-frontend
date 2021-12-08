import React from 'react';
import Product from './Product/Product';
import './OrderDetail.scss';

function OrderDetail({ order }) {
  const { order_id, order_number, order_status, products } = order;

  const cancelOrder = order_id => {
    fetch('http://10.58.0.187:8000/orders', {
      method: 'PATCH',
      body: JSON.stringify({
        order_id: order_id,
      }),
    })
      .then(res => res.json())
      .then(res => {
        switch (res.message) {
          case 'INVALID_ORDER_STATUS':
            break;
          case 'INVALID_ORDER_ITEMS_STATUS':
            break;
          case 'KEY_ERROR':
            break;
          default:
            break;
        }
      });
    // SUCCESS 는 없는가?
    alert('주문이 취소되었습니다.');
  };

  return (
    <div className="orderDetail">
      <div className="orderHeader">
        <span className="orderNumber">주문번호 {order_number}</span>
        <span className="orderStatus">{order_status}</span>
      </div>
      <div className="orderDetailContent">
        <div className="orderProducts">
          {products &&
            products.map(product => (
              <Product product={product} key={product.id} />
            ))}
        </div>
        <button
          className={`deleteOrder ${
            order_status === '주문취소' ? 'deleted' : ''
          }`}
          disabled={order_status === '주문취소'}
          onClick={() => cancelOrder(order_id)}
        >
          주문 취소
        </button>
      </div>
    </div>
  );
}

export default OrderDetail;
