import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimatedVideoText.css";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedVideoText({
  video,
  img,
  lines = [],
}) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textLines = gsap.utils.toArray(
        ".animated-video-line"
      );

      textLines.forEach((line) => {
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
    <div className="animated-video-container">
      {video ? (
        <video
          className="animated-video-bg"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          className="animated-video-bg"
          src={img}
          alt=""
        />
      )}

      <div className="animated-video-overlay">
        <div
          ref={sectionRef}
          className="animated-video-textmain"
        >
          <h1 className="animated-video-heading">
            {lines.map((line, index) => (
              <span
                key={index}
                className="animated-video-line"
              >
                {line}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
}