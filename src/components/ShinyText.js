import React, { useEffect, useRef } from "react";
import "./ShinyText.css"; 

const ShinyText = ({ text, speed = 2, className = "" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (textRef.current) {
        const currentTime = Date.now();
        const offset = (currentTime / (speed * 100)) % 200; 
        textRef.current.style.backgroundPosition = `${offset}px 0`;
      }
      requestAnimationFrame(animate); 
    };
    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return (
    <span
      ref={textRef}
      className={`shiny-text ${className}`}
      data-text={text} 
      style={{ display: "inline-block", position: "relative" }}
    >
      {text}
    </span>
  );
};

export default ShinyText;