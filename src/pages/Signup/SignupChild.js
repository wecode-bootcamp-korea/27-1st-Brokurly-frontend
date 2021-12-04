import React from 'react';
import protoTypes from 'pro-types';

function SignupChild(Props) {
  return (
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
              <div className={checkId1 !== true ? 'guideText' : 'passSign'}>
                <span className="dotMark">●</span> 6자 이상의 영문 혹은 영문과
                숫자를 조합
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
      </td>
    </tr>
  );
}

SignupChild.protoTypes = {
  name: protoTypes.string,
};
export default SignupChild;
