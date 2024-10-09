import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Countries from "../components/Countries";
import "../styling/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container">
        <NavBar />

        <header className="hero">
          <div className="hero-parts">
            <div className="parts-info">
              <h1>Contact Us</h1>
              <p>
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>
            <div className="parts-form">
              <div>
                <form action="">
                  <input type="text" id="name" name="name" placeholder="Name" />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                  />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                  />
                  <textarea
                    type="text"
                    id="your-message"
                    name="your-message"
                    placeholder="Your Message"
                  />
                </form>
              </div>
              <div className="btn">
                <button className="dark-mode">SUBMIT</button>
              </div>
            </div>
          </div>
        </header>

        <Countries />
      </div>
      <Footer className="contact-page" />
    </div>
  );
};

export default Contact;

//

// Name
// Email address
// Phone
// Your message
// Submit
