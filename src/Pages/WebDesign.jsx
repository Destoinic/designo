import NavBar from "../components/NavBar";
import "../styling/WebDesign.css";
import SectionContact from "../components/SectionContact";
import Footer from "../components/Footer";
import HeroDesign from "../components/HeroDesign";
import ProjectCell from "../components/ProjectCell";
import DesignCell from "../components/DesignCell";

const WebDesign = () => {
  return (
    <div className="web-container">
      <div className="obj"></div>
      <div className="container">
        <NavBar />
        <HeroDesign>
          <h1>Web design</h1>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </HeroDesign>

        <section className="section-projects">
          <div className="projects-grid">
            <ProjectCell projectName={"express"}>
              <h3>EXPRESS</h3>
              <p>A multi-carrier shipping website for ecommerce businesses</p>
            </ProjectCell>
            <ProjectCell projectName={"transfer"}>
              <h3>TRANSFER</h3>
              <p>
                Site for low-cost money transfers and sending money within
                seconds
              </p>
            </ProjectCell>
            <ProjectCell projectName={"photon"}>
              <h3>PHOTON</h3>
              <p>
                A state-of-the-art music player with high-resolution audio and
                DSP effects
              </p>
            </ProjectCell>

            <ProjectCell projectName={"builder"}>
              <h3>BUILDER</h3>
              <p>
                Connects users with local contractors base on their location
              </p>
            </ProjectCell>
            <ProjectCell projectName={"blogr"}>
              <h3>BLOGR</h3>
              <p>
                Blogr is a platform for creating an online blog or publication
              </p>
            </ProjectCell>
            <ProjectCell projectName={"camp"}>
              <h3>CAMP</h3>
              <p>
                Get expert training in coding, data, design, and digital
                marketing
              </p>
            </ProjectCell>
          </div>
        </section>

        <section className="section-design">
          <div className="container-design">
            <ul>
              {/* INTREBARE : TRANSITION EFFECT HOVER */}
              <DesignCell designName={"app"}>
                <h2>APP DESIGN</h2>
                <div className="design-contents">
                  <h3>VIEW PROJECTS</h3>
                  <span>&#62;</span>
                </div>
              </DesignCell>
              <DesignCell designName={"graphic"}>
                <h2>GRAPHIC DESIGN</h2>
                <div className="design-contents">
                  <h3>VIEW PROJECTS</h3>
                  <span>&#62;</span>
                </div>
              </DesignCell>
            </ul>
          </div>
        </section>
        <SectionContact />
      </div>
      <Footer />
    </div>
  );
};

export default WebDesign;
