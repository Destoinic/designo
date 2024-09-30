import "../styling/ProjectCell.css";

const ProjectCell = ({ projectName, title, body }) => {
  return (
    <div className="project-cell">
      <div className="cell-image">
        <img src={`/assets/project-images/image-${projectName}.jpg`} alt="" />
      </div>
      <div className="cell-info">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ProjectCell;
