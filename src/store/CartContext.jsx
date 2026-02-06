import React, { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD") {
    //add to cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE") {
    //remove from cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id,
    );
    const existingItem = state.itmes[existingCartItemIndex];
    const updatedItems = [...state.items];
    if (existingItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

export function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({ type: "ADD", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE", id });
  }

  const comtextValue = {
    items: cartState.items,
    addItem: addItem,
    removeItem: removeItem,
  };
  // console.log(comtextValue);
  return (
    <CartContext.Provider value={comtextValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
