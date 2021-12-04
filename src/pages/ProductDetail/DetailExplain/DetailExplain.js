import React from 'react';
import './DetailExplain.scss';

function DetailExplain() {
  return (
    <section className="bottomExplain">
      <nav className="explainNav">
        <ul className="explainList">
          <li className="explainButton">상세정보</li>
          <li className="productReview">제품후기</li>
        </ul>
      </nav>
      <div className="explainForUser">
        <img
          src="http://localhost:3000/images/dummy_detail_img.jpg"
          alt="상세"
        />
        <p>오렌지가 새빨간 거짓말을 하고 있다.</p>
      </div>
    </section>
  );
}

export default DetailExplain;
