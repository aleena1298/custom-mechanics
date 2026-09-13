import "./MainServiceBox.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import engine from "../../assets/images/engine.png";
import desbike from "../../assets/images/desbike.png";
import tyre from "../../assets/images/tire.png";
import desengine from "../../assets/images/desengine.png";

gsap.registerPlugin(ScrollTrigger);

export default function MainServiceBox() {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const services = gsap.utils.toArray(".subservice");

      services.forEach((service) => {
        const heading = service.querySelector("h1");
        const image = service.querySelector("img");

        gsap.fromTo(
          heading,
          {
            x: 500,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: service,
              start: "top 80%",
              end: "top 40%",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          image,
          {
            y: 100,
            scale: 0.9,
            opacity: 0.2,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: service,
              start: "top 80%",
              end: "top 40%",
              scrub: 1,
            },
          },
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div id="services" ref={sectionRef} className="main-service-box">
      <div className="subservice">
        <h1>ENGINE REPAIR</h1>
        <img src={engine} alt="Engine" />
      </div>
      <div className="subservice">
        <h1>BIKE DIAGNOSTIC</h1>
        <img src={desbike} alt="Desbikee" />
      </div>
      <div className="subservice">
        <h1>TYRE SERVICE</h1>
        <img src={tyre} alt="Tyre" />
      </div>
      <div className="subservice">
        <h1>OIL CHANGE</h1>
        <img src={desengine} alt="Desengine" />
      </div>
    </div>
  );
}
