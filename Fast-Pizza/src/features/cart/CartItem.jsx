import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import ChangeQuantity from "./ChangeQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  function handleDeleteItem(e) {
    e.preventDefault();
    dispatch(deleteItem(pizzaId));
  }
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <ChangeQuantity item={item} />
        <Button type="small" onClick={handleDeleteItem}>
          delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
