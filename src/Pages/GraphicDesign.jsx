import DesignCell from "../components/DesignCell";
import Footer from "../components/Footer";
import HeroDesign from "../components/HeroDesign";
import NavBar from "../components/NavBar";
import ProjectCell from "../components/ProjectCell";
import SectionContact from "../components/SectionContact";
import "../styling/GraphicDesign.css";

const GraphicDesign = () => {
  return (
    <main className="graphic-container">
      <div className="obj" />
      <div className="container">
        <NavBar />

        <HeroDesign>
          <h1>App design</h1>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </HeroDesign>

        <section className="section-projects">
          <div className="projects-grid">
            <ProjectCell projectName={"change"}>
              <h3>TIM BROWN</h3>
              <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
            </ProjectCell>
            <ProjectCell projectName={"boxed-water"}>
              <h3>BOXER WATER</h3>
              <p>A simple packaging concept made for Boxed Water</p>
            </ProjectCell>
            <ProjectCell projectName={"science"}>
              <h3>SCIENCE!</h3>
              <p>A poster made in collaboration with the Federal Art Project</p>
            </ProjectCell>
          </div>
        </section>

        <section className="section-design">
          <div className="container-design">
            <ul>
              {/* INTREBARE : TRANSITION EFFECT HOVER */}
              <DesignCell designName={"web"}>
                <h2>WEB DESIGN</h2>
                <div className="design-contents">
                  <h3>VIEW PROJECTS</h3>
                  <span>&#62;</span>
                </div>
              </DesignCell>
              <DesignCell designName={"app"}>
                <h2>APP DESIGN</h2>
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
    </main>
  );
};

export default GraphicDesign;
