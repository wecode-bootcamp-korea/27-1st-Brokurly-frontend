import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import './Item.scss';

function Item({ item, changeItemQuantity, deleteItem, changeItemCheck }) {
  // const { id, image, name, quantity, price, notChecked, itemPackage } = item;
  const {
    cart_id,
    product_id,
    product_image,
    product_name,
    quantity,
    product_price,
    notChecked,
    product_package,
  } = item;
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => setInputValue(quantity), [quantity]);

  const addQuantity = () => {
    if (quantity >= 99) {
      alert('최대 주문 수량은 100개 입니다.');
    }

    // Todo fetch
    changeItemQuantity(cart_id, Number(quantity) + 1);
  };

  const removeQuantity = () => {
    if (quantity <= 1) {
      alert('최소 주문 수량은 1개 입니다.');
      return;
    }

    // Todo fetch
    changeItemQuantity(cart_id, Number(quantity) - 1);
  };

  const changeQuantityByInput = e => {
    const value = e.target.value;
    if (isNaN(value)) return;

    if (value === '0') {
      alert('최소 주문 수량은 1개 입니다.');
      // Todo fetch - 1 or quantity
      changeItemQuantity(cart_id, 1);
      setInputValue(1);
      return;
    }

    if (value > 100) {
      alert('최대 주문 수량은 100개 입니다.');
      return;
    }

    // Todo fetch
    changeItemQuantity(cart_id, value);
    setInputValue(value);
  };

  const checkMinmumQuantity = e => {
    if (!e.target.value) {
      // Todo fetch - 1 or quantity
      changeItemQuantity(cart_id, 1);
      setInputValue(1);
      alert('최소 주문 수량은 1개 입니다.');
    }
  };

  return (
    <div className="item">
      <div className="left">
        <button
          className={`checkBtn ${
            !notChecked ? 'checkBtn-green' : 'checkBtn-gray'
          }`}
          onClick={() => changeItemCheck(cart_id)}
        >
          {!notChecked ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        </button>
        <Link to={`/products/${product_id}`} className="linkToProduct">
          <img className="itemImg" src={product_image} alt={product_name} />
          {/* <img className="itemImg" src={`/images/${image}`} alt={name} /> */}
          <span className="name">{product_name}</span>
        </Link>
      </div>
      <div className="right">
        <div className="changeAmountContainer">
          <button className="changeBtn" onClick={removeQuantity}>
            -
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={changeQuantityByInput}
            onBlur={checkMinmumQuantity}
          />
          <button className="changeBtn" onClick={addQuantity}>
            +
          </button>
        </div>
        <div className="totalPrice">
          {Number(product_price * quantity).toLocaleString()}원
        </div>
        <button className="deleteBtn" onClick={() => deleteItem(cart_id)}>
          <TiDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default Item;
