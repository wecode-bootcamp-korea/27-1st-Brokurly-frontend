import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../../config';
import './Signin.scss';

function Signin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();

  const successLoginBtn = () => {
    fetch(API.signin, {
      method: 'POST',
      body: JSON.stringify({
        username: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.ACCESS_TOKEN) {
          sessionStorage.setItem('token', result.ACCESS_TOKEN);
          sessionStorage.setItem('username', idValue);
          navigate('/');
        } else if (result.message === 'INVALID_PASSWORD') {
          alert('비밀번호를 다시 입력해 주세요');
        } else if (result.message === 'USER_DOES_NOT_EXIST') {
          alert('존재하지 않는 아이디입니다');
        } else {
          alert('아이디 또는 비밀번호 오류입니다');
        }
      });
  };

  const inputIdValue = function (e) {
    setIdValue(e.target.value);
  };

  const inputPwValue = e => setPwValue(e.target.value);

  const pressEnter = e => {
    if (e.key === 'Enter') {
      return successLoginBtn();
    }
  };

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
                onKeyPress={pressEnter}
                autoComplete="username"
                type="text"
                placeholder="아이디를 입력해주세요"
              />
            </div>
            <div className="loginPwForm">
              <input
                className="loginPw"
                onChange={inputPwValue}
                onKeyPress={pressEnter}
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
                <label htmlFor="checkboxLabel">
                  <span className="securityText">보안접속</span>
                </label>
              </div>
              <div className="searchSection">
                <Link to="/">아이디 찾기</Link>
                <span className="serchSectionBar">|</span>
                <Link to="/">비밀번호 찾기</Link>
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
    </div>
  );
}

export default Signin;
