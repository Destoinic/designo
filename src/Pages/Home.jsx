import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styling/Home.css";
import SectionContact from "../components/SectionContact";
import DesignCell from "../components/DesignCell";
import { NavLink } from "react-router-dom";
import QualitiesList from "../components/QualitiesList";

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
              <button className="dark-mode">
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return isActive ? "active-link " : "";
                  }}
                >
                  LEARN MORE
                </NavLink>
              </button>
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
        {/* <section className="section-qualities">
          <div className="qualities">
            <img
              src="/assets/home/desktop/illustration-passionate.svg"
              alt="passionate-image"
            />
            <h3>PASSIONATE</h3>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
          <div className="qualities">
            <img
              src="/assets/home/desktop/illustration-resourceful.svg"
              alt="resourceful-image"
            />
            <h3>RESOURCEFUL</h3>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
          <div className="qualities">
            <img
              src="/assets/home/desktop/illustration-friendly.svg"
              alt="friendly-image"
            />
            <h3>FRIENDLY</h3>
            <p>
              Friendly We are a group of enthusiastic folks who know how to put
              people first. Our success depends on our customers, and we strive
              to give them the best experience a company can provide.
            </p>
          </div>
        </section> */}
        <SectionContact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
