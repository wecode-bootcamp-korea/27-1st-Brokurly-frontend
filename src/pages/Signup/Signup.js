import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import SignupChild from '../Signup/SignupChild';
import './Signup.scss';

function Signup() {
  const navigate = useNavigate();

  // input 클릭시 텍스트 등장(set, setState) - 시작 --------------------
  const [isInputIdGuide, setIsInputIdGuide] = useState(false);
  const [isInputPwGuide, setIsInputPwGuide] = useState(false);
  const [isCorrectPwGuide, setIsCorrectPwGuide] = useState(false);
  // input 클릭시 텍스트 등장(set, setState) - 끝 --------------------

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputCorrectPw, setInputCorrectPw] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContact, setInputContact] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  // console.log('re-render');
  const successSignBtn = () => {
    // navigate('/');
    //fetch
    fetch('http://10.58.4.106:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: inputId,
        password: inputPw,
        name: inputName,
        email: inputEmail,
        contact: inputContact,
        address: inputAddress,
      }),
    })
      .then(res => res.json())
      .then(res => {
        // const signupMessages = {
        // 회원가입 실패1 (ID 오류)
        // value: `아이디를 확인해 주세요`,
        // 회원가입 실패2 (PW 오류)
        // value: `비밀번호를 확인해 주세요`,
        // 회원가입 실패3 (email 오류)
        // value: `이메일을 확인해 주세요`,
        // };
        // alert(signupMessages[res.message]);

        // response.message "success"
        if (res.message === 'SUCCESS') {
          // 회원가입 성공1
          navigate('/brokurly/products');
          alert('가입을 축하합니다!');
          // alert(res.message);
        } else {
          alert('다시 시도해주세요');
        }
        // if (조건이 맞으면) {
        // navigate('/');
        // }
      });
  };

  const isSuccessIdBtn = () => {
    fetch('http://10.58.4.106:8000/users/username', {
      method: 'POST',
      body: JSON.stringify({
        username: inputId,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'USERNAME_NOT_EXISTS') {
          alert('사용 가능한 아이디입니다');
        }
        if (res.message === 'USERNAME_ALREADY_EXISTS') {
          alert('이미 존재하는 아이디입니다');
          // alert(res.message);
        }
        // else {
        //  alert('다시 시도해주세요');
        // }
      });
  };

  const isSuccessEmailBtn = () => {
    fetch('http://10.58.4.106:8000/users/email', {
      method: 'POST',
      body: JSON.stringify({
        email: inputEmail,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'EMAIL_NOT_EXISTS') {
          alert('사용 가능한 메일입니다');
          //  alert(res.message);
        }
        if (res.message === 'EMAIL_ALREADY_EXISTS') {
          alert('이미 존재하는 메일입니다');
          //  alert(res.message);
        }
        // else {
        //  alert('다시 시도해주세요');
        // }
      });
  };

  // input 클릭시 텍스트 등장(함수) - 시작 --------------------
  const openInputId = () => {
    setIsInputIdGuide(true);
  };
  const openInputPw = () => {
    setIsInputPwGuide(true);
  };
  const openCorrectPw = () => {
    setIsCorrectPwGuide(true);
  };
  // input 클릭시 텍스트 등장(함수) - 끝 --------------------

  // 유효성 검사 - 시작 --------------------

  //
  const inputIdValue = e => {
    setInputId(e.target.value);
  };
  //id정규식: 대, 소문자, 숫자, 6자리 이상 16자리 이하
  const isIdValid = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{6,16}$/.test(inputId);

  function inputPwValue(e) {
    setInputPw(e.target.value);
  }

  // const inputNum = string(inputPw);
  // function numTest() {
  //   [n, n + 1, n + 2];
  // }

  const isPwValid1 = inputPw.length >= 8;
  //pw정규식: 대,소문자, 숫자 -를 제외한 특수문자, 8자리 이상 입력
  const isPwValid2 = /^[a-zA-Z0-9!@#$%^&*+=_]{8,}$/.test(inputPw);
  //pw조건: 동일한 숫자 3개 이상 연속 사용불가
  //const isPwValid3 = numTest();

  const inputCorrectPwValue = e => {
    setInputCorrectPw(e.target.value);
  };

  function isInputCorrectPw() {
    if (inputCorrectPw === inputPw) {
      return true;
    }
  }

  const isCorrectPwValid = isInputCorrectPw();

  const inputNameValue = e => {
    setInputName(e.target.value);
  };

  const inputEmailValue = e => {
    setInputEmail(e.target.value);
  };

  const inputContactValue = e => {
    setInputContact(e.target.value);
  };

  const inputAddressValue = e => {
    setInputAddress(e.target.value);
  };

  // 유효성 검사 - 끝 --------------------

  return (
    <div className="signup">
      <div className="signupWidth">
        <header className="signupHeader">
          <h2 className="signupHeaderName">회원가입</h2>
          {/* props관련
           <SignupChild
            openInputIdChild={setIsInputIdGuide}
            // test={false}
            //color="red"
            //  titleColor={colorsssssss}
            name="홍길동"
          <SignupChild /> */}
        </header>
        <div className="signupBox">
          <form className="signupForm">
            <div className="essentialInput">
              <span className="starMark">*</span>필수입력사항
            </div>
            <div className="signSection">
              <table className="signTable">
                <tr>
                  <th className="tableName">
                    아이디<span className="starMark">*</span>
                  </th>
                  <td>
                    <input
                      className="tableInput"
                      onChange={inputIdValue}
                      onClick={openInputId}
                      type="text"
                      placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    />
                    {isInputIdGuide && (
                      <p className="guideTextBox">
                        <span className="guideText">
                          <div
                            className={!isIdValid ? 'guideText' : 'passSign'}
                          >
                            <span className="dotMark">●</span> 6자 이상의 영문
                            혹은 영문과 숫자를 조합
                          </div>
                        </span>
                        <span className="guideText">
                          <span className="dotMark">●</span> 아이디 중복확인
                        </span>
                      </p>
                    )}
                  </td>
                  <td>
                    <button
                      className="tableBtn"
                      onClick={isSuccessIdBtn}
                      type="button"
                    >
                      중복확인
                    </button>
                    {/* 중복확인 (시작) ---아직 미구현 */}

                    <div className="askCorrectModal">
                      <div className="askCorrectMessage" />
                    </div>

                    {/* 중복확인 (끝) */}
                  </td>
                </tr>
                <tr>
                  <th className="tableName">
                    비밀번호<span className="starMark">*</span>
                  </th>
                  <td colspan="2">
                    <input
                      className="tableInput"
                      onChange={inputPwValue}
                      onClick={openInputPw}
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                    />
                    {isInputPwGuide && (
                      <p className="guideTextBox">
                        <span className="guideText">
                          <div
                            className={!isPwValid1 ? 'guideText' : 'passSign'}
                          >
                            <span className="dotMark">●</span> 8자 이상 입력
                          </div>
                        </span>
                        <span className="guideText">
                          <div
                            className={!isPwValid2 ? 'guideText' : 'passSign'}
                          >
                            <span className="dotMark">●</span>
                            영문/숫자/특수문자(공백 제외)만 허용 (단, -는
                            사용불가)
                          </div>
                        </span>
                        <span className="guideText">
                          <div
                          // className={!isPwValid3 ? 'guideText' : 'passSign'}
                          >
                            <span className="dotMark">●</span> 동일한 숫자 3개
                            이상 연속 사용불가
                          </div>
                        </span>
                      </p>
                    )}
                  </td>
                  <td />
                </tr>
                <tr>
                  <th className="tableName">
                    비밀번호확인<span className="starMark">*</span>
                  </th>
                  <td colspan="2">
                    <input
                      className="tableInput"
                      onChange={inputCorrectPwValue}
                      onClick={openCorrectPw}
                      type="password"
                      a
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                    {isCorrectPwGuide && (
                      <p className="guideTextBox">
                        <span className="guideText">
                          <div
                            className={
                              !isCorrectPwValid ? 'guideText' : 'passSign'
                            }
                          >
                            <span className="dotMark">●</span> 동일한 비밀번호를
                            입력해주세요
                          </div>
                        </span>
                      </p>
                    )}
                  </td>
                  <td />
                </tr>
                <tr>
                  <th className="tableName">
                    이름<span className="starMark">*</span>
                  </th>
                  <td colspan="2">
                    <input
                      className="tableInput username"
                      onChange={inputNameValue}
                      placeholder="이름을 입력해주세요"
                    />
                  </td>
                  <td />
                </tr>
                <tr>
                  <th className="tableName">
                    이메일<span className="starMark">*</span>
                  </th>
                  <td>
                    <input
                      className="tableInput email"
                      onChange={inputEmailValue}
                      placeholder="예: brokurly@brokurly.com"
                    />
                  </td>
                  <td>
                    <button
                      className="tableBtn"
                      onClick={isSuccessEmailBtn}
                      type="button"
                    >
                      중복확인
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="tableName">
                    휴대폰<span className="starMark">*</span>
                  </th>
                  <td>
                    <input
                      className="tableInput contact"
                      onChanage={inputContactValue}
                      type="tel"
                      placeholder="숫자만 입력해주세요"
                    />
                  </td>
                  <td>
                    <button className="tableBtn verifiedCodeBtn" type="button">
                      인증번호 받기
                    </button>
                  </td>
                </tr>
                <tr>
                  <th className="tableName">
                    주소<span className="starMark">*</span>
                  </th>
                  <td colspan="2">
                    <input
                      className="tableInput address"
                      onChange={inputAddressValue}
                      placeholder="주소를 입력해주세요"
                    />
                  </td>
                  <td />
                </tr>
              </table>
            </div>
            <div className="joinSection">
              <button
                className="joinBtn"
                onClick={successSignBtn}
                type="button"
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;
