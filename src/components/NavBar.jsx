import Redirect from "../components/Redirect";
import "../styling/NavBar.css";

const NavBar = ({ mode }) => {
  return (
    <nav>
      <div className="container-nav">
        <div className="logo">
          <img src="/assets/home/desktop/logo.svg" alt="" />
          {/* {mode === "dark-mode" ? ( */}
          {/* <h3 className="logo-title dark-mode">DESIGNO</h3> */}

          <Redirect to="/">
            <h3 className="logo-title">DESIGNO</h3>
          </Redirect>
          {/* ) : ( */}
          {/* )} */}
        </div>
        <div className="links">
          <ul>
            {/* {mode === "dark-mode" ? ( */}
            <li className="dark-mode">
              <Redirect to="/about">OUR COMPANY</Redirect>
            </li>
            {/* ) : ( */}
            {/* <li>
              <Redirect to="/about">OUR COMPANY</Redirect>
            </li> */}
            {/* )} */}
            {/* trebuie puse si la urmatoarele */}
            {/* {mode === "dark-mode" ? "" : ""} */}
            <li>
              <Redirect to="/locations">LOCATIONS</Redirect>
            </li>
            {/* {mode === "dark-mode" ? "" : ""} */}
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
