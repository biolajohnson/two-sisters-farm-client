import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">The Farmers Market</Link>
        </h1>
        <ul>
          <li>
            <Link to="profiles.html">Farmers</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {};

export default Navbar;
