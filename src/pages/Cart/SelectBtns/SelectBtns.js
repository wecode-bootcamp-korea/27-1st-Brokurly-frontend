import React from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import './SelectBtns.scss';

function SelectBtns({
  checkedItemsLength,
  itemsLength,
  checkAllItems,
  deleteAllCheckedItem,
}) {
  const isAllChecked = checkedItemsLength === itemsLength;

  return (
    <div className="selectBtns">
      <button onClick={checkAllItems} className="selectAllBtn">
        <span className={`icon ${isAllChecked ? 'icon-green' : 'icon-gray'}`}>
          {isAllChecked ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        </span>
        <span className="selectAll">
          전체선택({checkedItemsLength}/{itemsLength})
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
