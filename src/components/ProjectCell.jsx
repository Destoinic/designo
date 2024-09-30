import "../styling/ProjectCell.css";

const ProjectCell = ({ projectName, children }) => {
  return (
    <div>
      <div className="project-cell">
        <div className="cell-image">
          <img src={`/assets/project-images/image-${projectName}.jpg`} alt="" />
        </div>
        <div className="cell-info">{children}</div>
      </div>
    </div>
  );
};

export default ProjectCell;
