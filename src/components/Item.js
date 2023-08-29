import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  const handleCart = () => {
    setIsInCart(!isInCart)
  }

  return (
    <li className={isInCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{isInCart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
