import React, { useContext, useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { Icon } from "react-materialize";

const Navbar = () => {
  useEffect(() => {
    // Initialize sidenav (mobile collapsible navbar)
    M.Sidenav.init(document.querySelectorAll(".sidenav"));
  }, []);

  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <>
      {/* Navbar */}
      <div className="navbar-fixed">
        <nav>
          <div
            className="nav-wrapper"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            {/* Mobile collapse button */}
            <Link
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
              to="#"
              data-target="mobile-demo"
              className="sidenav-trigger"
            >
              <Icon>menu</Icon>
            </Link>

            {/* Navbar links */}
            <ul className="left hide-on-med-and-down">
              <li>
                <Link
                  style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                  }}
                  to="/news"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                  }}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            <Link
              className="switch-mode"
              to="#"
              onClick={toggle}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
              data-testid="toggle-theme-btn"
            >
              {!dark ? <Icon>dark_mode</Icon> : <Icon>light_mode</Icon>}
            </Link>
          </div>
        </nav>
      </div>
      {/* Mobile collapsible navbar */}
      <ul
        className="sidenav"
        id="mobile-demo"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <li>
          <Link
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
            to="/news"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
