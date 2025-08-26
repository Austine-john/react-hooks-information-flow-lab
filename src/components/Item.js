import  { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleCartClick() {
    setIsInCart((prev) => !prev);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      {name} ({category})
      <button onClick={handleCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
