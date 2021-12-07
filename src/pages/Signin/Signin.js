import React, { useState, Link } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Signin.scss';

function Signin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();

  const successLoginBtn = () => {
    // 여기에 fetch
    //   fetch('http://10.58.4.106:8000/users/signin', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       username: idValue,
    //       password: pwValue,
    //     }),
    //   })
    //     .then(res => res.json())
    //     .then(result => {
    //       if (result.ACCESS_TOKEN === 'access_token') {
    //         // 로그인 성공1
    //         alert(`${result.username}님 환영합니다!`);
    //         navigate('/brokurly/products');
    //       }
    //     });
  };

  const inputIdValue = function (e) {
    setIdValue(e.target.value);
  };

  // 대, 소문자, 숫자, 6자리 이상 16자리 이하
  const isIdValid = /^[a-zA-Z0-9]{6,16}$/.test(idValue);

  const inputPwValue = e => setPwValue(e.target.value);
  // 대,소문자, 숫자 -를 제외한 특수문자, 8자리 이상
  const isPwValid = /^[a-zA-Z0-9!@#$%^&*+=_]{8,}$/.test(pwValue);

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
                <Link to="/signup">아이디 찾기</Link>
                <span className="serchSectionBar">|</span>
                <Link to="/signup">비밀번호 찾기</Link>
              </div>
            </div>

            <button
              className="loginBtn"
              onClick={successLoginBtn}
              type="button"
            >
              로그인
            </button>

            <Link to="/signup">
              <button className="joinBtn" type="button">
                회원가입
              </button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
