import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartCntx = useContext(CartContext);
  console.log("reinitialising", cartCntx);

  const addItemToCart = (event) => {
    event.preventDefault();
    // cartCntx.items.push(props.item)

    const quantity = document.getElementById("amount" + props.id).value;
    cartCntx.addItem({ ...props.item, quantity: quantity });
    console.log("after", cartCntx);
  };
  return (
    <form className={classes.form}>
      {console.log(cartCntx.items)};
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
