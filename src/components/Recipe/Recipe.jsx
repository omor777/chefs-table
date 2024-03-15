import React from "react";
import PropTypes from "prop-types";
import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";

function Recipe({ recipe, handleAddToCook }) {
  const {
    id,
    recipe_name,
    recipe_img,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
//   console.table(recipe);
  return (
    <div className="p-6 rounded-2xl border border-[#28282833]">
      <img
        className="h-[200px] w-full object-cover rounded-2xl"
        src={recipe_img}
      />
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-black-900">{recipe_name}</h3>
        <p className="font-fira mt-4 leading-[30px] text-[#878787]">
          {short_description}
        </p>
        <div className="divider"></div>
        <h4 className="text-lg mt-6 font-medium">
          Ingredients: {ingredients.length}
        </h4>
        <ul className="list-disc list-inside space-y-2 mt-4">
          {ingredients.map((ingredient, idx) => (
            <li className="font-fira text-lg text-[#878787]" key={idx}>
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="divider"></div>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-3 text-[#282828CC]">
            <span className="text-xl">
              <LuClock3 />
            </span>
            {preparing_time}
          </p>
          <p className="flex items-center gap-3 text-[#282828CC]">
            <span className="text-xl">
              <FaFire />
            </span>
            {calories} calories
          </p>
        </div>
        <button
          onClick={() => handleAddToCook(recipe)}
          className="text-lg mt-6 font-medium py-3 px-6 rounded-full bg-main text-black-900"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
}

Recipe.propTypes = {};

export default Recipe;
