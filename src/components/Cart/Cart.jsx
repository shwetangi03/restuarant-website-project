import React from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 23.34 }].map((item) => (
        <li> {item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model>
        {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>46.68</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
