import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        className="rounded-full px-4 py-2 text-sm bg-yellow-200 placeholder:text-stone-400 transition-all duration-400 focus:outline-none w-28 sm:focus:w-72 focus:ring-yellow-500 sm:w-64 focus:ring-opacity-50"
        value={query}
        placeholder="Search your order #"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
