import React, { useEffect, useState } from 'react';
import './Cart.scss';
import Items from './Items/Items';
import SelectBtns from './SelectBtns/SelectBtns';
import CartSummary from './CartSummary/CartSummary';

function Cart() {
  const [items, setItems] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [coldItems, setColdItems] = useState([]);
  const [boxItems, setBoxItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState(0);
  const [isAllchecked, setIsAllchecked] = useState(true);

  useEffect(() => {
    fetch(`/data/cartItemsData.json`)
      .then(res => res.json())
      .then(items => {
        setIsLoaded(true);
        setItems(items);
      });
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    if (!items || !items.length) return;
    let coldArray = [];
    let boxArray = [];
    items.forEach(item => {
      if (item.itemPackage === 'cold') {
        coldArray.push(item);
      } else {
        boxArray.push(item);
      }
    });
    setColdItems(coldArray);
    setBoxItems(boxArray);
    setCheckedItems(Items.length);
  }, [items, isLoaded]);

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
    setColdItems(
      coldItems.map(item => {
        return { ...item, notChecked: isAllChecked };
      })
    );
    setBoxItems(
      boxItems.map(item => {
        return { ...item, notChecked: isAllChecked };
      })
    );
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

  const orderItems = () => {
    if (checkedItems < 1) {
      alert('주문하실 상품을 선택해주세요');
      return;
    }
    deleteAllCheckedItem();
    alert('주문이 완료되었습니다.');
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
          <CartSummary
            coldItems={coldItems}
            boxItems={boxItems}
            orderItems={orderItems}
          />
        </main>
      </div>
    </section>
  );
}

export default Cart;
