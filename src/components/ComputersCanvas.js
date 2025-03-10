import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import "./ComputersCanvas.css";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/gaming_desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.20} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={scene}
        scale={isMobile ? 0.6 : 1.3}
        position={isMobile ? [0, -1, -1] : [0, -4.4, -2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = () => {
    setShowHint(false);
  };

  return (
    <div className="canvas-wrapper">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
        onPointerDown={handleInteraction}
        aria-label="Interactive 3D model, drag to rotate"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>

      {showHint && (
        <div className="interaction-hint">
          <div className="hint-content">
            <span className="hint-text">Drag to Rotate</span>
            <div className="hint-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  fill="#ffffff"
                />
                <path
                  d="M15 9h-2.5l-1 2h1.5l-1 2h2l1-2h-1.5l1-2zm-6 0h2.5l1 2h-1.5l1 2h-2l-1-2h1.5l-1-2z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComputersCanvas;