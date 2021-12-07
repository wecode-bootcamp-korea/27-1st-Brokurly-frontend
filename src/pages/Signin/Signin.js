import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Signin.scss';

function Signin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();

  const successLoginBtn = () => {
    fetch('http://10.58.3.112:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.ACCESS_TOKEN === 'access_token') {
          // 로그인 성공
          sessionStorage.setItem('token', result.ACCESS_TOKEN);
          sessionStorage.setItem('username', result.username);
          alert(`${result.username}님 환영합니다!`);
          navigate('/brokurly/products');
        } else {
          alert('아이디 또는 비밀번호 오류입니다');
        }
      });
  };

  // 로그인 버튼 활성화

  const inputIdValue = function (e) {
    setIdValue(e.target.value);
  };
  const isIdValid = /^[a-zA-Z0-9]{6,16}$/.test(idValue);
  // 대, 소문자, 숫자, 6자리 이상 16자리 이하

  const inputPwValue = e => setPwValue(e.target.value);
  const isPwValid = /^[a-zA-Z0-9!@#$%^&*+=_]{8,}$/.test(pwValue);
  // 대,소문자, 숫자 -를 제외한 특수문자, 8자리 이상

  // 밑에 activeLoginBtn는 추가적으로 구현할지 말지 고민중
  // const activeLoginBtn = isIdValid && isPwValid;

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
            <button
              className="loginBtn"
              // className={activeLoginBtn ? 'loginBtn' : 'loginBtn disabled'}
              onClick={successLoginBtn}
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
      <Footer />
    </div>
  );
}

export default Signin;
