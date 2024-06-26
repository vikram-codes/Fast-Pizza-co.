import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  function handleClearCart(e) {
    e.preventDefault();
    dispatch(clearCart());
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [username, navigate]);

  return (
    <div className="px-4 py-3">
      {!cart.length ? (
        <>
          {/* <LinkButton to="/menu">&larr; Back to menu</LinkButton> */}

          <EmptyCart />
        </>
      ) : (
        <>
          <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>
        </>
      )}

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button
          type={`${cart.length > 0 ? "primary" : "secondary"}`}
          onClick={handleClearCart}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
