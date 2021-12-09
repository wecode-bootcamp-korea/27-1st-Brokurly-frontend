import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../src/config';
import SignupModal from './SignupModal/SignupModal';
import './Signup.scss';

function Signup() {
  const navigate = useNavigate();

  const [isInputIdGuide, setIsInputIdGuide] = useState(false);
  const [isInputPwGuide, setIsInputPwGuide] = useState(false);
  const [isCorrectPwGuide, setIsCorrectPwGuide] = useState(false);

  const [isIdValid2, setIsIdValid2] = useState(false);

  const [msg, setMessage] = useState('');

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputCorrectPw, setInputCorrectPw] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContact, setInputContact] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  const [isPassedId, setIsPassedId] = useState(false);

  const isCorrectPwValid = inputCorrectPw === inputPw;

  const successSignBtn = () => {
    if (!isPassedId) {
      openModal();
      setMessage('중복검사를 완료해주세요');
      return;
    }
    if (!isCorrectPwValid) {
      openModal();
      setMessage('비밀번호가 일치하지 않습니다');
      return;
    }
    fetch(API.signup, {
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
        if (res.message === 'SUCCESS' && isPassedId === true) {
          alert('가입을 환영합니다!');
          navigate('/');
        }

        if (res.message === 'Invalid Username') {
          openModal();
          setMessage('아이디를 다시 입력해주세요');
          return;
        }

        if (res.message === 'Invalid Password') {
          openModal();
          setMessage('비밀번호를 다시 입력해주세요');
          return;
        }

        if (res.message === 'Invalid Email') {
          openModal();
          setMessage('메일을 다시 입력해주세요');
          return;
        } else {
          openModal();
          setMessage('다시 시도해주세요');
          return;
        }
      });
  };

  const isValidIdBtn = () => {
    if (!inputId.length) {
      openModal();
      setMessage('아이디를 입력해주세요');
      return;
    }

    fetch(API.signUsername, {
      method: 'POST',
      body: JSON.stringify({
        username: inputId,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'USERNAME_NOT_EXISTS') {
          setIsIdValid2(true);
          openModal();
          setMessage('사용 가능한 아이디입니다');
          setIsPassedId(true);
          return;
        }
        if (res.message === 'USERNAME_ALREADY_EXISTS') {
          openModal();
          setMessage('이미 존재하는 아이디입니다');
          return;
        }
      });
  };

  const isValidEmailBtn = () => {
    fetch(API.signEmail, {
      method: 'POST',
      body: JSON.stringify({
        email: inputEmail,
      }),
    })
      .then(res => res.json())
      .then(res => {
        openModal();
        setMessage('사용 가능한 메일입니다');
      });
  };

  const [signUpModal, setSignUpModal] = useState(false);
  const openModal = () => {
    setSignUpModal(true);
  };
  const closeModal = e => {
    e.preventDefault();
    setSignUpModal(false);
  };

  const openInputId = () => {
    setIsInputIdGuide(true);
  };
  const openInputPw = () => {
    setIsInputPwGuide(true);
  };
  const openCorrectPw = () => {
    setIsCorrectPwGuide(true);
  };

  const isIdValid1 = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{6,16}$/.test(inputId);

  const inputIdValue = e => {
    setInputId(e.target.value);
    setIsPassedId(false);
    setIsIdValid2(false);
  };

  const isPwValid1 = inputPw.length >= 8;
  const isPwValid2 = /^[a-zA-Z0-9!@#$%^&*+=_]{8,}$/.test(inputPw);
  const isPwValid3Function = () => {
    if (inputPw.length === 0) {
      return false;
    }
    const isPwValid3Regex = /(\w)\1\1/.test(inputPw);
    if (isPwValid3Regex === false) {
      return true;
    }
  };
  const isPwValid3 = isPwValid3Function();

  function inputPwValue(e) {
    setInputPw(e.target.value);
  }

  const inputCorrectPwValue = e => {
    setInputCorrectPw(e.target.value);
  };

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

  return (
    <div className="signup">
      <div className="signupWidth">
        <header className="signupHeader">
          <h2 className="signupHeaderName">회원가입</h2>
          {signUpModal && (
            <SignupModal modalMessage={msg} closeModalBtn={closeModal} />
          )}
        </header>
        <div className="signupBox">
          <form className="signupForm">
            <div className="essentialInput">
              <span className="starMark">*</span>필수입력사항
            </div>
            <div className="signSection">
              <table className="signTable">
                <tbody>
                  <tr className="tableTr">
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
                        <div className="guideTextBox">
                          <span className="guideText">
                            <div
                              className={!isIdValid1 ? 'guideText' : 'passSign'}
                            >
                              <span className="dotMark">·</span> 6자 이상의 영문
                              혹은 영문과 숫자를 조합
                            </div>
                          </span>
                          <span
                            className={
                              isIdValid2 ? 'guideText passSign' : 'guideText'
                            }
                          >
                            <span className="dotMark">·</span> 아이디 중복확인
                          </span>
                        </div>
                      )}
                    </td>
                    <td>
                      <button
                        className="tableBtn"
                        onClick={isValidIdBtn}
                        type="button"
                      >
                        중복확인
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th className="tableName">
                      비밀번호<span className="starMark">*</span>
                    </th>
                    <td colSpan="2">
                      <input
                        className="tableInput"
                        onChange={inputPwValue}
                        onClick={openInputPw}
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                      />
                      {isInputPwGuide && (
                        <div className="guideTextBox">
                          <span className="guideText">
                            <div
                              className={!isPwValid1 ? 'guideText' : 'passSign'}
                            >
                              <span className="dotMark">·</span> 8자 이상 입력
                            </div>
                          </span>
                          <span className="guideText">
                            <div
                              className={!isPwValid2 ? 'guideText' : 'passSign'}
                            >
                              <span className="dotMark">·</span>{' '}
                              영문/숫자/특수문자(-, 공백 제외)만 허용
                            </div>
                          </span>
                          <span className="guideText">
                            <div
                              className={!isPwValid3 ? 'guideText' : 'passSign'}
                            >
                              <span className="dotMark">·</span> 동일한 숫자 및
                              문자 3개 이상 연속 사용불가
                            </div>
                          </span>
                        </div>
                      )}
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <th className="tableName">
                      비밀번호확인<span className="starMark">*</span>
                    </th>
                    <td colSpan="2">
                      <input
                        className="tableInput"
                        onChange={inputCorrectPwValue}
                        onClick={openCorrectPw}
                        type="password"
                        placeholder="비밀번호를 한번 더 입력해주세요"
                      />
                      {isCorrectPwGuide && (
                        <div className="guideTextBox">
                          <span className="guideText">
                            <div
                              className={
                                inputCorrectPw.length !== 0 && isCorrectPwValid
                                  ? 'passSign'
                                  : 'guideText'
                              }
                            >
                              <span className="dotMark">·</span> 동일한
                              비밀번호를 입력해주세요
                            </div>
                          </span>
                        </div>
                      )}
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <th className="tableName">
                      이름<span className="starMark">*</span>
                    </th>
                    <td colSpan="2">
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
                        onClick={isValidEmailBtn}
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
                        onChange={inputContactValue}
                        type="text"
                        placeholder="숫자만 입력해주세요"
                      />
                    </td>
                    <td>
                      <button
                        className="tableBtn verifiedCodeBtn"
                        type="button"
                      >
                        인증번호 받기
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th className="tableName">
                      주소<span className="starMark">*</span>
                    </th>
                    <td colSpan="2">
                      <input
                        className="tableInput address"
                        onChange={inputAddressValue}
                        placeholder="주소를 입력해주세요"
                      />
                    </td>
                    <td />
                  </tr>
                </tbody>
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
      </div>
    </div>
  );
}

export default Signup;
