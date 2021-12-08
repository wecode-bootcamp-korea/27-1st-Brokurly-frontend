import React from 'react';
import Product from './Product/Product';
import './OrderDetail.scss';
import API from '../../../config';

function OrderDetail({ order }) {
  const { order_id, order_number, order_status, products } = order;

  const cancelOrder = order_id => {
    fetch(API.orders, {
      method: 'PATCH',
      body: JSON.stringify({
        order_id: order_id,
      }),
    }).then(res => res.json());

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
