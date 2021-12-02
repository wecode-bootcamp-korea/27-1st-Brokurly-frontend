import React from 'react';
import './Signin.scss';

function Signin() {
  return (
    <div className="login">
      <div className="loginSection">
        <div className="loginText">로그인</div>
        <div className="loginJoinSection">
          <form className="loginForm">
            <div className="loginIdForm">
              <input
                className="loginId"
                type="text"
                placeholder="아이디를 입력해주세요"
              />
            </div>

            <div className="loginPwForm">
              <input
                className="loginPw"
                type="text"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>

            <div className="checkboxBar">
              <div className="CheckboxSection">
                <input
                  className="securityCheckbox"
                  id="checkboxLabel"
                  type="checkbox"
                />
                <label for="checkboxLabel">
                  <span className="securityText">보안접속</span>
                </label>
              </div>
              <div className="searchSection">
                <a className="forgotId" href="https://www.kurly.com/">
                  아이디 찾기
                </a>
                <span className="serchSectionBar">|</span>
                <a className="forgotPw" href="https://www.kurly.com/">
                  비밀번호 찾기
                </a>
              </div>
            </div>
            <button className="loginBtn" type="button">
              로그인
            </button>
            <a className="joinLink" href="http://localhost:3000/signup">
              <button className="joinBtn" type="button">
                회원가입
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
