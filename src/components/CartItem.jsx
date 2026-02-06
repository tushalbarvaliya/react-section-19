import React, { useContext } from "react";
import Button from "../UI/Button";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";

const CartItem = ({ id, name, quantity, price, item }) => {
  const ctx = useContext(CartContext);
  function additem() {
    ctx.addItem(item);
  }
  function remove() {
    ctx.removeItem(id);
  }
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={remove}>-</button>
        <span>{quantity}</span>
        <button onClick={additem}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
