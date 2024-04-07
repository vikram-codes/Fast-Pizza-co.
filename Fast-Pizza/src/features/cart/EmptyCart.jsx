import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../user/userSlice";
import { useEffect } from "react";

function EmptyCart() {
  return (
    <div>
      {/* <LinkButton to="/menu">&larr; Back to menu</LinkButton> */}

      <p className="py-6">Your cart is empty. Start adding some pizzas 😉</p>
    </div>
  );
}

export default EmptyCart;
