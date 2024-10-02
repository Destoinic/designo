import "../styling/Footer.css";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <footer>
      <div className="office">
        <NavBar mode="dark-mode" className="footer" />
        <hr />
        <div>
          <div className="office-container">
            <div className="office-info">
              <div className="office-location">
                <p>Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="office-contact">
                <p>Contact Us (Central Office)</p>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.co</p>
              </div>
            </div>
            <div className="socials">
              <div>
                <img
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt="facebook icon"
                />
                <img
                  src="/assets/shared/desktop/icon-youtube.svg"
                  alt="youtube icon"
                />
                <img
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt="twitter icon"
                />
                <img
                  src="/assets/shared/desktop/icon-pinterest.svg"
                  alt="pinterest icon"
                />
                <img
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt="instagram icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
