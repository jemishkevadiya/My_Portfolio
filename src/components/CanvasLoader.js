import React from "react";
import { Html } from "@react-three/drei";

const CanvasLoader = () => {
  return (
    <Html center>
    <div style={{ position: "absolute", top: "100%", left: "100%", transform: "translate(-50%, -50%)" }}>
      <span style={{ color: "#fff", fontSize: "24px" }}>Loading...</span>
    </div>
    </Html>
  );
};

export default CanvasLoader;
