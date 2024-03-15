import React from "react";
import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
function Navbar(props) {
  return (
    <>
      <nav className="flex items-center justify-between">
        <h3 className="text-black-900 text-32 font-bold">Recipe Calories</h3>
        <ul className="flex items-center gap-12">
          <li>
            <a className="text-black-600" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-black-600" href="#">
              Recipes
            </a>
          </li>
          <li>
            <a className="text-black-600" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-black-600" href="#">
              Search
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <label className="input  rounded-full flex items-center gap-2 bg-gray-100">
            <IoIosSearch />
            <input
              className="placeholder:text-black-600"
              type="text"
              placeholder="Search"
            />
          </label>
          <button className="bg-main size-10 rounded-full flex items-center justify-center">
            <span className="text-xl">
              <FaUser />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {};

export default Navbar;
