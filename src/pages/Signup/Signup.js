import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../src/config';
import SignupModal from './SignupModal/SignupModal';
import './Signup.scss';

function Signup() {
  // custom hook
  // UI + LOGIC

  const navigate = useNavigate();

  // input 클릭시 텍스트 등장(set, setState) - 시작 --------------------
  const [isInputIdGuide, setIsInputIdGuide] = useState(false);
  const [isInputPwGuide, setIsInputPwGuide] = useState(false);
  const [isCorrectPwGuide, setIsCorrectPwGuide] = useState(false);
  // input 클릭시 텍스트 등장(set, setState) - 끝 --------------------

  const [isIdValid2, setIsIdValid2] = useState(false);

  const [msg, setMessage] = useState('');

  // UI 를 만들때 사용해야하면서 변해야하는 값 -> state
  // UI를 만들때 사용해야 되는 값인데 내가 결정하는게 아니라 나를 사용하는 입장에서 결정해야한다. => props로 전달받기
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputCorrectPw, setInputCorrectPw] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContact, setInputContact] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  const successSignBtn = () => {
    fetch(`${API.signup}`, {
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
        if (res.message === 'SUCCESS') {
          navigate('/brokurly/products');
          openModal();
          setMessage('가입을 환영합니다!');
          // alert('가입을 환영합니다!');
        } else {
          openModal();
          setMessage('다시 시도해주세요');
          // alert('다시 시도해주세요');
        }
      });
  };

  const isValidIdBtn = () => {
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
          // setExistUser(false);
          // openModal();
          // 1. modal open
          // 2. message = "사용가능한 아이디입니다"
          openModal();
          setMessage('사용 가능한 아이디입니다');
          // setExistUser();
          // alert('사용 가능한 아이디입니다');
        }
        if (res.message === 'USERNAME_ALREADY_EXISTS') {
          // setExistUser;
          // openModal2();
          // 1.modal open
          // 2. message = "이미 존재하는 아이디입니다"
          openModal();
          setMessage('이미 존재하는 아이디입니다');
          // setExistUser(false);
          // alert('이미 존재하는 아이디입니다');
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
        // const isValidEmailMessges = {
        //   EMAIL_NOT_EXISTS: '사용 가능한 메일입니다',
        //   EMAIL_ALREADY_EXISTS: '이미 존재하는 메일입니다',
        // };
        openModal();
        setMessage('사용 가능한 메일입니다');
        // alert(isValidEmailMessges[res.message]);
      });
  };

  // 모달창
  const [signUpModal, setSignUpModal] = useState(false);

  const openModal = () => {
    setSignUpModal(true);
  };

  const closeModal = e => {
    e.preventDefault();
    setSignUpModal(false);
  };

  const [stopScroll, setStopScroll] = useState(true);
  const activeStopScroll = () => {
    setStopScroll(false);
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
  //id정규식: 대, 소문자, 숫자, 6자리 이상 16자리 이하
  const isIdValid1 = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{6,16}$/.test(inputId);

  const inputIdValue = e => {
    setInputId(e.target.value);
  };

  const isPwValid1 = inputPw.length >= 8;
  //pw정규식: 대,소문자, 숫자 -를 제외한 특수문자, 8자리 이상 입력
  const isPwValid2 = /^[a-zA-Z0-9!@#$%^&*+=_]{8,}$/.test(inputPw);
  //pw조건: 동일한 숫자 3개 이상 연속 사용불가
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

  const isCorrectPwValid = inputCorrectPw === inputPw;

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

  //console.log('aa', signUpModal);

  // const b = signUpModal && <SignupModal />;

  return (
    <div className="signup">
      <div className="signupWidth">
        <header className="signupHeader">
          <h2 className="signupHeaderName">회원가입</h2>
          <button onClick={openModal}>모달버튼</button>
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
                        <p className="guideTextBox">
                          <span className="guideText">
                            <div
                              className={!isIdValid1 ? 'guideText' : 'passSign'}
                            >
                              <span className="dotMark">●</span> 6자 이상의 영문
                              혹은 영문과 숫자를 조합
                            </div>
                          </span>
                          <span
                            // className={`guideText${isIdValid ? ' passSign' : ''}`
                            className={
                              isIdValid2 ? 'guideText passSign' : 'guideText'
                            }
                          >
                            <span className="dotMark">●</span> 아이디 중복확인
                          </span>
                        </p>
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
                              <span className="dotMark">●</span>{' '}
                              영문/숫자/특수문자(-, 공백 제외)만 허용
                            </div>
                          </span>
                          <span className="guideText">
                            <div
                              className={!isPwValid3 ? 'guideText' : 'passSign'}
                            >
                              <span className="dotMark">●</span> 동일한 숫자 및
                              문자 3개 이상 연속 사용불가
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
                    <td colSpan="2">
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
                                inputCorrectPw.length !== 0 && isCorrectPwValid
                                  ? 'passSign'
                                  : 'guideText'
                              }
                            >
                              <span className="dotMark">●</span> 동일한
                              비밀번호를 입력해주세요
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
                        onChanage={inputContactValue}
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
