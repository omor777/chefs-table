import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Recipes from "../Recipes/Recipes";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

function Main({ isMenuOpen }) {
  const [recipes, setRecipes] = useState([]);
  const [cookingRecipe, setCookingRecipe] = useState([]);

  const handleAddToCook = (recipe) => {
    const isExist = recipes.find((r) => r.id === recipe.id);
    if (!isExist) {
      toast.success("Recipe added");
      setRecipes([...recipes, recipe]);
    } else {
      return toast.warning("Already Exist!");
    }
  };

  const handleAddToCooking = (curRecipe) => {
    setCookingRecipe([...cookingRecipe, curRecipe]);
    setRecipes(recipes.filter((r) => r.id !== curRecipe.id));
  };

  return (
    <main className="container px-4 lg:px-0">
      <div className={`duration-300 ${isMenuOpen ? "mt-24" : ""}`}>
        <Banner />
      </div>
      <div className="mt-24">
        <h3 className="text-[clamp(30px,4vw,40px)] font-semibold text-black-900 text-center">
          Our Recipes
        </h3>
        <p className="leading-[26px] text-black-600 w-full max-w-[823px] text-center mx-auto">
          Explore a world of culinary delights with our curated collection of
          recipes. From appetizers to desserts, find inspiration for every meal
          in our comprehensive recipe archive.{" "}
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-12">
        <Recipes handleAddToCook={handleAddToCook} />
        <Cart
          cookingRecipe={cookingRecipe}
          handleAddToCooking={handleAddToCooking}
          recipes={recipes}
        />
      </div>
      <ToastContainer />
    </main>
  );
}

Main.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Main;
