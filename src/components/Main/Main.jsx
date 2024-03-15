import React, { useState } from "react";
import PropTypes from "prop-types";
import Banner from "../Banner/Banner";
import Recipes from "../Recipes/Recipes";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  const [recipes, setRecipes] = useState([]);

  const handleAddToCook = (recipe) => {
    const isExist = recipes.find((r) => r.id === recipe.id);
    if (!isExist) {
      toast.success("Successfully added");
      setRecipes([...recipes, recipe]);
    } else {
      return toast.warning("Already Exist!");
    }
  };

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
        <Recipes handleAddToCook={handleAddToCook} />
        <Cart recipes={recipes} />
      </div>
      <ToastContainer />
    </main>
  );
}

Main.propTypes = {};

export default Main;
