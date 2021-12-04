import React, { useState } from 'react';
import Item from './Item/Item';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';
import './Items.scss';

function Items({ title, items }) {
  const [isItemsOpen, setIsItemsOpen] = useState(true);

  const openItems = () => {
    setIsItemsOpen(!isItemsOpen);
  };

  return (
    <div className="items">
      <div className="itemsHeader">
        <div className="title">
          <div
            className={`icon ${
              title === '냉장 상품' ? 'icon-blue' : 'icon-orange'
            }`}
          >
            {title === '냉장 상품' ? <IoWaterOutline /> : <MdOutlineWbSunny />}
          </div>
          <span className="titleText">{title}</span>
        </div>
        <button className="toggleBtn" onClick={openItems}>
          {isItemsOpen ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>
      {isItemsOpen && items.map(item => <Item item={item} key={item.id} />)}
    </div>
  );
}

export default Items;
