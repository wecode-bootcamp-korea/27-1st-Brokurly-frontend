import React, { useEffect, useState } from 'react';
import Items from './Items/Items';
import SelectBtns from './SelectBtns/SelectBtns';
import CartSummary from './CartSummary/CartSummary';
import './Cart.scss';

function Cart() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://10.58.4.106:8000/cart')
      .then(res => res.json())
      .then(res => {
        setItems(res.result);
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e);
      })
      .finally(setIsLoaded(true));
  }, []);

  let coldItems = [];
  let boxItems = [];

  isLoaded &&
    items.length &&
    items.forEach(item => {
      if (item.product_package === '냉장/종이포장') {
        coldItems.push(item);
      } else {
        boxItems.push(item);
      }
    });

  const checkedItemsLength =
    items.length - items.filter(item => item.notChecked).length;

  const changeItemQuantity = (cart_id, changedQuantity) => {
    fetch('http://10.58.4.106:8000/cart', {
      method: 'PATCH',
      body: JSON.stringify({
        cart_id: cart_id,
        quantity: changedQuantity,
      }),
    })
      .then(res => res.json().then(res => res))
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e);
      });

    setItems(
      items.map(item =>
        item.cart_id !== cart_id ? item : { ...item, quantity: changedQuantity }
      )
    );
  };

  const deleteItem = cart_id => {
    fetch('http://10.58.4.106:8000/cart', {
      method: 'DELETE',
      headers: { cart_id: cart_id },
    })
      .then(res => res.json())
      .then(res => res)
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e);
      });

    setItems(items.filter(item => item.cart_id !== cart_id));
  };

  const deleteAllCheckedItem = () => {
    const deleteItemsCartIdArray = items
      .filter(item => !item.notChecked)
      .map(item => item.cart_id);

    fetch('http://10.58.4.106:8000/cart', {
      method: 'DELETE',
      headers: { cart_id: deleteItemsCartIdArray },
    })
      .then(res => res.json())
      .then(res => {
        alert('주문이 완료되었습니다.');
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e);
      });

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
        item.cart_id !== id ? item : { ...item, notChecked: !item.notChecked }
      )
    );
  };

  const orderItems = () => {
    if (checkedItemsLength < 1) {
      alert('주문하실 상품을 선택해주세요');
      return;
    }
    // TODO : 주문 fetch
    setItems(items.filter(item => item.notChecked));
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
              <CartSummary items={items} orderItems={orderItems} />
            </main>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
