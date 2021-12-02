import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.scss';

function Signin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  //로그인 버튼 활성화 (임시)
  const activeLoginBtn = (idValue.length > 6 && idValue.includes(putInId)) && (pwValue.length > 10 && pwValue.includes(putInPw));

  //idValue, pwValue관련 정규식 (임시)
  const putInId = /^[a-z|A-Z|0-9]+$/;
  const putInPw = /^[a-z|A-Z|0-9|~!@#$%^&*()_+|<>?:{}]+$/;

  const inputIdValue = function (e) {
    setIdValue(e.target.value);
  };
  const inputPwValue = e => setPwValue(e.target.value);

  return (
    <div className="login">
      <div className="loginSection">
        <div className="loginText">로그인</div>
        <div className="loginJoinSection">
          <form className="loginForm">
            <div className="loginIdForm">
              <input
                className="loginId"
                onChange={inputIdValue}
                type="text"
                placeholder="아이디를 입력해주세요"
              />
            </div>

            <div className="loginPwForm">
              <input
                className="loginPw"
                onChange={inputPwValue}
                type="password"
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
            {/*  임시!!! */}
            <button
              className={
                !activeLoginBtn ? 'http://localhost:3000/' : {alert('경고')}
              }
              type="button"
            >
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
