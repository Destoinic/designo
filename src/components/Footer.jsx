import "../styling/Footer.css";
import NavBar from "./NavBar";

const Footer = ({ className }) => {
  return (
    <footer className={className}>
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
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/shared/desktop/icon-facebook.svg"
                    alt="facebook icon"
                  />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link youtube"
                >
                  <img
                    src="/assets/shared/desktop/icon-youtube.svg"
                    alt="youtube icon"
                  />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link twitter"
                >
                  <img
                    src="/assets/shared/desktop/icon-twitter.svg"
                    alt="twitter icon"
                  />
                </a>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link pinterest"
                >
                  <img
                    src="/assets/shared/desktop/icon-pinterest.svg"
                    alt="pinterest icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                >
                  <img
                    src="/assets/shared/desktop/icon-instagram.svg"
                    alt="instagram icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
