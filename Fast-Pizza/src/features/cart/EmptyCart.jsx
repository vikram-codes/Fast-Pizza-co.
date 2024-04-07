import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div>
      {/* <LinkButton to="/menu">&larr; Back to menu</LinkButton> */}

      <p className="py-6">
        Your cart is still empty. Start adding some pizzas 😉
      </p>
    </div>
  );
}

export default EmptyCart;
