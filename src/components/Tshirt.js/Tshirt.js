import React from "react";
import "./Tshirt.css";

const Tshirt = (props) => {
  const { handleAddToCart, tshirt } = props;
  // console.log(handleAddToCart);
  const { name, picture, price } = props.tshirt;
  return (
    <div className="tshirt">
      <img src={picture} width="200px" alt="" />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Add To Cart</button>
    </div>
  );
};

export default Tshirt;
