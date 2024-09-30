import { NavLink } from "react-router-dom";
import "../styling/DesignCell.css";

const DesignCell = ({ designName, children }) => {
  return (
    <li className={`design-${designName}`}>
      <NavLink
        to={`/${designName}-design`}
        className={({ isActive }) => {
          return isActive ? "active-link " : "";
        }}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default DesignCell;

{
  /* <DesignCell designName={"web"}>
                <h2>WEB DESIGN</h2>
                <div className="design-contents">
                  <h3>VIEW PROJECTS</h3>
                  <span>&#62;</span>
                </div>
              </DesignCell> */
}

{
  /* <DesignCell designName={"app"}>
                <h2>APP DESIGN</h2>
                <div className="design-contents">
                  <h3>VIEW PROJECTS</h3>
                  <span>&#62;</span>
                </div>
              </DesignCell> */
}
{
  /* <DesignCell designName={"graphic"}>
                <h2>GRAPHIC DESIGN</h2>
                <div className="design-contents">
                  <h3>VIEW PROJECTS</h3>
                  <span>&#62;</span>
                </div>
              </DesignCell> */
}
