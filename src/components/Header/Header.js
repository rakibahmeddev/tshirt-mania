import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="menu-link">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/review-order">Review Order</CustomLink>
    </div>
  );
};

export default Header;
