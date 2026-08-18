import "./Hero.css";
import bike from "../../assets/images/yamaha.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">

        <div className="custom-text">
          <h1>
            <span>Custom</span>
          </h1>
        </div>

        <div className="mechanics-text">
          <h1>
            <span>Mechanics</span>
          </h1>
        </div>

        <div className="hero-para">
          <p>
            Premier repair hub in Bermuda, specializing in Aprilia,
            Piaggio, and Vespa models. Our factory-trained technicians
            ensure top-tier service and unparalleled expertise for your
            beloved rides.
          </p>
        </div>

        <div className="hero-buttons">
          <div className="hero-btn-primary">
            Book Now
          </div>

          <div className="hero-btn-secondary">
            Marketplace
          </div>
        </div>

      </div>

      <div className="hero-image-section">
        <div className="hero-image">
          <img src={bike} alt="bike" />
        </div>
      </div>
    </section>
  );
}