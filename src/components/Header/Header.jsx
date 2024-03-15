import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";

function Header(props) {
  return (
    <header className="container my-12">
      <Navbar />
    </header>
  );
}

Header.propTypes = {};

export default Header;
