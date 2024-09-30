import { NavLink } from "react-router-dom";
import "../styling/SectionContact.css";

const SectionContact = () => {
  return (
    <section className="section-contact">
      <div className="contact-info">
        <h2>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="contact-button">
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return isActive ? "active-link" : "";
          }}
        >
          <button className="dark-mode">GET IN TOUCH</button>
        </NavLink>
      </div>
    </section>
  );
};

export default SectionContact;
