import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./MarketplaceBike.css";

gsap.registerPlugin(ScrollTrigger);

export default function MarketplaceBike({
  variant = "standard",
  head1,
  head2,
  para,
  image,
  primaryBtnText,
  secondbtn,
  primaryPath = "/booknow",
  secondaryPath = "/marketplace",
}) {
  const sectionRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const imageSectionRef = useRef(null);
  const headingRefs = useRef([]);

  const navigate = useNavigate();

  const setHeadingRef = (element, index) => {
    if (element) {
      headingRefs.current[index] = element;
    }
  };

  /* =========================================================
     SCROLL / ENTRANCE ANIMATIONS
  ========================================================= */
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const imageSection = imageSectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =========================
         PARALLAX VARIANT
      ========================= */
      if (variant === "parallax") {
        if (imageSection) {
          gsap.set(imageSection, {
            height: "60vh",
            overflow: "hidden",
          });

          gsap.fromTo(
            imageSection,
            {
              height: "60vh",
            },
            {
              height: "100vh",
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
                toggleActions: "play none none reverse",
              },
            }
          );

          const img = imageSection.querySelector("img");

          if (img) {
            gsap.set(img, {
              yPercent: -10,
            });

            gsap.to(img, {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }
        }

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          })
          .from(".text h1 span", {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.25,
          })
          .from(
            ".para p",
            {
              opacity: 0,
              y: 50,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .from(
            ".btnbox div",
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
            ".imagesection",
            {
              x: -100,
              opacity: 0,
              duration: 1.2,
              ease: "power4.out",
            },
            "-=0.8"
          );

        return;
      }

      /* =========================
         STANDARD VARIANT
      ========================= */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .from(".text h1 span", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.25,
        })
        .from(
          ".para p",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".btnbox div",
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
          ".imagesection",
          {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.8"
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, [variant]);

  /* =========================================================
     HOVER ANIMATIONS
  ========================================================= */
  useLayoutEffect(() => {
    const primary = primaryBtnRef.current;
    const secondary = secondaryBtnRef.current;
    const headings = [...headingRefs.current];

    const hoverIn = (element, options = {}) => {
      if (!element) return;

      gsap.to(element, {
        scale: options.scale || 1.05,
        backgroundColor:
          options.bg || "transparent",
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
        backgroundColor:
          options.bg || "transparent",
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    const primaryEnter = () => {
      hoverIn(primary, {
        bg: "rgb(255,40,40)",
        shadow:
          "0px 0px 20px rgba(255,40,40,0.8)",
      });
    };

    const primaryLeave = () => {
      hoverOut(primary, {
        bg: "rgb(255,20,20)",
      });
    };

    const secondaryEnter = () => {
      hoverIn(secondary, {
        bg: "rgba(255,255,255,0.1)",
        shadow:
          "0px 0px 15px rgba(255,255,255,0.3)",
      });
    };

    const secondaryLeave = () => {
      hoverOut(secondary, {
        bg: "transparent",
      });
    };

    primary?.addEventListener(
      "mouseenter",
      primaryEnter
    );

    primary?.addEventListener(
      "mouseleave",
      primaryLeave
    );

    secondary?.addEventListener(
      "mouseenter",
      secondaryEnter
    );

    secondary?.addEventListener(
      "mouseleave",
      secondaryLeave
    );

    headings.forEach((heading) => {
      if (!heading) return;

      const enter = () => {
        gsap.to(heading, {
          color: "#ff2828",
          textShadow:
            "0px 0px 20px rgba(255,40,40,0.6)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(heading, {
          color: "white",
          textShadow: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });
      };

      heading.addEventListener(
        "mouseenter",
        enter
      );

      heading.addEventListener(
        "mouseleave",
        leave
      );

      heading._hoverEnter = enter;
      heading._hoverLeave = leave;
    });

    return () => {
      primary?.removeEventListener(
        "mouseenter",
        primaryEnter
      );

      primary?.removeEventListener(
        "mouseleave",
        primaryLeave
      );

      secondary?.removeEventListener(
        "mouseenter",
        secondaryEnter
      );

      secondary?.removeEventListener(
        "mouseleave",
        secondaryLeave
      );

      headings.forEach((heading) => {
        if (!heading) return;

        heading.removeEventListener(
          "mouseenter",
          heading._hoverEnter
        );

        heading.removeEventListener(
          "mouseleave",
          heading._hoverLeave
        );

        delete heading._hoverEnter;
        delete heading._hoverLeave;
      });
    };
  }, []);

  /* =========================================================
     PARALLAX VARIANT
  ========================================================= */
  if (variant === "parallax") {
    return (
      <div
        className="bike-parallax-main"
        ref={sectionRef}
      >
        <div
          className="imagesection"
          ref={imageSectionRef}
          style={{
            height: "60vh",
            overflow: "hidden",
          }}
        >
          <div className="bike-parallax-image">
            <img
              src={image}
              alt="bike"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        <div className="bike-parallax-text text">
          <div className="bike-parallax-custom">
            <h1
              ref={(element) =>
                setHeadingRef(element, 0)
              }
            >
              <span>{head1}</span>
            </h1>
          </div>

          <div className="bike-parallax-mechanics">
            <h1
              ref={(element) =>
                setHeadingRef(element, 1)
              }
            >
              <span>{head2}</span>
            </h1>
          </div>

          <div className="bike-parallax-para para">
            <p>{para}</p>
          </div>

          <div className="bike-parallax-btnbox btnbox">
            <div
              className="bike-parallax-btnactive"
              ref={primaryBtnRef}
              onClick={() =>
                navigate(primaryPath)
              }
            >
              {primaryBtnText || "Book Now"}
            </div>

            <div
              className="bike-parallax-btnsecondary"
              ref={secondaryBtnRef}
              onClick={() =>
                navigate(secondaryPath)
              }
            >
              {secondbtn || "MarketPlace"}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     STANDARD VARIANT
  ========================================================= */
  return (
    <div
      className="standard-bike-main"
      ref={sectionRef}
    >
      <div className="standard-bike-text text">
        <div className="standard-bike-custom">
          <h1
            ref={(element) =>
              setHeadingRef(element, 0)
            }
          >
            <span>{head1}</span>
          </h1>
        </div>

        <div className="standard-bike-mechanics">
          <h1
            ref={(element) =>
              setHeadingRef(element, 1)
            }
          >
            <span>{head2}</span>
          </h1>
        </div>

        <div className="standard-bike-para para">
          <p>{para}</p>
        </div>

        <div className="standard-bike-btnbox btnbox">
          <div
            className="standard-bike-btnactive"
            ref={primaryBtnRef}
            onClick={() =>
              navigate(primaryPath)
            }
          >
            {primaryBtnText || "Book Now"}
          </div>

          <div
            className="standard-bike-btnsecondary"
            ref={secondaryBtnRef}
            onClick={() =>
              navigate(secondaryPath)
            }
          >
            {secondbtn || "MarketPlace"}
          </div>
        </div>
      </div>

      <div className="imagesection">
        <div className="standard-bike-image">
          <img
            src={image}
            alt="bike"
          />
        </div>
      </div>
    </div>
  );
}