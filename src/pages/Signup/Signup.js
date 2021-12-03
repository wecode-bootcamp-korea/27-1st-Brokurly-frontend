import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Signup.scss';

function Signup() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
    //fetch
  };

  return (
    <div className="signup">
      <div className="signupWidth">
        <header className="signupHeader">
          <h2 className="signupHeaderName">회원가입</h2>
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
                      type="text"
                      placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
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
                    비밀번호<span className="starMark">*</span>
                  </th>
                  <td colspan="2">
                    <input
                      className="tableInput"
                      placeholder="비밀번호를 입력해주세요"
                    />
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
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                  </td>
                  <td />
                </tr>
                <tr>
                  <th className="tableName">
                    이름<span className="starMark">*</span>
                  </th>
                  <td colspan="2">
                    <input
                      className="tableInput"
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
                      className="tableInput"
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
                      className="tableInput"
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
                      className="tableInput"
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
