import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Signin.scss';

function Signin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();
  const goToMain = () => {
    activeLoginBtn ? navigate('/') : alert('아이디 또는 비밀번호 오류입니다');
  };

  /*
    // fetch(임시)
    fetch('API주소', {
      method: 'post',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if ('access_token' in result) {
          navigate('/');
        } else {
          alert('다시 시도하시오');
        }
      });
  };
  */

  /*
  // idValue, pwValue관련 정규식 (임시)
  const putInId = /^[a-z|A-Z|0-9]+$/;
  const putInPw = /^[a-z|A-Z|0-9|~!@#$%^&*()_+|<>?:{}]+$/;
  */

  // 로그인 버튼 활성화 (임시)
  const activeLoginBtn =
    idValue.length > 6 &&
    idValue.includes('@') &&
    pwValue.length > 10 &&
    pwValue.includes('@');

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
              className="loginBtn"
              // className={activeLoginBtn ? 'loginBtn' : 'loginBtn disabled'}
              onClick={goToMain}
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
