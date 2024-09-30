import "../styling/HeroDesign.css";

const HeroDesign = ({ children }) => {
  return (
    <div className="design-container">
      <header className="hero">
        <div className="hero-parts">
          <div className="parts-info">{children}</div>
        </div>
      </header>
    </div>
  );
};

export default HeroDesign;
