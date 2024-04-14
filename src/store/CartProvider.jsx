import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
    console.log("inside", cartContext);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalItem: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log("provide", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
