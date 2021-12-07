import React, { useEffect, useState } from 'react';
import Items from './Items/Items';
import SelectBtns from './SelectBtns/SelectBtns';
import CartSummary from './CartSummary/CartSummary';
import './Cart.scss';

function Cart() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/data/cartItemsData.json`)
      .then(res => res.json())
      .then(items => {
        setIsLoaded(true);
        setItems(items);
      });
  }, []);

  let coldItems = [];
  let boxItems = [];

  items.forEach(item => {
    if (item.itemPackage === 'cold') {
      coldItems.push(item);
    } else {
      boxItems.push(item);
    }
  });

  const checkedItemsLength =
    items.length - items.filter(item => item.notChecked).length;

  const changeItemQuantity = (id, changedQuantity) => {
    // TODO fetch
    setItems(
      items.map(item =>
        item.id !== id ? item : { ...item, quantity: changedQuantity }
      )
    );
  };

  const deleteItem = id => {
    // TODO fetch
    setItems(items.filter(item => item.id !== id));
  };

  const deleteAllCheckedItem = () => {
    // TODO fetch
    setItems(items.filter(item => item.notChecked));
  };

  const changeAllItemsCheck = changedCheck => {
    setItems(
      items.map(item => {
        return { ...item, notChecked: changedCheck };
      })
    );
  };

  const checkAllItems = () => {
    const isAllChecked = items.length === checkedItemsLength;
    changeAllItemsCheck(isAllChecked);
  };

  const changeItemCheck = id => {
    setItems(
      items.map(item =>
        item.id !== id ? item : { ...item, notChecked: !item.notChecked }
      )
    );
  };

  const orderItems = () => {
    if (checkedItemsLength < 1) {
      alert('주문하실 상품을 선택해주세요');
      return;
    }
    deleteAllCheckedItem();
    alert('주문이 완료되었습니다.');
  };

  return (
    <section className="cart">
      <div className="cartWrapper">
        {!isLoaded ? (
          <h2 className="loading">로딩중...</h2>
        ) : (
          <>
            <h2 className="cartTitle">장바구니</h2>
            <main className="main">
              <div className="cartContent">
                <SelectBtns
                  checkedItemsLength={checkedItemsLength}
                  itemsLength={items.length}
                  checkAllItems={checkAllItems}
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
                  checkedItemsLength={checkedItemsLength}
                  itemsLength={items.length}
                  checkAllItems={checkAllItems}
                  deleteAllCheckedItem={deleteAllCheckedItem}
                />
              </div>
              <CartSummary
                coldItems={coldItems}
                boxItems={boxItems}
                orderItems={orderItems}
              />
            </main>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
