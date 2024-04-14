import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);

  // const totalAmount = `$${cartcntx.totalAmount}`;
  const hasItems = cartcntx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartcntx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartcntx.removeItem(item)
  };

  const mergedItems = cartcntx.items.reduce((acc, item) => {
    const existingItemIndex = acc.findIndex((el) => el.name === item.name);

    if (existingItemIndex !== -1) {
      acc[existingItemIndex].quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }

    return acc;
  }, []);

  const totalAmount = mergedItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);


  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
