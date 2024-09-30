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
            <ProjectCell
              projectName="change"
              title="TIM BROWN"
              body="A book cover designed for Tim Brown’s new release, ‘Change’"
            />
            <ProjectCell
              projectName="boxed-water"
              title="BOXER WATER"
              body="A simple packaging concept made for Boxed Water"
            />
            <ProjectCell
              projectName="science"
              title="SCIENCE!"
              body="A poster made in collaboration with the Federal Art Project"
            />
          </div>
        </section>

        <section className="section-design">
          <div className="container-design">
            <ul>
              {/* INTREBARE : TRANSITION EFFECT HOVER */}
              <DesignCell
                designName="web"
                title="WEB DESIGN"
                body="VIEW PROJECTS"
                backgroundURL="/assets/home/desktop/image-web-design.jpg"
              />
              <DesignCell
                designName="app"
                title="APP DESIGN"
                body="VIEW PROJECTS"
                backgroundURL="/assets/home/desktop/image-app-design.jpg"
              />
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
