import React, { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    // Initialize sidenav (mobile collapsible navbar)
    M.Sidenav.init(document.querySelectorAll(".sidenav"));
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            {/* Mobile collapse button */}
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            {/* Navbar links */}
            <ul className="left hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            {/* Navbar brand/logo */}
          </div>
        </nav>
      </div>
      {/* Mobile collapsible navbar */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
