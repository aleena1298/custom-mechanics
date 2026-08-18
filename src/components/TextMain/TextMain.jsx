import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TextMain.css";

gsap.registerPlugin(ScrollTrigger);

export default function TextMain() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".text-main-line");

      lines.forEach((line) => {
        gsap.fromTo(
          line,
          {
            backgroundSize: "0% 100%",
          },
          {
            backgroundSize: "100% 100%",
            ease: "none",

            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 40%",
              scrub: 2,
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="text-main">
      <h1 className="text-main-heading">
        <span className="text-main-line">
        FAST-TRACK YOUR
        </span>

        <span className="text-main-line">
          TCD TESTING
        </span>

        <span className="text-main-line">
          AND RENEWAL
        </span>

        <span className="text-main-line">
          WITH CUSTOM 
        </span>

        <span className="text-main-line">
          MECHANICS
        </span>
      </h1>
    </section>
  );
}