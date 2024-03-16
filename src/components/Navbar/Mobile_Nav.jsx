import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

function Mobile_Nav({ isMenuOpen }) {
  return (
    <div
      className={`flex gap-y-3 flex-col items-center justify-center w-full top-10 lg:hidden absolute  ${
        isMenuOpen ? "max-h-32" : "max-h-0"
      } overflow-hidden duration-300`}
    >
      <ul className="flex  items-center flex-wrap gap-x-5  lg:gap-x-12 gap-y-3">
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
      <div className="flex items-center gap-4 ">
        <label className="input input-sm  rounded-full flex items-center gap-2 bg-gray-100">
          <span className="text-2xl">
            <IoIosSearch />
          </span>
          <input
            className=" placeholder:text-black-600"
            type="text"
            placeholder="Search"
          />
        </label>
        <button className="bg-main p-2 rounded-full">
          <span className="">
            <FaUser />
          </span>
        </button>
      </div>
    </div>
  );
}

Mobile_Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Mobile_Nav;
