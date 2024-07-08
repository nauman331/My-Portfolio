// SvgAnimation.js
import { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "../store/store";

const SvgAnimation = ({ id }) => {
  const { theme } = useTheme();
  const finalPoints = "M 10 100 Q 500 100 990 100";
  const [mouseY, setMouseY] = useState(100);
  const [mouseX, setMouseX] = useState(500);
  const [isMouseLeave, setIsMouseLeave] = useState(false);

  const handleMove = (e) => {
    const svgElement = e.currentTarget;
    const relativeMouseY = e.pageY - svgElement.offsetTop;
    const relativeMouseX = e.pageX - svgElement.offsetLeft;
    setMouseY(relativeMouseY);
    setMouseX(relativeMouseX);
    setIsMouseLeave(false);
  };

  const handleLeave = (e) => {
    setMouseY(e.pageY);
    setMouseX(e.pageX);
    setIsMouseLeave(true);
  };

  useGSAP(() => {
    const points = `M 10 100 Q ${mouseX} ${mouseY} 990 100`;
    const targetPoints = isMouseLeave ? finalPoints : points;
    const ease = isMouseLeave ? "elastic.out(1,0.2)" : "power3.out";

    gsap.to(`#svg-${id} path`, {
      attr: { d: targetPoints },
      duration: 0.3,
      ease: ease,
    });
  }, [mouseY, mouseX, isMouseLeave, id]);

  return (
    <div
      className="svg"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <svg id={`svg-${id}`} width="1000" height="160" xmlns="http://www.w3.org/2000/svg">
        <path
          d={`M 10 100 Q ${mouseX} ${mouseY} 990 100`}
          stroke={theme ? "white" : "black"}
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default SvgAnimation;
