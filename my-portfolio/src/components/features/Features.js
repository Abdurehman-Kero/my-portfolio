import React, { useEffect, useRef } from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const container = containerRef.current;
      const track = trackRef.current;
      const wrap = container.querySelector(".works-track-wrap");
      if (!wrap) return;

      const maxTranslate = track.scrollWidth - wrap.clientWidth;

      if (maxTranslate > 0) {
        container.style.height = `${maxTranslate + window.innerHeight}px`;
      } else {
        container.style.height = 'auto';
      }

      const rect = container.getBoundingClientRect();
      const stickyOffset = 96; 
      const scrollDistance = rect.height - window.innerHeight + stickyOffset;

      let progress = 0;
      if (maxTranslate > 0 && scrollDistance > 0 && rect.top <= stickyOffset) {
        progress = Math.max(0, Math.min(1, (stickyOffset - rect.top) / scrollDistance));
      }

      if (maxTranslate > 0) {
        track.style.transform = `translateX(-${progress * maxTranslate}px)`;
      } else {
        track.style.transform = `translateX(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="features" className="works-section-container" ref={containerRef}>
      <div className="works-section-sticky">
        <div className="works-blob works-blob-l" />
        <div className="works-blob works-blob-r" />

        <div className="works-header">
          <Title title="Features" des="What I Do" />
          <div className="works-divider" />
        </div>

        <div className="works-track-wrap">
          <div className="works-track" ref={trackRef}>
            {featuresData.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 h-full"
                style={{ width: "clamp(280px, 85vw, 420px)" }}
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
