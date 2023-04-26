import React from "react";

import FoodImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Rachaels Food Truck</h1>
        <HeaderCartButton onClick={props.toggleCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={FoodImg} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;




