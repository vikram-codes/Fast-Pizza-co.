import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../user/userSlice";

function Menu() {
  const menu = useLoaderData();
  const navigate = useNavigate();
  const username = useSelector(getUser);
  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [username, navigate]);

  return (
    <h1>
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </h1>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
