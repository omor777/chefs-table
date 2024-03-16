import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";

function Header({ handleToggleMenu, isMenuOpen }) {
  return (
    <header className="container my-12 px-4 lg:px-0">
      <Navbar isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </header>
  );
}

Header.propTypes = {};

export default Header;
