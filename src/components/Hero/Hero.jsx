import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Hero.css";
import bike from "../../assets/images/yamaha.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const headingRefs = useRef([]);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .from(".hero-text h1 span", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.25,
        })
        .from(
          ".hero-para p",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-buttons div",
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.25,
          },
          "-=0.5"
        )
        .from(
          ".hero-image-section",
          {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.8"
        );
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const primaryBtn = primaryBtnRef.current;
    const secondaryBtn = secondaryBtnRef.current;
    const headings = [...headingRefs.current];

    const hoverIn = (element, options = {}) => {
      if (!element) return;

      gsap.to(element, {
        scale: options.scale || 1.05,
        backgroundColor: options.bg || "transparent",
        boxShadow:
          options.shadow ||
          "0px 0px 15px rgba(255, 40, 40, 0.6)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hoverOut = (element, options = {}) => {
      if (!element) return;

      gsap.to(element, {
        scale: 1,
        backgroundColor: options.bg || "transparent",
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    const primaryEnter = () => {
      hoverIn(primaryBtn, {
        bg: "rgb(255,40,40)",
        shadow: "0px 0px 20px rgba(255,40,40,0.8)",
      });
    };

    const primaryLeave = () => {
      hoverOut(primaryBtn, {
        bg: "rgb(255,20,20)",
      });
    };

    const secondaryEnter = () => {
      hoverIn(secondaryBtn, {
        bg: "rgba(255,255,255,0.1)",
        shadow: "0px 0px 15px rgba(255,255,255,0.3)",
      });
    };

    const secondaryLeave = () => {
      hoverOut(secondaryBtn, {
        bg: "transparent",
      });
    };

    primaryBtn?.addEventListener("mouseenter", primaryEnter);
    primaryBtn?.addEventListener("mouseleave", primaryLeave);

    secondaryBtn?.addEventListener("mouseenter", secondaryEnter);
    secondaryBtn?.addEventListener("mouseleave", secondaryLeave);

    headings.forEach((heading) => {
      if (!heading) return;

      const headingEnter = () => {
        gsap.to(heading, {
          color: "#ff2828",
          textShadow: "0px 0px 20px rgba(255,40,40,0.6)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const headingLeave = () => {
        gsap.to(heading, {
          color: "white",
          textShadow: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });
      };

      heading.addEventListener("mouseenter", headingEnter);
      heading.addEventListener("mouseleave", headingLeave);

      heading._headingEnter = headingEnter;
      heading._headingLeave = headingLeave;
    });

    return () => {
      primaryBtn?.removeEventListener("mouseenter", primaryEnter);
      primaryBtn?.removeEventListener("mouseleave", primaryLeave);

      secondaryBtn?.removeEventListener(
        "mouseenter",
        secondaryEnter
      );

      secondaryBtn?.removeEventListener(
        "mouseleave",
        secondaryLeave
      );

      headings.forEach((heading) => {
        if (!heading) return;

        heading.removeEventListener(
          "mouseenter",
          heading._headingEnter
        );

        heading.removeEventListener(
          "mouseleave",
          heading._headingLeave
        );

        delete heading._headingEnter;
        delete heading._headingLeave;
      });
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-text">
        <div className="custom-text">
          <h1
            ref={(element) => {
              headingRefs.current[0] = element;
            }}
          >
            <span>Custom</span>
          </h1>
        </div>

        <div className="mechanics-text">
          <h1
            ref={(element) => {
              headingRefs.current[1] = element;
            }}
          >
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
          <div
            className="hero-btn-primary"
            ref={primaryBtnRef}
            onClick={() => navigate("/booknow")}
          >
            Book Now
          </div>

          <div
            className="hero-btn-secondary"
            ref={secondaryBtnRef}
            onClick={() => navigate("/marketplace")}
          >
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