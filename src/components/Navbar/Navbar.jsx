import { IoIosSearch } from "react-icons/io";
import user from "../../assets/user1.png";
import { FaUser } from "react-icons/fa6";
import Mobile_Nav from "./Mobile_Nav";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
function Navbar({ handleToggleMenu, isMenuOpen }) {
  return (
    <>
      <nav className="flex items-center justify-between relative">
        <h3 className="text-black-900 text-[clamp(18px,3vw,2rem)] font-bold">
          Recipe Calories
        </h3>
        <ul className="hidden lg:flex items-center flex-wrap gap-x-12 gap-y-3">
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
        <div className="hidden lg:flex items-center gap-4">
          <label className="input  rounded-full flex items-center gap-2 bg-gray-100">
            <span className="text-2xl">
              <IoIosSearch />
            </span>
            <input
              className=" placeholder:text-black-600"
              type="text"
              placeholder="Search"
            />
          </label>
          <button className="bg-main p-3 rounded-full">
            <span className="text-x">
              <FaUser />
            </span>
          </button>
        </div>
        <Mobile_Nav isMenuOpen={isMenuOpen} />
        <button onClick={handleToggleMenu} className="text-2xl lg:hidden">
          <RiMenu2Line />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
