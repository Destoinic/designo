import "../styling/Quality.css";

const Quality = ({ backgroundURL, title, body }) => (
  <div className="quality">
    {/* className added to div */}
    <div className="content">
      <img src={backgroundURL} alt="" />
      {/* i need to correct this in pc width */}
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  </div>
);

export default Quality;
