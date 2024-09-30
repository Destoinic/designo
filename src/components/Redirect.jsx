import "../styling/Redirect.css";
import { NavLink } from "react-router-dom";

const Redirect = ({ to, children }) => {
  return (
    <div className="redirect">
      <NavLink
        to={to}
        className={({ isActive }) => {
          return isActive ? "active-link" : "";
        }}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default Redirect;
