import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UserProgressContext from "../store/UserProgressContext";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);
  const totalAmount = cartCtx.items.reduce((amount, item) => {
    return amount + item.quantity * item.price;
  }, 0);
  function hideCheckout() {
    userCtx.hideCheckout();
  }
  return (
    <Modal open={userCtx.progress === "checkout"} onClose={hideCheckout}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(totalAmount)}</p>

        <Input label={"Full Name"} type="text" id={"full-name"} />
        <Input label={"Email Address"} type="email" id={"email"}></Input>
        <Input label={"Street"} type="text" id={"street"} />
        <div className="control-row">
          <Input label={"Postal Code"} type="text" id={"postal-code"}></Input>
          <Input label={"City"} type="text" id={"city"}></Input>
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly={true} onClick={hideCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
