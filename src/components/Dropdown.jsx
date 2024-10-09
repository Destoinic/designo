import { useState } from "react";
import Redirect from "./Redirect";
import "../styling/Dropdown.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onToggle() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
      <button
        className={!isOpen ? "burger" : "close-button"}
        onClick={onToggle}
      />
      {isOpen && (
        <div>
          <div className="dropdown" onClick={onToggle}>
            <ul>
              <li>
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
      )}
    </>
  );
};

export default Dropdown;
