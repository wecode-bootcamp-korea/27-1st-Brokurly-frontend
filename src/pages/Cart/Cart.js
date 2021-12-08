import React, { useEffect, useState } from 'react';
import Items from './Items/Items';
import SelectBtns from './SelectBtns/SelectBtns';
import CartSummary from './CartSummary/CartSummary';
import './Cart.scss';
import API from '../../config';

function Cart() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    fetch(API.cart, {
      headers: {
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => {
        switch (res.message) {
          case 'Token not Exist':
            alert('로그인을 해주세요');
            break;
          // 에러 성공 분기 처리
          default:
            break;
        }
        setItems(res.result);
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e);
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
    fetch(API.cart, {
      method: 'PATCH',
      headers: {
        authorization: token,
      },
      body: JSON.stringify({
        cart_id: cart_id,
        quantity: changedQuantity,
      }),
    })
      .then(res =>
        res.json().then(res => {
          switch (res.message) {
            case 'Token not Exist':
              alert('로그인을 해주세요');
              break;
            case 'SUCCESS':
              setItems(
                items.map(item =>
                  item.cart_id !== cart_id
                    ? item
                    : { ...item, quantity: changedQuantity }
                )
              );
              break;
            // TODO 에러 처리하기
            default:
              break;
          }
        })
      )
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
  };

  const deleteItem = cart_id => {
    fetch(API.cart, {
      method: 'DELETE',
      headers: { authorization: token },
      body: JSON.stringify({
        cart_id: cart_id,
      }),
    })
      .then(res => res.json())
      .then(res => res => {
        switch (res.message) {
          // TODO 에러메세지 정해지면 분기 처리
          case 'Token not Exist':
            alert('로그인을 해주세요');
            break;
          case 'SUCCESS':
            break;

          default:
            break;
        }
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e);
      });

    setItems(items.filter(item => item.cart_id !== cart_id));
  };

  const deleteAllCheckedItem = () => {
    const deleteItemsCartIdArray = items
      .filter(item => !item.notChecked)
      .map(item => item.cart_id);

    fetch(API.cart, {
      method: 'DELETE',
      headers: { authorization: token },
      body: {
        cart_ids: deleteItemsCartIdArray,
      },
    })
      .then(res => res.json())
      .then(res => {
        switch (res.message) {
          // TODO 백 message 정해지만 분기처리
          case 'Token not Exist':
            alert('로그인을 해주세요');
            break;
          case 'SUCCESS':
            alert('선택한 상품들을 삭제했습니다.');
            setItems(items.filter(item => item.notChecked));
            break;

          default:
            break;
        }
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
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

    const orderItemsCartId = items
      .filter(item => !item.notChecked)
      .map(item => item.cart_id);

    fetch(API.orders, {
      method: 'POST',
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ cart_ids: orderItemsCartId }),
    })
      .then(res => res.json())
      .then(res => {
        switch (res.message) {
          case 'Token not Exist':
            alert('로그인을 해주세요');
            break;
          case 'INVALID_ORDER_STATUS':
          case 'INVALID_ORDER_ITEMS_STATUS':
          case 'DATA_ERROR':
          case 'TRANSACTION_ERROR':
          case 'KEY_ERROR':
          case 'INVALID_CART':
            alert('에러 입니다');
            break;
          case 'CREATE':
            setItems(items.filter(item => item.notChecked));
            alert('주문이 완료되었습니다.');
            break;
          default:
            break;
        }
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
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
