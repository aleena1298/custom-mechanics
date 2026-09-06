import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./BookingSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    service: "",
    description: "",
    dateTime: "",
  });

  const [isSending, setIsSending] = useState(false);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formCardRef = useRef(null);

  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Write your name",
    },
    {
      label: "Contact",
      name: "contact",
      type: "tel",
      placeholder: "+441 505-5053",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "contact@custommechanicsltd.com",
    },
    {
      label: "Service you want",
      name: "service",
      type: "text",
      placeholder: "TCD Testing or any other service",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      const titleSpans = titleRef.current.querySelectorAll("span");

      gsap.from(titleSpans, {
        yPercent: 120,
        opacity: 0,
        rotationX: 80,
        transformOrigin: "bottom center",
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      gsap.from(formCardRef.current, {
        opacity: 0,
        x: 100,
        rotationY: 25,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: formCardRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(
        formCardRef.current.querySelectorAll("input, textarea, button"),
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formCardRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );

      ScrollTrigger.refresh(true);
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleButtonEnter = (button) => {
    gsap.to(button, {
      backgroundColor: "#ff1e1e",
      scale: 1.05,
      boxShadow: "0 0 25px rgba(255, 30, 30, 0.6)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (button) => {
    gsap.to(button, {
      backgroundColor: "#dc2626",
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  const handleInputFocus = (element) => {
    gsap.to(element.parentElement, {
      borderColor: "#ff1e1e",
      boxShadow: "0 0 10px rgba(255, 30, 30, 0.4)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleInputBlur = (element) => {
    gsap.to(element.parentElement, {
      borderColor: "#2b2b2b",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);

    if (!formData.dateTime) {
      alert("Please select preferred date and time.");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch(
        "https://custommechanicsltd-email-module.vercel.app/api/book-now",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (!response.ok || !result?.success) {
        alert("Failed to send booking. Try again.");
        setIsSending(false);
        return;
      }

      alert("Booking sent!");

      setFormData({
        name: "",
        contact: "",
        email: "",
        service: "",
        description: "",
        dateTime: "",
      });
    } catch {
      alert("Network error. Try again later.");
    }

    setIsSending(false);
  };

  return (
    <section className="booking-section" ref={sectionRef} id="book-now">
      <div className="booking-content-grid">
        <div className="booking-title-container">
          <h1 className="booking-title" ref={titleRef}>
            <span className="booking-title-book">BOOK</span>

            <span className="booking-title-now">NOW</span>
          </h1>
        </div>

        <div className="booking-form-card" ref={formCardRef}>
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div className="booking-form-field" key={field.name}>
                <label htmlFor={field.name} className="booking-form-label">
                  {field.label}
                </label>

                <div className="booking-form-input-wrapper">
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={(event) => handleInputFocus(event.currentTarget)}
                    onBlur={(event) => handleInputBlur(event.currentTarget)}
                    className="booking-form-input"
                    required
                  />
                </div>
              </div>
            ))}

            <div className="booking-form-field">
              <label htmlFor="dateTime" className="booking-form-label">
                Preferred date &amp; time
              </label>

              <div className="booking-form-input-wrapper">
                <input
                  type="datetime-local"
                  id="dateTime"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  onFocus={(event) => handleInputFocus(event.currentTarget)}
                  onBlur={(event) => handleInputBlur(event.currentTarget)}
                  className="booking-form-input"
                  required
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>
            </div>

            <div className="booking-form-field">
              <label htmlFor="description" className="booking-form-label">
                Description
              </label>

              <div className="booking-form-input-wrapper">
                <textarea
                  id="description"
                  name="description"
                  placeholder="Description of what actually you want"
                  value={formData.description}
                  onChange={handleChange}
                  onFocus={(event) => handleInputFocus(event.currentTarget)}
                  onBlur={(event) => handleInputBlur(event.currentTarget)}
                  className="booking-form-textarea"
                  rows="3"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="booking-submit-button"
              disabled={isSending}
              onMouseEnter={(event) => {
                if (!isSending) {
                  handleButtonEnter(event.currentTarget);
                }
              }}
              onMouseLeave={(event) => {
                if (!isSending) {
                  handleButtonLeave(event.currentTarget);
                }
              }}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
