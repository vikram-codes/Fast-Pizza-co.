import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import { useState } from "react";

function ChangeQuantity({ item }) {
  const { pizzaId, quantity } = item;
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  function handleDecreaseItemQuantity(e) {
    e.preventDefault();
    dispatch(decreaseItemQuantity(pizzaId));
    if (quantity < 2) setDisabled(true);
  }
  function handleIncreaseItemQuantity(e) {
    e.preventDefault();
    dispatch(increaseItemQuantity(pizzaId));
  }
  return (
    <div className="">
      <Button
        type="small"
        disabled={disabled}
        onClick={handleDecreaseItemQuantity}
      >
        -
      </Button>
      <> </>
      <Button
        type="small"
        disabled={disabled}
        onClick={handleIncreaseItemQuantity}
      >
        +
      </Button>
    </div>
  );
}

export default ChangeQuantity;
