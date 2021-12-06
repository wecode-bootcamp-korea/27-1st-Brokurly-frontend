import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Signin.scss';

function Signin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();

  const successLoginBtn = () => {
    // console.log(activeLoginBtn);
    /*
    if (activeLoginBtn) {
      alert(`로그인을 환영합니다!`);
      navigate('/brokurly/products');
    } else {
      alert('아이디 또는 비밀번호 오류입니다');
    }
    */
    /*
    activeLoginBtn
     ? navigate('/brokurly/products')
     : alert('아이디 또는 비밀번호 오류입니다');
    */
    // 여기에 fetch

    fetch('http://10.58.1.7:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: idValue, //왼쪽이 백앤드와 공통 키값
        password: pwValue, //왼쪽이 백앤드와 공통 키값
      }),
    })
      .then(res => res.json())
      .then(result => {
        const loginMessages = {
          // const 이름도 백엔드로부터 받아야하는지? -> 키, 밸류를 받아오는 것임
          // 로그인성공(공통키값?): `${res.username}님 환영합니다!`,
          // 아이디실패(공통키값?): `아이디를 다시 입력해주세요.`,
          // 패스워드실패(공통키값?): `비밀번호를 다시 입력해주세요.`,
          // (삭제 예정! 그냥 예시) idIsNotValid: "아이디를 다시 입력해주세요"
          // 로그인 실패1 (ID 오류)
          USER_DOES_NOT_EXIST: `아이디를 다시 입력해주세요.`,
          // 로그인 실패2 (PW 오류)
          INVALID_PASSWORD: `비밀번호를 다시 입력해주세요.`,
        };
        alert(loginMessages[result.message]);

        if (result.Token) {
          // 저장소 위치- 세션. 그리고 result인지 res인지는 보면서..
          sessionStorage.setItem('token', result.Token);
          sessionStorage.setItem('username', result.username);
        }
        if (result.ACCESS_TOKEN === 'access_token') {
          // 로그인 성공1
          alert(`${result.username}님 환영합니다!`);
          navigate('/brokurly/products');
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
