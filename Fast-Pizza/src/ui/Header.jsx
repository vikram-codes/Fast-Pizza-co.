import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex bg-yellow-400 py-4 px-8 uppercase border-b border-stone-400 justify-between">
      <Link to="/" className="tracking-widest">
        Fast Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
