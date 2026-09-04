import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./MarketplaceBike.css";

gsap.registerPlugin(ScrollTrigger);

export default function MarketplaceBike({
  head1,
  head2,
  para,
  image,
  primaryBtnText = "Book Now",
  secondbtn = "MarketPlace",
  variant = "standard",
}) {
  const sectionRef = useRef(null);
  const imageSectionRef = useRef(null);

  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);

  const headingRefs = useRef([]);

  const navigate = useNavigate();

  const isParallax = variant === "parallax";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * PARALLAX VARIANT ONLY
       *
       * Original second component:
       * image wrapper:
       * 60vh -> 100vh
       *
       * image:
       * yPercent -10 -> 10
       */
      if (isParallax && imageSectionRef.current) {
        const imageSection = imageSectionRef.current;
        const bikeImage = imageSection.querySelector("img");

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
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
              toggleActions: "play none none reverse",
            },
          }
        );

        if (bikeImage) {
          gsap.set(bikeImage, {
            yPercent: -10,
          });

          gsap.to(bikeImage, {
            yPercent: 10,
            ease: "none",

            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }
      }

      /*
       * MAIN ENTRANCE ANIMATION
       */
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",

          /*
           * Original:
           * standard = play none none none
           * parallax = play none none reverse
           */
          toggleActions: isParallax
            ? "play none none reverse"
            : "play none none none",
        },
      });

      timeline
        .from(".marketplace-bike-text h1 span", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.25,
        })

        .from(
          ".marketplace-bike-para p",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )

        .from(
          ".marketplace-bike-buttons div",
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
          ".marketplace-bike-image-section",
          {
            /*
             * standard image comes from right
             * parallax image comes from left
             */
            x: isParallax ? -100 : 100,

            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.8"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isParallax]);

  /*
   * BUTTON + HEADING HOVERS
   */
  useLayoutEffect(() => {
    const primary = primaryBtnRef.current;
    const secondary = secondaryBtnRef.current;

    const hoverIn = (element, options = {}) => {
      if (!element) return;

      gsap.to(element, {
        scale: options.scale ?? 1.05,
        backgroundColor: options.bg ?? "transparent",

        boxShadow:
          options.shadow ??
          "0px 0px 15px rgba(255, 40, 40, 0.6)",

        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hoverOut = (element, options = {}) => {
      if (!element) return;

      gsap.to(element, {
        scale: 1,
        backgroundColor: options.bg ?? "transparent",
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    const primaryEnter = () => {
      hoverIn(primary, {
        bg: "rgb(255,40,40)",
        shadow: "0px 0px 20px rgba(255,40,40,0.8)",
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
        shadow: "0px 0px 15px rgba(255,255,255,0.3)",
      });
    };

    const secondaryLeave = () => {
      hoverOut(secondary, {
        bg: "transparent",
      });
    };

    primary?.addEventListener("mouseenter", primaryEnter);
    primary?.addEventListener("mouseleave", primaryLeave);

    secondary?.addEventListener("mouseenter", secondaryEnter);
    secondary?.addEventListener("mouseleave", secondaryLeave);

    const headingListeners = [];

    headingRefs.current.forEach((heading) => {
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

      headingListeners.push({
        heading,
        headingEnter,
        headingLeave,
      });
    });

    return () => {
      primary?.removeEventListener("mouseenter", primaryEnter);
      primary?.removeEventListener("mouseleave", primaryLeave);

      secondary?.removeEventListener(
        "mouseenter",
        secondaryEnter
      );

      secondary?.removeEventListener(
        "mouseleave",
        secondaryLeave
      );

      headingListeners.forEach(
        ({
          heading,
          headingEnter,
          headingLeave,
        }) => {
          heading.removeEventListener(
            "mouseenter",
            headingEnter
          );

          heading.removeEventListener(
            "mouseleave",
            headingLeave
          );
        }
      );
    };
  }, []);

  const textContent = (
    <div className="marketplace-bike-text text">

      <div className="marketplace-bike-brand">
        <h1
          ref={(element) => {
            headingRefs.current[0] = element;
          }}
        >
          <span>{head1}</span>
        </h1>
      </div>

      <div className="marketplace-bike-model">
        <h1
          ref={(element) => {
            headingRefs.current[1] = element;
          }}
        >
          <span>{head2}</span>
        </h1>
      </div>

      <div className="marketplace-bike-para para">
        <p>{para}</p>
      </div>

      <div className="marketplace-bike-buttons btnbox">
        <div
          className="marketplace-bike-primary"
          ref={primaryBtnRef}
          onClick={() => navigate("/booknow")}
        >
          {primaryBtnText}
        </div>

        <div
          className="marketplace-bike-secondary"
          ref={secondaryBtnRef}
          onClick={() => navigate("/accessories")}
        >
          {secondbtn}
        </div>
      </div>

    </div>
  );

  const imageContent = (
    <div
      ref={imageSectionRef}
      className="marketplace-bike-image-section imagesection"
    >
      <div className="marketplace-bike-image">

        <img
          src={image}
          alt={`${head1} ${head2}`}
          style={
            isParallax
              ? {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }
              : undefined
          }
        />

      </div>
    </div>
  );

  return (
    <div
      ref={sectionRef}
      className={`marketplace-bike ${
        isParallax
          ? "marketplace-bike--parallax"
          : "marketplace-bike--standard"
      }`}
    >
      {isParallax ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
}