import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ChooseUsBox.css";

gsap.registerPlugin(ScrollTrigger);

export default function ChooseUsBox({
  title = "Why Choose Us",
  items = [],
}) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = Array.from(
      section.querySelectorAll(".choose-card")
    );

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,

        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });

      cards.forEach((card) => {
        const scaleAnimation = gsap.to(card, {
          scale: 1.05,
          boxShadow:
            "0px 10px 25px rgba(255,40,40,0.25)",
          borderColor: "rgb(255,40,40)",
          duration: 0.4,
          ease: "power2.out",
          paused: true,
        });

        const backgroundAnimation = gsap.to(card, {
          background:
            "linear-gradient(145deg, rgba(255,40,40,0.15), rgba(255,255,255,0.05))",
          duration: 0.4,
          ease: "power1.inOut",
          paused: true,
        });

        const handleMouseMove = (event) => {
          const rect = card.getBoundingClientRect();

          const mouseX = event.clientX - rect.left;
          const mouseY = event.clientY - rect.top;

          const rotateY =
            (mouseX / rect.width - 0.5) * 10;

          const rotateX =
            (mouseY / rect.height - 0.5) * -10;

          gsap.to(card, {
            rotateY,
            rotateX,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const resetRotation = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        const handleMouseEnter = () => {
          scaleAnimation.play();
          backgroundAnimation.play();
        };

        const handleMouseLeave = () => {
          scaleAnimation.reverse();
          backgroundAnimation.reverse();
          resetRotation();
        };

        card.addEventListener(
          "mouseenter",
          handleMouseEnter
        );

        card.addEventListener(
          "mousemove",
          handleMouseMove
        );

        card.addEventListener(
          "mouseleave",
          handleMouseLeave
        );

        card._chooseCleanup = () => {
          card.removeEventListener(
            "mouseenter",
            handleMouseEnter
          );

          card.removeEventListener(
            "mousemove",
            handleMouseMove
          );

          card.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        };
      });
    }, section);

    return () => {
      cards.forEach((card) => {
        card._chooseCleanup?.();
        delete card._chooseCleanup;
      });

      ctx.revert();
    };
  }, [items]);

  return (
    <section
      className="choose-us-box"
      ref={sectionRef}
    >
      <div className="choose-head">
        <h1>{title}</h1>
      </div>

      <div className="choose-grid">
        {items.map((item, index) => (
          <div
            className="choose-card"
            key={`${item.heading}-${index}`}
          >
            <h2>{item.heading}</h2>
            <p>{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}