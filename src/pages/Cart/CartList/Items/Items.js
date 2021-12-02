import React from 'react';
import Item from './Item/Item';
import './Items.scss';
function Items({ title, items }) {
  return (
    <div className="items">
      <div className="itemsHeader">
        <h3 className="part">{title}</h3>
        <div className="showBtn">^</div>
      </div>
      {items.map(item => (
        <Item item={items} key={item.id} />
      ))}
    </div>
  );
}

export default Items;
