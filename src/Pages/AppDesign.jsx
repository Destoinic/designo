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
            <ProjectCell projectName={"airfilter"}>
              <h3>AIRFILTER</h3>
              <p>
                Solving the problem of poor indoor air quality by filtering the
                air
              </p>
            </ProjectCell>
            <ProjectCell projectName={"eyecam"}>
              <h3>EYECAM</h3>
              <p>
                Product that lets you edit your favorite photos and videos at
                any time
              </p>
            </ProjectCell>
            <ProjectCell projectName={"faceit"}>
              <h3>FACEIT</h3>
              <p>
                Get to meet your favorite internet superstar with the faceit app
              </p>
            </ProjectCell>
            <ProjectCell projectName={"todo"}>
              <h3>TODO</h3>
              <p>
                A todo app that features cloud sync with light and dark mode
              </p>
            </ProjectCell>
            <ProjectCell projectName={"loopstudios"}>
              <h3>LOOPSTUDIOS</h3>
              <p>A VR experience app made for Loopstudios</p>
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

export default AppDesign;
