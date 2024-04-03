import { useState } from "react";
import { unstable_useViewTransitionState } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        placeholder="Search for an order"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
