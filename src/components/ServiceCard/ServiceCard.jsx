import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({
  heading,
  para,
  image,
  btn,
  path = "/booknow",
}) {
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <div className="service-card-text">
        <h1>{heading}</h1>

        <p>{para}</p>

        <button
          type="button"
          className="service-card-btn"
          onClick={() => navigate(path)}
        >
          {btn}
        </button>
      </div>

      <div className="service-card-img">
        <img
          src={image}
          alt={heading}
          loading="lazy"
        />
      </div>
    </div>
  );
}