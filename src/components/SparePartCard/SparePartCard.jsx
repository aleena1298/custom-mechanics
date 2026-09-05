import { useNavigate } from "react-router-dom";
import "./SparePartCard.css";

export default function SparePartCard({
  heading,
  para,
  image,
  btn,
}) {
  const navigate = useNavigate();

  return (
    <div className="spare-card">
      <div className="spare-card-text">
        <h1>{heading}</h1>

        <p>{para}</p>

        <button
          className="spare-card-btn"
          onClick={() => navigate("/booknow")}
        >
          {btn}
        </button>
      </div>

      <div className="spare-card-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
}