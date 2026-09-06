import "./CardSection.css";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function CardSection({
  title,
  cards = [],
}) {
  return (
    <>
      <div className="card-section-heading">
        <h1>{title}</h1>
      </div>

      <div className="card-section-cards">
        {cards.map((item, index) => (
          <ServiceCard
            key={item.heading || index}
            {...item}
          />
        ))}
      </div>
    </>
  );
}