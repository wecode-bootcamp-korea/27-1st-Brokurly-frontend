import React from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import './SelectBtns.scss';

function SelectBtns() {
  return (
    <div className="selectBtns">
      <AiFillCheckCircle />
      {/* <AiOutlineCheckCircle /> */}
      <button className="selectAllBtn">전체선택</button>|
      <button className="deleteSelectedBtn">선택삭제</button>
    </div>
  );
}

export default SelectBtns;
