import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP's MotionPath plugin
gsap.registerPlugin(MotionPathPlugin);

const Gasp = ({ carImage }) => {
  const carRef = useRef();
  const pathRef = useRef();
  const [path, setPath] = useState("");
  const [strokeWidthBg, setStrokeWidthBg] = useState(50);
  const [strokeWidthPath, setStrokeWidthPath] = useState(6);

  useEffect(() => {
    const updatePath = () => {
      const screenWidth = window.innerWidth;
      let newPath;
      if (screenWidth < 768) {
        newPath = `M 0,150 Q ${screenWidth / 2}, 50 ${screenWidth}, 150`;
        setStrokeWidthBg(30);
        setStrokeWidthPath(4);
      } else {
        newPath = `M 0,200 Q ${screenWidth / 2}, 0 ${screenWidth}, 200`;
        setStrokeWidthBg(50);
        setStrokeWidthPath(6);
      }
      setPath(newPath);
    };

    window.addEventListener("resize", updatePath);
    updatePath();

    return () => {
      window.removeEventListener("resize", updatePath);
    };
  }, []);

  useEffect(() => {
    if (carRef.current && path) {
      const pathElement = document.querySelector("#car-path");
      if (!pathElement) return;

      gsap.to(carRef.current, {
        duration: 5,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: pathElement,
          align: pathElement,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      });
    }
  }, [path]);

  return (
    <div className="w-full h-52 relative overflow-hidden bg-inherit">
      <svg width="100%" height="100%" className="absolute top-0 left-0">
        <path
          d={path}
          fill="none"
          stroke="#222"
          strokeWidth={strokeWidthBg}
          opacity="0.3"
        />
      </svg>

      <svg width="100%" height="100%" className="absolute top-0 left-0">
        <path
          id="car-path"
          ref={pathRef}
          d={path}
          fill="none"
          stroke="#222"
          strokeWidth={strokeWidthPath}
        />
      </svg>

      <img
        ref={carRef}
        src={carImage}
        alt="Car"
        className="w-16 h-18 absolute bottom-[-80px] left-0"
      />
    </div>
  );
};

export default Gasp;
