import React from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import './SelectBtns.scss';

function SelectBtns() {
  return (
    <div className="selectBtns">
      <button className="icon icon-gray">
        {/* <AiFillCheckCircle /> */}
        <AiOutlineCheckCircle />
      </button>
      <button className="selectAllBtn">전체선택(0/0)</button>
      <span className="wordBorder">|</span>
      <button className="deleteSelectedBtn">선택삭제</button>
    </div>
  );
}

export default SelectBtns;
