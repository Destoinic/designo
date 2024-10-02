import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionContact from "../components/SectionContact";
import "../styling/Locations.css";

const Locations = () => {
  return (
    <div className="locations-container">
      <div className="container">
        <NavBar />

        <section className="section-locations">
          <div className="first location">
            <div className="location-info">
              <div>
                <h2>Canada</h2>
                <div className="location-office">
                  <p>
                    <span>
                      <b>Designo Central Office</b>
                    </span>
                    <span>3886 Wellington Street</span>
                    <span>Toronto, Ontario M9C 3J5</span>
                  </p>
                  <p>
                    <span>
                      <b>Contact</b>
                    </span>
                    <span>P : +1 253-863-8967</span>
                    <span>M : contact@designo.co</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="location-image">
              <img
                src="/assets/locations/desktop/image-map-canada.png"
                alt=""
              />
            </div>
          </div>
          <div className="second location">
            <div className="location-image">
              <img
                src="/assets/locations/desktop/image-map-australia.png"
                alt=""
              />
            </div>
            <div className="location-info">
              <div>
                <h2>Australia</h2>
                <div className="location-office">
                  <p>
                    <span>
                      <b>Designo AU Office</b>
                    </span>
                    <span>19 Balonne Street </span>
                    <span>New South Wales 2443</span>
                  </p>
                  <p>
                    <span>
                      <b>Contact</b>
                    </span>
                    <span> P : (02) 6720 9092</span>
                    <span>M : contact@designo.au</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="third location">
            <div className="location-info">
              <div>
                <h2>United Kingdom</h2>
                <div className="location-office">
                  <p>
                    <span>
                      <b>Designo UK Office</b>
                    </span>
                    <span>13 Colorado Way </span>
                    <span>Rhyd-y-fro SA8 9GA</span>
                  </p>
                  <p>
                    <span>
                      <b>Contact</b>
                    </span>
                    <span>P : 078 3115 1400</span>
                    <span>M : contact@designo.uk</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="location-image">
              <img
                src="/assets/locations/desktop/image-map-united-kingdom.png"
                alt=""
              />
            </div>
          </div>
        </section>

        <SectionContact />
      </div>
      <Footer />
    </div>
  );
};

export default Locations;
