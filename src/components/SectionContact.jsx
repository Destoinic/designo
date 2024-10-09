import "../styling/SectionContact.css";
import Redirect from "../components/Redirect";
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
        <Redirect to="/contact">
          <button
            className="dark-mode"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            GET IN TOUCH
          </button>
        </Redirect>
      </div>
    </section>
  );
};

export default SectionContact;
