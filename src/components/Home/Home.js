import React, { useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import useTshirts from "../../hooks/useTshirts";
import Tshirt from "../Tshirt.js/Tshirt";

const Home = () => {
  const [tshirts, setTshirts] = useTshirts();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    const exists = cart.find((tshirt) => tshirt._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("item is already added");
    }
  };

  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((tshirt) => tshirt._id !== selectedItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
