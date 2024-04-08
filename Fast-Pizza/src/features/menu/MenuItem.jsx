import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../cart/cartSlice";
import { useState } from "react";
import ChangeQuantity from "../cart/ChangeQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    setAddedToCart(true);
    dispatch(addItem(newItem));
  }
  function handleDeleteFromCart() {
    dispatch(deleteItem(id));
    setAddedToCart(false);
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-60 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut ? (
            !addedToCart ? (
              <Button onClick={handleAddToCart} type="small">
                Add to cart
              </Button>
            ) : (
              <Button type="small" onClick={handleDeleteFromCart}>
                Delete
              </Button>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
}
export default MenuItem;
