import LinkButton from "../../ui/LinkButton";
import { useSelector } from "react-redux";

function EmptyCart() {
  const username = useSelector((state) => state.user.username);
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">{username},</h2>

      <p className="py-6 font-semibold">
        Your cart is empty. Start adding some pizzas 😉
      </p>
    </div>
  );
}

export default EmptyCart;
