"use client";
import React, {useEffect} from "react";
import FOG from "vanta/src/vanta.fog";

export default function VantaClouds() {
  useEffect(() => {
    // Load Three.js script dynamically
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
    );

    threeScript.onload = () => {
      // Initialize Vanta.js after Three.js is loaded
      const vantaEffect = FOG({
        el: "#vanta",
        THREE: window.THREE, // Ensure THREE is available globally
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x41,
        midtoneColor: 0x1c48,
        lowlightColor: 0x3004a,
        baseColor: 0x666666,
        blurFactor: 0.46,
      });

      // Cleanup function to destroy the Vanta.js effect on unmount
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    };

    document.head.appendChild(threeScript);

    // Cleanup function to remove the script tag on unmount
    return () => {
      document.head.removeChild(threeScript);
    };
  }, []);

  return (
    <div>
      <div id="vanta"   style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}></div>
    </div>
  );
}
