import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const ctx = useContext(CartContext);
  const userctx = useContext(UserProgressContext);
  const totalPrice = ctx.items.reduce((totoalPri, item) => {
    return totoalPri + item.price * item.quantity;
  }, 0);
  function hideCart() {
    userctx.hideCart();
  }

  function showCheckout() {
    userctx.hideCart();

    userctx.showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={userctx.progress === "cart"}
      onClose={userctx.progress === 'cart' ? hideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {ctx.items.map((item) => {
          return <CartItem key={item.id} {...item} item={item}></CartItem>;
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart} type='button'>
          Close
        </Button>
        {ctx.items.length > 0 && (
          <Button onClick={showCheckout}>Go To Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
