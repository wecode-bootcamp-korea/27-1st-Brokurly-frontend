import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Signin.scss';

function Signin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();
  const successLogin = () => {
    //activeLoginBtn ? navigate('/') : alert('아이디 또는 비밀번호 오류입니다');
    // 여기에 fetch
    fetch('API주소/', {
      method: 'POST',
      body: JSON.stringify({
        username: idValue, //왼쪽이 백앤드와 공통 키값
        password: pwValue, //왼쪽이 백앤드와 공통 키값
      }),
    })
      .then(res => res.json())
      .then(result => {
        const loginMessages = {
          // const 이름도 백엔드로부터 받아야하는지?
          // 로그인성공(공통키값?): `${res.username}님 환영합니다!`,
          // 아이디실패(공통키값?): `아이디를 다시 입력해주세요.`,
          // 패스워드실패(공통키값?): `비밀번호를 다시 입력해주세요.`,
        };
        alert(loginMessages[result.message]);

        if (result.Token) {
          // 저장소 위치(임시)-로컬, 세션인지 아직 미정.. result인지 res인지..
          localStorage.setItem('token', result.Token);
          navigate('/');
        }
      });
  };

  /*
  // fetch (임시) 1
  fetch('https://api.google.com/user/3')
  .then(res => res.json())
  .then(res => {
    if (res.success) {
        console.log(`${res.user.name}` 님 환영합니다);
    }
  });

  // fetch (임시) 2
  handleLogin = () => {
    fetch(LOGIN_API, {
      method: "POST",
      body: JSON.stringify({
        account_name: this.state.id,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        const messages = {
          LOGIN_SUCCESS: `로그인을 성공했습니다. ${this.state.id}님 반갑습니다!`,
          INVALID_USER: "잘못된 회원정보입니다. 아이디를 다시 입력해주세요.",
          INVALID_PASSWORD:
            "잘못된 회원정보입니다. 비밀번호를 다시 입력해주세요.",
        };
        alert(messages[res.message]);

        if (res.Token) {
          localStorage.setItem("token", res.Token);
          this.props.history.push("/");
        }
      });
  };

    // fetch (임시) 3
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

  // 로그인 버튼 활성화
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
              onClick={successLogin}
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
