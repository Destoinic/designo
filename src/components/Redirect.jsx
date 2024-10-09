import { NavLink } from "react-router-dom";

const Redirect = ({ to, children }) => {
  return (
    <div
      className="redirect"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
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
