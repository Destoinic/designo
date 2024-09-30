import "../styling/Quality.css";

const Quality = ({ backgroundURL, title, body }) => {
  return (
    <div className="quality">
      <div>
        <img src={backgroundURL} alt="" />
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Quality;
