import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h2>this cart has: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
