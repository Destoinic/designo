import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styling/Home.css";
import SectionContact from "../components/SectionContact";
import DesignCell from "../components/DesignCell";
import QualitiesList from "../components/QualitiesList";
import Redirect from "../components/Redirect";

const Home = () => {
  return (
    <div className="home-container">
      <div className="obj" />
      <div className="obj rotate" />
      {/* 2 divs for background --secondary-white objects in background */}

      <div className="container">
        <NavBar />
        <header className="hero">
          <div className="hero-parts">
            <div className="parts-info">
              <h1>
                Award-winning custom designs and digital branding solutions
              </h1>
              <p>
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <Redirect to="/about">
                <button
                  className="dark-mode"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  LEARN MORE
                </button>
              </Redirect>
            </div>
            <div className="parts-image">
              <img
                src="/assets/home/desktop/image-hero-phone.png"
                alt="phone"
              />
            </div>
          </div>
        </header>

        <section className="section-design">
          <div className="container-design">
            <ul>
              <DesignCell
                designName="web"
                title="WEB DESIGN"
                body="VIEW PROJECTS"
                backgroundURL="/assets/home/desktop/image-web-design-large.jpg"
              />
              <DesignCell
                designName="app"
                title="APP DESIGN"
                body="VIEW PROJECTS"
                backgroundURL="/assets/home/desktop/image-app-design.jpg"
              />
              <DesignCell
                designName="graphic"
                title="GRAPHIC DESIGN"
                body="VIEW PROJECTS"
                backgroundURL="/assets/home/desktop/image-graphic-design.jpg"
              />
            </ul>
          </div>
        </section>
        <QualitiesList />
        <SectionContact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
