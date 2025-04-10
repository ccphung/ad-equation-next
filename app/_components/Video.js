"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Video() {
  const containerRef = useRef(null);
  const mainControls = useAnimation();
  const videoRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3100);
      return () => clearTimeout(timer);
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 1200);

      return () => clearTimeout(timer);
    }
    setIsVisible(true);
  }, [isInView]);

  return (
    <div className="flex justify-center relative">
      <video width="600" muted ref={videoRef}>
        <track default kind="captions" />
        <source src="/videos/porto2.mp4" type="video/mp4" />
        Une erreur s est produite
      </video>

      {isVisible && (
        <div className="absolute w-8 z-20 top-[-28%] right-[35%] sm:top-[0%] sm:right-[50%]">
          <motion.img
            src="/images/icons/plane-icon.svg"
            alt=""
            ref={containerRef}
            initial="hidden"
            animate={mainControls}
            variants={{
              hidden: { opacity: 1, y: 120, x: 190, rotate: 220 },
              visible: { opacity: 1, y: 330, x: -50, rotate: 180 },
            }}
            transition={{ duration: 3.7 }}
          />
        </div>
      )}
    </div>
  );
}

export default Video;
