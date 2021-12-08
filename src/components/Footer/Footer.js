import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
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
          <ul className="introduceBar">
            <li className="introduce">컬리소개</li>
            <li className="introduce">소개영상</li>
            <li className="introduce">인재채용</li>
            <li className="introduce">이용약관</li>
          </ul>
          <address className="introduceText">
            <p className="introduceText">
              법인명 (상호): 주식회사 브로컬리 | 사업자 등록번호: 000-00-00000
            </p>
            주소: 서울특별시 강남구 테헤란로 | 제휴문의:
            <span className="businessText"> business@brokurly.com</span>
          </address>
          <div className="corpText">BROKURLY CORP.ALL RIGHT RESERVED</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
