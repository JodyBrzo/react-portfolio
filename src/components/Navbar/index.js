import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border border-secondary border-top-0 border-right-0 border-left-0">
      <Link
        to="/"
        className={
          window.location.pathname === "/" || window.location.pathname === "/home"
            ? "nav-link active"
            : "nav-link"
        }
      >
      <div className="navbar-brand bg-dark text-light pl-3 pr-3" >
        Jody Brzovski
      </div>
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
        <Link
          to="/home"
            className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
          >
            About Me
        </Link>  
        <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Portfolio
        </Link>  
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
