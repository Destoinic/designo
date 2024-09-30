import "../styling/Countries.css";

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
        <button>SEE LOCATION</button>
      </div>
      <div className="country">
        <div>
          <img
            src="/assets/shared/desktop/illustration-australia.svg"
            alt="illustration australia"
          />
        </div>
        <h3>AUSTRALIA</h3>
        <button>SEE LOCATION</button>
      </div>
      <div className="country">
        <div>
          <img
            src="/assets/shared/desktop/illustration-united-kingdom.svg"
            alt="illustration united kingdom"
          />
        </div>
        <h3>UNITED KINGDOM</h3>
        <button>SEE LOCATION</button>
      </div>
    </section>
  );
};

export default Countries;
