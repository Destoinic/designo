import "../styling/Countries.css";
import Redirect from "./Redirect";

const Countries = () => {
  return (
    <section className="section-countries">
      <div className="country">
        <div>
          <img
            src="/assets/shared/desktop/illustration-canada.svg"
            alt="illustration canada"
          />
        </div>
        <h3>CANADA</h3>
        <Redirect to="/locations">
          <button className="light-mode">SEE LOCATION</button>
        </Redirect>
      </div>
      <div className="country">
        <div>
          <img
            src="/assets/shared/desktop/illustration-australia.svg"
            alt="illustration australia"
          />
        </div>

        <h3>AUSTRALIA</h3>
        <Redirect to="/locations">
          <button className="light-mode">SEE LOCATION</button>
        </Redirect>
      </div>
      <div className="country">
        <div>
          <img
            src="/assets/shared/desktop/illustration-united-kingdom.svg"
            alt="illustration united kingdom"
          />
        </div>
        <h3>UNITED KINGDOM</h3>
        <Redirect to="/locations">
          <button className="light-mode">SEE LOCATION</button>
        </Redirect>
      </div>
    </section>
  );
};

export default Countries;
