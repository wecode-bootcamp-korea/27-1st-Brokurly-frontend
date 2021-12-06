import React from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import './SelectBtns.scss';

function SelectBtns({
  checkedItems,
  itemsLength,
  isAllchecked,
  checkAllItems,
  deleteAllCheckedItem,
}) {
  return (
    <div className="selectBtns">
      <button onClick={checkAllItems} className="selectAllBtn">
        <span className={`icon ${isAllchecked ? 'icon-green' : 'icon-gray'}`}>
          {isAllchecked ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        </span>
        <span className="selectAll">
          전체선택({checkedItems}/{itemsLength})
        </span>
      </button>
      <span className="wordBorder">|</span>
      <button className="selectText" onClick={deleteAllCheckedItem}>
        선택삭제
      </button>
    </div>
  );
}

export default SelectBtns;
