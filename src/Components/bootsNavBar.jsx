import React from "react";
import { Link, NavLink } from "react-router-dom";

const BootsNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/movies">
              Moives
            </NavLink>
            <NavLink className="nav-link" to="/costumers">
              Customers
            </NavLink>
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BootsNavBar;
