import React from 'react';
import './Footer.scss';
function Footer() {
  return (
    <div className="footer">
      <div className="footerSection">
        <div className="footerLeftSection">
          <div className="CustomerHappinessCenter">고객행복센터</div>
          <div className="num1">
            <div className="box1-1">1644-1234</div>
            <div className="box">
              <div className="gogaeksencer">365고객센터</div>
              <div className="time">오전 7시 - 오후 7시</div>
            </div>
          </div>

          <div className="num1">
            <div className="box1-2">카카오톡 문의</div>
            <div className="box">
              <div className="gogaeksencer">365고객센터</div>
              <div className="time">오전 7시 - 오후 7시</div>
            </div>
          </div>
        </div>

        <div className="footerRightSection">
          <div className="introduce">
            <div className="intro-1">컬리소개</div>
            <div className="intro-2">소개영상</div>
            <div className="intro-3">인재채용</div>
            <div className="intro-4">이용약관</div>
          </div>
          <div className="text">
            <p>
              법인명 (상호): 주식회사 브로컬리 | 사업자 등록번호: 000-00-00000
            </p>
            주소: 서울특별시 강남구 테헤란로 | 제휴문의:
            <span className="business">business@brokurly.com</span>
          </div>
          <div className="corpText">BROKURLY CORP.ALL RIGHT RESERVED</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
