import { NavLink } from "react-router-dom";
import "../styling/DesignCell.css";

const DesignCell = ({ designName, title, body, backgroundURL, onClick }) => {
  return (
    <li
      className={`design-${designName} design-cell-container`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <NavLink
        style={{ backgroundImage: `url(${backgroundURL})` }}
        to={`/${designName}-design`}
        className={({ isActive }) => {
          return isActive ? "active-link " : "";
        }}
      >
        <h2>{title}</h2>
        <div className="design-contents">
          <h3>{body}</h3>
          <span>{">"}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default DesignCell;
