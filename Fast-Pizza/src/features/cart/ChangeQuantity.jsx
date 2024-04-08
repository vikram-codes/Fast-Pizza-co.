import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import { useState } from "react";

function ChangeQuantity({ item }) {
  const { pizzaId, quantity } = item;
  const { decreaseDisable, setDecreaseDisable } = useState(true);
  const dispatch = useDispatch();
  function handleDecreaseItemQuantity(e) {
    e.preventDefault();
    dispatch(decreaseItemQuantity(pizzaId));
  }
  function handleIncreaseItemQuantity(e) {
    e.preventDefault();
    dispatch(increaseItemQuantity(pizzaId));
  }
  return (
    <div className="">
      <Button
        type={`${quantity === 1 ? "smallSecondary" : "small"}`}
        onClick={handleDecreaseItemQuantity}
        disabled={true}
      >
        -
      </Button>
      <> </>
      <Button
        type={`${quantity >= 10 ? "smallSecondary" : "small"}`}
        onClick={handleIncreaseItemQuantity}
        disabled={true}
      >
        +
      </Button>
    </div>
  );
}

export default ChangeQuantity;
