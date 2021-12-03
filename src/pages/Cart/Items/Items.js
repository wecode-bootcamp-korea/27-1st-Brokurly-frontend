import React from 'react';
import Item from './Item/Item';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';

import './Items.scss';
function Items({ title, items }) {
  return (
    <div className="items">
      <div className="itemsHeader">
        <div className="title">
          <span>{title}</span>
          {title === '냉장 상품' ? <IoWaterOutline /> : <MdOutlineWbSunny />}
        </div>
        <BsChevronUp />
        {/* <BsChevronDown /> */}
      </div>
      {items.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Items;
