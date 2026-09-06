import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./VideoBox.css";
import bikeAnimation from "../../assets/videos/bike animation.mp4";
gsap.registerPlugin(ScrollTrigger);

export default function VideoBox() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      title: "Certified",
      text: "Our workshop technicians are factory trained to undertake all service requirements having attended Ducati, Aprilia and Moto Guzzi factory courses.",
    },
    {
      title: "Insurance Work",
      text: "Had a bump? Need an insurance quote? Our workshop caters for all insurance repairs, technical, welding and bodywork for all bikes.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".video-bg", {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            rotateY: index % 2 === 0 ? 15 : -15,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            filter: "blur(0px)",
            duration: 1.3,
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          },
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleMouseEnter = (card) => {
    gsap.to(card, {
      scale: 1.08,
      y: -12,
      rotateY: 5,
      boxShadow: "0 10px 40px rgba(255,255,255,0.3)",
      borderColor: "#ff5252",
      background: "rgba(255,255,255,0.1)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      scale: 1,
      y: 0,
      rotateY: 0,
      boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
      borderColor: "white",
      background: "rgba(0,0,0,0.668)",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="video-box" ref={sectionRef}>
      <video className="video-bg" autoPlay loop muted src={bikeAnimation} />

      <div className="main-certified-box">
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className="certified"
            onMouseEnter={() => handleMouseEnter(cardRefs.current[index])}
            onMouseLeave={() => handleMouseLeave(cardRefs.current[index])}
          >
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
