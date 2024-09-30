import "../styling/QualitiesList.css";
import Quality from "./Quality";

const QualitiesList = () => {
  return (
    <div className="qualities-list">
      <Quality
        backgroundURL="/assets/home/desktop/illustration-passionate.svg"
        title="PASSIONATE"
        body="Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions."
      />
      <Quality
        backgroundURL="/assets/home/desktop/illustration-resourceful.svg"
        title="RESOURCEFUL"
        body="Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs."
      />
      <Quality
        backgroundURL="/assets/home/desktop/illustration-friendly.svg"
        title="FRIENDLY"
        body="We are a group of enthusiastic folks who know how to put
            people first. Our success depends on our customers, and we strive to
            give them the best experience a company can provide."
      />
    </div>
  );
};

export default QualitiesList;
