import { useState } from "react";
import Redirect from "../components/Redirect";
import "../styling/NavBar.css";
import Dropdown from "./Dropdown";

const NavBar = ({ mode, className }) => {
  // const [menuDropdown, setMenuDropdown] = useState(false);

  return (
    <nav className={className}>
      <div className="container-nav">
        <div className="logo">
          <img src="/assets/home/desktop/logo.svg" alt="" />

          <Redirect to="/">
            <h3 className="logo-title">DESIGNO</h3>
          </Redirect>
        </div>
        <div className="links">
          {/* !! +768px sare in aer */}

          <Dropdown />
          <ul className="menu">
            <li className="dark-mode">
              <Redirect to="/about">OUR COMPANY</Redirect>
            </li>
            <li>
              <Redirect to="/locations">LOCATIONS</Redirect>
            </li>
            <li>
              <Redirect to="/contact">CONTACT</Redirect>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
