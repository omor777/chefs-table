import React, { useState } from "react";
import PropTypes from "prop-types";

function Cart({ recipes, handleAddToCooking, cookingRecipe }) {
  return (
    <section className="col-span-12 lg:col-span-5">
      <div className="border border-[#28282833] rounded-2xl py-8">
        <h4 className="text-2xl font-semibold text-black-900 text-center ">
          Want to cook: {recipes.length}
        </h4>
        <div className="divider w-2/3 mx-auto"></div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          {recipes.map((recipe, index) => (
            <tbody key={recipe.id}>
              <tr className="bg-[#28282808]">
                <td>{index + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} minutes</td>
                <td>{recipe.calories} calories</td>
                <td>
                  <button
                    onClick={() => {
                      handleAddToCooking(recipe);
                    }}
                    className="bg-main px-[18px] py-[9px] rounded-full font-medium text-black-900"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {/* two table */}
        <h4 className="text-2xl font-semibold text-black-900 text-center mt-8">
          Currently cooking: {cookingRecipe.length}
        </h4>
        <div className="divider w-2/3 mx-auto"></div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          {cookingRecipe.map((cRecipe, index) => {
            return (
              <tbody key={index}>
                <tr className="bg-[#28282808]">
                  <td>{index + 1}</td>
                  <td>{cRecipe.recipe_name}</td>
                  <td>{cRecipe.preparing_time} minutes</td>
                  <td>{cRecipe.calories} calories</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <div className="flex items-center justify-center gap-8 mt-6">
          <p className="text-black-800 font-medium leading-7 flex flex-col">
            Total Time{" "}
            <span>
              {cookingRecipe.reduce(
                (acc, curr) => acc + curr.preparing_time,
                0
              )}{" "}
              minute
            </span>
          </p>
          <p className="text-black-800 font-medium leading-7 flex flex-col">
            Total Calories{" "}
            <span>
              {cookingRecipe.reduce((acc, curr) => acc + curr.calories, 0)}{" "}
              calories
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

Cart.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleAddToCooking: PropTypes.func.isRequired,
  cookingRecipe: PropTypes.array.isRequired,
};

export default Cart;
