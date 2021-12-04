import React from 'react';
import protoTypes from 'prop-types';

function SignupChild(props) {
  //const test = props.isInputIdGuideChild

  // const isInputIdGuideChild = props.isInputIdGuide;

  /*
  const trueTest = () => {
    test(true);
  }
  const testsss = () => {
    props.openInputIdChild(true);
  };
  */

  return (
    <>
      <div>모르겠다이제 이름테스트 :{props.name}</div>
      <tr>
        <th className="tableName">
          아이디<span className="starMark">*</span>
        </th>
        <td>
          <input
            className="tableInput"
            // onChange={props.inputIdValueChild}
            onClick={props.openInputIdChild}
            type="text"
            placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
          />
          {!props.openInputIdChild && (
            <p className="guideTextBox">
              <span className="guideText">
                <div
                  className={props.checkId1 !== true ? 'guideText' : 'passSign'}
                >
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
      </tr>
    </>
  );
}

/*
SignupChild.protoTypes = {
  name: protoTypes.string,
};
*/
export default SignupChild;
