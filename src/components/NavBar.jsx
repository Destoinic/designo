import { NavLink } from "react-router-dom";
import "../styling/NavBar.css";

const NavBar = ({ mode }) => {
  return (
    <nav>
      <div className="container-nav">
        <div className="logo">
          <img src="/assets/home/desktop/logo.svg" alt="" />
          {/* {mode === "dark-mode" ? ( */}
          {/* <h3 className="logo-title dark-mode">DESIGNO</h3> */}
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "active-link logo-title dark-mode" : "";
            }}
          >
            <h3 className="logo-title ">DESIGNO</h3>
          </NavLink>
          {/* ) : ( */}
          {/* // <h3 className="logo-title">DESIGNO</h3> */}
          {/* )} */}
        </div>
        <div className="links">
          <ul>
            {mode === "dark-mode" ? (
              <li className="dark-mode">
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return isActive ? "active-link " : "";
                  }}
                >
                  OUR COMPANY
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return isActive ? "active-link" : "";
                  }}
                >
                  OUR COMPANY
                </NavLink>
              </li>
            )}
            {/* trebuie puse si la urmatoarele */}
            {mode === "dark-mode" ? "" : ""}

            <li>
              <NavLink
                to="/locations"
                className={({ isActive }) => {
                  return isActive ? "active-link" : "";
                }}
              >
                LOCATIONS
              </NavLink>
            </li>
            {mode === "dark-mode" ? "" : ""}

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? "active-link" : "";
                }}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
