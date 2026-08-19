import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./LogoScrollMain.css";

import piago from "../../assets/images/piago.png";
import vespa from "../../assets/images/vespa.png";
import honda from "../../assets/images/honda.png";
import motoGuzzi from "../../assets/images/moto guzi.png";
import aprilia from "../../assets/images/aprilia.png";

gsap.registerPlugin(ScrollTrigger);

export default function LogoScroll() {
  const headingRef = useRef(null);
  const logoTrackRef = useRef(null);
  const animationRef = useRef(null);

  const logos = [
    { src: piago, alt: "Piago" },
    { src: vespa, alt: "Vespa" },
    { src: honda, alt: "Honda" },
    { src: motoGuzzi, alt: "Moto Guzzi" },
    { src: aprilia, alt: "Aprilia" },

    { src: piago, alt: "Piago" },
    { src: vespa, alt: "Vespa" },
    { src: honda, alt: "Honda" },
    { src: motoGuzzi, alt: "Moto Guzzi" },
    { src: aprilia, alt: "Aprilia" },
  ];

  useLayoutEffect(() => {
    if (!headingRef.current) return;

    const headingAnimation = gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );

    return () => {
      headingAnimation.kill();
    };
  }, []);

  useLayoutEffect(() => {
    const track = logoTrackRef.current;

    if (!track) return;

    animationRef.current = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    const pauseAnimation = () => {
      animationRef.current?.pause();
    };

    const resumeAnimation = () => {
      animationRef.current?.play();
    };

    track.addEventListener("mouseenter", pauseAnimation);
    track.addEventListener("mouseleave", resumeAnimation);

    return () => {
      track.removeEventListener("mouseenter", pauseAnimation);
      track.removeEventListener("mouseleave", resumeAnimation);

      animationRef.current?.kill();
    };
  }, []);

  const scrollingLogos = [...logos, ...logos];

  return (
    <div className="logo-scroll-main">

      <div className="logo-scroll-text">
        <h1 ref={headingRef}>
          Certified Technicians
        </h1>
      </div>

      <div className="logo-scroll-wrapper">

        <div
          className="logo-scroll-logo"
          ref={logoTrackRef}
        >
          {scrollingLogos.map((logo, index) => (
            <div
              className="logo-item"
              key={index}
            >
              <img
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}