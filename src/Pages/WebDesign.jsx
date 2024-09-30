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
      <div className="obj" />
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
            <ProjectCell
              projectName="express"
              title="EXPRESS"
              body="A multi-carrier shipping website for ecommerce businesses"
            />

            <ProjectCell
              projectName="transfer"
              title="TRANSFER"
              body="Site for low-cost money transfers and sending money within seconds"
            />

            <ProjectCell
              projectName="photon"
              title="PHOTON"
              body="A state-of-the-art music player with high-resolution audio and DSP effects"
            />

            <ProjectCell
              projectName="builder"
              title="BUILDER"
              body="Connects users with local contractors base on their location"
            />

            <ProjectCell
              projectName="blogr"
              title="BLOGR"
              body="Blogr is a platform for creating an online blog or publication"
            />

            <ProjectCell
              projectName="camp"
              title="CAMP"
              body="Get expert training in coding, data, design, and digital marketing"
            />
          </div>
        </section>

        <section className="section-design">
          <div className="container-design">
            <ul>
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
        <SectionContact />
      </div>
      <Footer />
    </div>
  );
};

export default WebDesign;
