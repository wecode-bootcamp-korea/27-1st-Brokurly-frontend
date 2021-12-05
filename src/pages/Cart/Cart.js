import React, { useEffect, useState } from 'react';
import './Cart.scss';
import Items from './Items/Items';
import SelectBtns from './SelectBtns/SelectBtns';
import CartSummary from './CartSummary/CartSummary';

function Cart() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [coldItems, setColdItems] = useState([]);
  const [boxItems, setBoxItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState(0);
  const [isAllchecked, setIsAllchecked] = useState(true);

  useEffect(() => {
    let coldArray = [];
    let boxArray = [];

    ITEMS.forEach(item => {
      if (item.itemPackage === 'cold') {
        coldArray.push(item);
      } else {
        boxArray.push(item);
      }
    });
    setColdItems(coldArray);
    setBoxItems(boxArray);
    setIsLoaded(true);
    setCheckedItems(Items.length);
  }, []);

  useEffect(() => {
    // 첫 로딩에서는 아이템 전체가 체크되기 때문에 이부분 처리하지 않아도됨
    if (!isLoaded) return;
    // undefined(처음, 체크 손대지 않았을 때) ,  체크된 것 -> false / 체크안된 것  -> true 로 해서
    //  이분법으로 처리하기 위해
    const notCheckedColdItems = coldItems.filter(
      item => item.notChecked
    ).length;

    const notCheckedBoxItems = boxItems.filter(item => item.notChecked).length;

    const itemsLength = coldItems.length + boxItems.length;
    const checkedItemsLength =
      itemsLength - notCheckedColdItems - notCheckedBoxItems;

    setCheckedItems(checkedItemsLength);

    setIsAllchecked(itemsLength === checkedItemsLength);
  }, [coldItems, boxItems, isLoaded]);

  const changeItemQuantity = (id, changedQuantity, itemPackage) => {
    if (itemPackage === 'cold') {
      setColdItems(
        coldItems.map(item =>
          item.id !== id ? item : { ...item, quantity: changedQuantity }
        )
      );
    } else {
      setBoxItems(
        boxItems.map(item =>
          item.id !== id ? item : { ...item, quantity: changedQuantity }
        )
      );
    }
  };

  const deleteItem = (id, itemPackage) => {
    // TODO fetch
    if (itemPackage === 'cold') {
      setColdItems(coldItems.filter(item => item.id !== id));
    } else {
      setBoxItems(boxItems.filter(item => item.id !== id));
    }
  };

  const deleteAllCheckedItem = () => {
    setColdItems(coldItems.filter(item => item.notChecked));
    setBoxItems(boxItems.filter(item => item.notChecked));
  };

  const changeAllItemsCheck = isAllChecked => {
    if (isAllChecked) {
      setColdItems(
        coldItems.map(item => {
          return { ...item, notChecked: true };
        })
      );
      setBoxItems(
        boxItems.map(item => {
          return { ...item, notChecked: true };
        })
      );
    } else {
      setColdItems(
        coldItems.map(item => {
          return { ...item, notChecked: false };
        })
      );
      setBoxItems(
        boxItems.map(item => {
          return { ...item, notChecked: false };
        })
      );
    }
  };

  const checkAllItems = () => {
    setIsAllchecked(!isAllchecked);
    changeAllItemsCheck(isAllchecked);
  };

  const changeItemCheck = (id, itemPackage) => {
    if (itemPackage === 'cold') {
      setColdItems(
        coldItems.map(item =>
          item.id !== id ? item : { ...item, notChecked: !item.notChecked }
        )
      );
    } else {
      setBoxItems(
        boxItems.map(item =>
          item.id !== id ? item : { ...item, notChecked: !item.notChecked }
        )
      );
    }
  };

  return (
    <section className="cart">
      <div className="cartWrapper">
        <h2 className="cartTitle">장바구니</h2>
        <main className="main">
          <div className="cartContent">
            <SelectBtns
              checkedItems={checkedItems}
              itemsLength={coldItems.length + boxItems.length}
              checkAllItems={checkAllItems}
              isAllchecked={isAllchecked}
              deleteAllCheckedItem={deleteAllCheckedItem}
            />
            <div className="itemsWrapper">
              <Items
                title="냉장 상품"
                items={coldItems}
                changeItemQuantity={changeItemQuantity}
                deleteItem={deleteItem}
                changeItemCheck={changeItemCheck}
              />
              <Items
                title="상온 제품"
                items={boxItems}
                changeItemQuantity={changeItemQuantity}
                deleteItem={deleteItem}
                changeItemCheck={changeItemCheck}
              />
            </div>
            <SelectBtns
              checkedItems={checkedItems}
              itemsLength={coldItems.length + boxItems.length}
              checkAllItems={checkAllItems}
              isAllchecked={isAllchecked}
              deleteAllCheckedItem={deleteAllCheckedItem}
            />
          </div>
          <CartSummary coldItems={coldItems} boxItems={boxItems} />
        </main>
      </div>
    </section>
  );
}

export default Cart;

const ITEMS = [
  {
    id: 1,
    name: '브로콜리',
    image: 'whole_broccoli.jpg',
    price: '6000',
    introduction: '너무 맛있는 브로콜리',
    quantity: 10,
    itemPackage: 'cold',
  },
  {
    id: 2,
    name: '손질된 브로콜리',
    image: 'cut_broccoli.jpg',
    price: '7500',
    introduction: '편리한 브로콜리',
    quantity: 1,
    itemPackage: 'box',
  },
  {
    id: 3,
    name: '햇 브로콜리',
    image: 'thisyear_broccoli.jpg',
    price: '6500',
    introduction: '갓 수확된 브로콜리',
    quantity: 5,
    itemPackage: 'box',
    img: '',
  },
  {
    id: 4,
    name: '오일 브로콜리',
    image: 'oil_broccoli.jpg',
    price: '11000',
    introduction: '오일에 버무려진 브로콜리',
    quantity: 2,
    itemPackage: 'cold',
  },
  {
    id: 5,
    name: '컬리플라워',
    image: 'whole_cauliflower.jpg',
    price: '8000',
    introduction: '건강식 컬리플라워',
    quantity: 20,
    itemPackage: 'cold',
  },
  {
    id: 6,
    name: '요리된 컬리플라워',
    image: 'cooked_cauliflower.jpg',
    price: '10000',
    introduction: '먹기만 하면 되는 컬리플라워',
    quantity: 8,
    itemPackage: 'box',
  },
];
