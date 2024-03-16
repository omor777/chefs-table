import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";

function Recipes({ handleAddToCook }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <section className="col-span-12 lg:col-span-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Recipe
            handleAddToCook={handleAddToCook}
            recipe={recipe}
            key={recipe.id}
          />
        ))}
      </div>
    </section>
  );
}

Recipes.propTypes = {
  handleAddToCook: PropTypes.func.isRequired,
};

export default Recipes;
