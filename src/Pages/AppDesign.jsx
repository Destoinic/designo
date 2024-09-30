import DesignCell from "../components/DesignCell";
import Footer from "../components/Footer";
import HeroDesign from "../components/HeroDesign";
import NavBar from "../components/NavBar";
import ProjectCell from "../components/ProjectCell";
import SectionContact from "../components/SectionContact";
import "../styling/AppDesign.css";

const AppDesign = () => {
  return (
    <div className="app-container">
      <div className="obj"></div>
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
              projectName="airfilter"
              title="AIRFILTER"
              body="Solving the problem of poor indoor air quality by filtering the
                air"
            />

            <ProjectCell
              projectName="eyecam"
              title="EYECAM"
              body="Product that lets you edit your favorite photos and videos at
                any time"
            />

            <ProjectCell
              projectName="faceit"
              title="FACEIT"
              body="Get to meet your favorite internet superstar with the faceit app"
            />

            <ProjectCell
              projectName="todo"
              title="TODO"
              body="A todo app that features cloud sync with light and dark mode"
            />

            <ProjectCell
              projectName="loopstudios"
              title="LOOPSTUDIOS"
              body="A VR experience app made for Loopstudios"
            />
          </div>
        </section>

        <section className="section-design">
          <div className="container-design">
            <ul>
              <DesignCell
                designName="web"
                title="WEB DESIGN"
                body="VIEW PROJECTS"
                backgroundURL="/assets/home/desktop/image-web-design.jpg"
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

export default AppDesign;
