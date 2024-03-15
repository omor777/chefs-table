import React from "react";
import PropTypes from "prop-types";
import Banner from "../Banner/Banner";
import Recipes from "../Recipes/Recipes";
import Cart from "../Cart/Cart";
function Main() {
  return (
    <main className="container">
      <Banner />
      <div className="mt-24">
        <h3 className="text-[40px] font-semibold text-black-900 text-center">
          Our Recipes
        </h3>
        <p className="leading-[26px] text-black-600 w-full max-w-[823px] text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-12">
        <Recipes />
        <Cart />
      </div>
    </main>
  );
}

Main.propTypes = {};

export default Main;
