import React from 'react';
import './Signin.scss';

function Signin() {
  return (
    <div className="footer">
      <div className="footerSection">
        <div className="footerLeftSection">
          <div className="CustomerHappinessCenter">고객행복센터</div>
          <div className="CustomerCenterBox">
            <div className="phoneNumber">1644-1234</div>
            <div className="CustomerCenterBoxRight">
              <div className="everydayCenter">365고객센터</div>
              <div className="operatingHours">오전 7시 - 오후 7시</div>
            </div>
          </div>

          <div className="CustomerCenterBox">
            <div className="kakaotalk">
              <span className="kakaotalkText">카카오톡 문의</span>
            </div>
            <div className="CustomerCenterBoxRight">
              <div className="everydayCenter">365고객센터</div>
              <div className="operatingHours">오전 7시 - 오후 7시</div>
            </div>
          </div>
        </div>

        <div className="footerRightSection">
          <div className="introduceBar">
            <div className="introduce1">컬리소개</div>
            <div className="introduce2">소개영상</div>
            <div className="introduce3">인재채용</div>
            <div className="introduce4">이용약관</div>
          </div>
          <div className="introduceText">
            <p className="introduceText">
              법인명 (상호): 주식회사 브로컬리 | 사업자 등록번호: 000-00-00000
            </p>
            주소: 서울특별시 강남구 테헤란로 | 제휴문의:
            <span className="businessText"> business@brokurly.com</span>
          </div>
          <div className="corpText">BROKURLY CORP.ALL RIGHT RESERVED</div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
