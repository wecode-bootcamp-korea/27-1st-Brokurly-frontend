import React from 'react';
import Product from './Product/Product';
import './OrderDetail.scss';

function OrderDetail({ order }) {
  const { id, order_number, order_status, products } = order;

  const cancelOrder = id => {
    alert('주문이 취소되었습니다.');
  };

  return (
    <div className="orderDetail">
      <div className="orderHeader">
        <span className="orderNumber">주문번호 {order_number}</span>
        <span className="orderStatus">{order_status}</span>
      </div>
      <div className="orderDetailContent">
        <ul className="orderProducts">
          {products &&
            products.map(product => (
              <Product product={product} key={product.id} />
            ))}
        </ul>
        <button className="deleteOrder" onClick={() => cancelOrder(id)}>
          주문 취소
        </button>
      </div>
    </div>
  );
}

export default OrderDetail;
