import React, { useState } from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState('')
  
  function toggleInCart(){
    setInCart(!inCart)
  }

  const itemClass = inCart ? "in-cart" : ""

  const buttonClass = inCart ? "remove" : "add"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={buttonClass}
        onClick={toggleInCart}
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
