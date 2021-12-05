import React, { useState } from 'react';
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

  const goToMain = () => {
    navigate('/');
    //fetch
    fetch('API주소', {
      method: 'POST',
      body: JSON.stringify({
        username: inputId,
        password: inputPw,
        name: this.state.username, // username.value
        email: this.state.email, //  email.value
        contact: this.state.contact, //  contact.value
        address: this.state.address, //  address.value
      }),
    })
      .then(res => res.json())
      .then(res => {});
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

  const inputIdValue = e => {
    setInputId(e.target.value);
  };

  const checkId1 = inputId.length > 6;

  const inputPwValue = e => {
    setInputPw(e.target.value);
  };

  // 정규식 - 시작 --------------------
  const checkPw1 = inputPw.length > 10;
  // const checkPw2 = inputPw
  // 정규식 - 끝 --------------------

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
                            className={
                              checkId1 !== true ? 'guideText' : 'passSign'
                            }
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
                    <button className="tableBtn" type="button">
                      중복확인
                    </button>
                    {/* 중복확인 모달 (시작) */}

                    <div className="askCorrectModal">
                      <div className="askCorrectMessage" />
                    </div>

                    {/* 중복확인 모달 (끝) */}
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
                            className={
                              checkPw1 !== true ? 'guideText' : 'passSign'
                            }
                          >
                            <span className="dotMark">●</span> 10자 이상 입력
                          </div>
                        </span>
                        <span className="guideText">
                          {/* <div
                            className={
                              checkPw2 !== true ? 'guideText' : 'passSign'
                            }
                          > */}
                          <span className="dotMark">●</span>
                          영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상
                          조합
                          {/* </div> */}
                        </span>
                        <span className="guideText">
                          <span className="dotMark">●</span> 동일한 숫자 3개
                          이상 연속 사용 불가
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
                      // onChange={correctPwValue}
                      onClick={openCorrectPw}
                      type="password"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                    {isCorrectPwGuide && (
                      <p className="guideTextBox">
                        <span className="guideText">
                          <span className="dotMark">●</span> 동일한 비밀번호를
                          입력해주세요
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
                      placeholder="예: brokurly@brokurly.com"
                    />
                  </td>
                  <td>
                    <button className="tableBtn" type="button">
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
                      type="tel"
                      placeholder="숫자만 입력해주세요"
                    />
                  </td>
                  <td>
                    <button className="tableBtn verifiedCode" type="button">
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
                      placeholder="주소를 입력해주세요"
                    />
                  </td>
                  <td />
                </tr>
              </table>
            </div>
            <div className="joinSection">
              <button className="joinBtn">가입하기</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;
