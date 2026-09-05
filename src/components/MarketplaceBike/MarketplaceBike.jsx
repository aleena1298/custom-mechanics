// MarketplaceBike.jsx

import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./MarketplaceBike.css";

gsap.registerPlugin(ScrollTrigger);

export default function MarketplaceBike(props) {
  if (props.variant === "parallax") {
    return <ParallaxMarketplaceBike {...props} />;
  }

  return <StandardMarketplaceBike {...props} />;
}

/* =========================================================
   SHARED HOVER HELPERS
========================================================= */

function animateButtonIn(
  element,
  {
    backgroundColor = "transparent",
    boxShadow = "0px 0px 15px rgba(255, 40, 40, 0.6)",
  } = {}
) {
  if (!element) return;

  gsap.to(element, {
    scale: 1.05,
    backgroundColor,
    boxShadow,
    duration: 0.3,
    ease: "power2.out",
    overwrite: true,
  });
}

function animateButtonOut(
  element,
  { backgroundColor = "transparent" } = {}
) {
  if (!element) return;

  gsap.to(element, {
    scale: 1,
    backgroundColor,
    boxShadow: "none",
    duration: 0.3,
    ease: "power2.inOut",
    overwrite: true,
  });
}

function animateHeadingIn(element) {
  gsap.to(element, {
    color: "#ff2828",
    textShadow: "0px 0px 20px rgba(255,40,40,0.6)",
    duration: 0.3,
    ease: "power2.out",
    overwrite: true,
  });
}

function animateHeadingOut(element) {
  gsap.to(element, {
    color: "#fff",
    textShadow: "none",
    duration: 0.3,
    ease: "power2.inOut",
    overwrite: true,
  });
}

/* =========================================================
   STANDARD
   Original production component: Fr / 182yl
========================================================= */

function StandardMarketplaceBike({
  head1,
  head2,
  para,
  image,
  primaryBtnText = "Purchase",
  secondaryBtnText = "Buy Accessories",
}) {
  const sectionRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const headingRefs = useRef([]);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useHoverEffects({
    primaryBtnRef,
    secondaryBtnRef,
    headingRefs,
  });

  return (
    <div
      ref={sectionRef}
      className="marketplace-bike marketplace-bike--standard"
    >
      <div className="marketplace-bike-text text">
        <BikeText
          head1={head1}
          head2={head2}
          para={para}
          primaryBtnText={primaryBtnText}
          secondaryBtnText={secondaryBtnText}
          headingRefs={headingRefs}
          primaryBtnRef={primaryBtnRef}
          secondaryBtnRef={secondaryBtnRef}
          navigate={navigate}
        />
      </div>

      <div className="marketplace-bike-image-section imagesection">
        <div className="marketplace-bike-image">
          <img src={image} alt={`${head1} ${head2}`} />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PARALLAX
   Original production component: li / odapg
========================================================= */

function ParallaxMarketplaceBike({
  head1,
  head2,
  para,
  image,
  primaryBtnText = "Purchase",
  secondaryBtnText = "Buy Accessories",
}) {
  const sectionRef = useRef(null);
  const imageSectionRef = useRef(null);

  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const headingRefs = useRef([]);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const imageSection = imageSectionRef.current;

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
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
              toggleActions: "play none none reverse",
            },
          }
        );

        const bikeImage = imageSection.querySelector("img");

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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useHoverEffects({
    primaryBtnRef,
    secondaryBtnRef,
    headingRefs,
  });

  return (
    <div
      ref={sectionRef}
      className="marketplace-bike marketplace-bike--parallax"
    >
      <div
        ref={imageSectionRef}
        className="marketplace-bike-image-section imagesection"
        style={{
          height: "60vh",
          overflow: "hidden",
        }}
      >
        <div className="marketplace-bike-image">
          <img
            src={image}
            alt={`${head1} ${head2}`}
            className="marketplace-bike-parallax-image"
          />
        </div>
      </div>

      <div className="marketplace-bike-text text">
        <BikeText
          head1={head1}
          head2={head2}
          para={para}
          primaryBtnText={primaryBtnText}
          secondaryBtnText={secondaryBtnText}
          headingRefs={headingRefs}
          primaryBtnRef={primaryBtnRef}
          secondaryBtnRef={secondaryBtnRef}
          navigate={navigate}
        />
      </div>
    </div>
  );
}

/* =========================================================
   SHARED CONTENT
========================================================= */

function BikeText({
  head1,
  head2,
  para,
  primaryBtnText,
  secondaryBtnText,
  headingRefs,
  primaryBtnRef,
  secondaryBtnRef,
  navigate,
}) {
  return (
    <>
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
          ref={primaryBtnRef}
          className="marketplace-bike-primary"
          onClick={() => navigate("/booknow")}
        >
          {primaryBtnText}
        </div>

        <div
          ref={secondaryBtnRef}
          className="marketplace-bike-secondary"
          onClick={() => navigate("/accessories")}
        >
          {secondaryBtnText}
        </div>
      </div>
    </>
  );
}

/* =========================================================
   SHARED HOVER EFFECTS
========================================================= */

function useHoverEffects({
  primaryBtnRef,
  secondaryBtnRef,
  headingRefs,
}) {
  useLayoutEffect(() => {
    const primary = primaryBtnRef.current;
    const secondary = secondaryBtnRef.current;

    const primaryEnter = () =>
      animateButtonIn(primary, {
        backgroundColor: "rgb(255,40,40)",
        boxShadow: "0px 0px 20px rgba(255,40,40,0.8)",
      });

    const primaryLeave = () =>
      animateButtonOut(primary, {
        backgroundColor: "rgb(255,20,20)",
      });

    const secondaryEnter = () =>
      animateButtonIn(secondary, {
        backgroundColor: "rgba(255,255,255,0.1)",
        boxShadow: "0px 0px 15px rgba(255,255,255,0.3)",
      });

    const secondaryLeave = () =>
      animateButtonOut(secondary, {
        backgroundColor: "transparent",
      });

    primary?.addEventListener("mouseenter", primaryEnter);
    primary?.addEventListener("mouseleave", primaryLeave);

    secondary?.addEventListener("mouseenter", secondaryEnter);
    secondary?.addEventListener("mouseleave", secondaryLeave);

    const headingHandlers = headingRefs.current
      .filter(Boolean)
      .map((heading) => {
        const enter = () => animateHeadingIn(heading);
        const leave = () => animateHeadingOut(heading);

        heading.addEventListener("mouseenter", enter);
        heading.addEventListener("mouseleave", leave);

        return { heading, enter, leave };
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

      headingHandlers.forEach(({ heading, enter, leave }) => {
        heading.removeEventListener("mouseenter", enter);
        heading.removeEventListener("mouseleave", leave);
      });
    };
  }, [primaryBtnRef, secondaryBtnRef, headingRefs]);
}