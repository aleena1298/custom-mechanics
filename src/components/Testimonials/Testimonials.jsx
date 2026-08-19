import "./Testimonials.css";

import man1 from "../../assets/images/man1.png";
import woman1 from "../../assets/images/woman1.png";
import woman2 from "../../assets/images/woman2.png";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Our workshop technicians are factory trained to undertake all your repair and service requirements having attended Ducati, Aprilia and Moto Guzzi factory courses.",
      author: "Alice Johnson",
      image: man1,
      rating: 5,
    },
    {
      quote:
        "Exceptional service! They handled my complicated repair quickly and professionally. Highly recommend their certified team for any high-end bike work.",
      author: "Jane Doe",
      image: woman1,
      rating: 5,
    },
    {
      quote:
        "The quality of work is unparalleled. It's clear they use genuine parts and have immense expertise with Italian motorcycles.",
      author: "Emily Clark",
      image: woman2,
      rating: 5,
    },
  ];

  const Rating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className="star-icon"
          viewBox="0 0 20 20"
          fill={i < rating ? "#dc2626" : "#6b7280"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.045a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.045a1 1 0 00-1.176 0l-2.817 2.045c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.01 8.729c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      );
    }

    return <div className="rating-container">{stars}</div>;
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">TESTIMONIALS</h2>

      <div className="cards-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="card-image-wrapper">
              <img
                src={testimonial.image}
                alt={`Testimonial from ${testimonial.author}`}
                className="card-image"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src =
                    "https://placehold.co/400x400/171717/f1f1f1?text=User+Picture";
                }}
              />

              <div className="card-image-overlay">
                <Rating rating={testimonial.rating} />

                <p className="card-content-text">
                  {testimonial.quote}
                </p>

                <p className="card-author">
                  - {testimonial.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}