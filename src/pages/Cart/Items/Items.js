import React, { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';
import Item from './Item/Item';
import './Items.scss';

function Items({
  title,
  items,
  changeItemQuantity,
  deleteItem,
  changeItemCheck,
}) {
  const [isItemsOpen, setIsItemsOpen] = useState(true);

  const openItems = () => {
    setIsItemsOpen(preIsItemsOpen => !preIsItemsOpen);
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
      {isItemsOpen &&
        items.map(item => (
          <Item
            key={item.cart_id}
            item={item}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
            changeItemCheck={changeItemCheck}
          />
        ))}
    </div>
  );
}

export default Items;
