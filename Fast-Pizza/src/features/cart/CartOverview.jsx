import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (totalCartQuantity === 0) return null;

  return (
    <div className="flex justify-between bg-stone-800 p-4 text-sm uppercase text-stone-300 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
