import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  const [isHovered, setIsHovered] = useState(false); 
  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length || 1; 
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  useEffect(() => {
    console.log("Autoplay:", autoplay, "PauseOnHover:", pauseOnHover, "Images:", images);
  }, [autoplay, pauseOnHover, images]);

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current); 
    console.log("Starting autoplay interval");
    autoplayRef.current = setInterval(() => {
      const newRotation = rotation.get() - 360 / faceCount;
      controls.start({
        rotateY: newRotation,
        transition: { duration: 2, ease: "linear" },
      }).then(() => {
        rotation.set(newRotation); 
      });
    }, 2000);
  };

  useEffect(() => {
    if (autoplay && !isHovered) {
      startAutoplay();
    }
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, isHovered, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      console.log("Pausing autoplay on hover");
      setIsHovered(true);
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      console.log("Resuming autoplay after hover");
      setIsHovered(false);
    }
  };

  const handleImageError = (e) => {
    console.error("Failed to load image:", e.target.src);
    e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found"; 
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.length > 0 ? (
            images.map((image, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                }}
              >
                <img
                  src={image}
                  alt={`Certificate/Award ${i + 1}`}
                  className="gallery-img"
                  onError={handleImageError}
                />
              </div>
            ))
          ) : (
            <p>No images available</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;