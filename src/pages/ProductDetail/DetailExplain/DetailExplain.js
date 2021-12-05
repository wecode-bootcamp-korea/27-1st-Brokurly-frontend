import React from 'react';
import './DetailExplain.scss';

function DetailExplain({ images, description }) {
  return (
    <section className="bottomExplain">
      <nav className="explainNav">
        <ul className="explainList">
          <li className="explainButton">상세정보</li>
          <li className="productReview">제품후기</li>
        </ul>
      </nav>
      <div className="explainForUser">
        <img src={images} alt="상세" />
        <p>{description}</p>
      </div>
    </section>
  );
}

export default DetailExplain;
