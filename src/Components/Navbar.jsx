import React from "react";
function Navbar({ totalCounter }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge bg-pill bg-secondary">{totalCounter}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
