"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={hidden ? "hidden" : ""}>
      <div className="logo-text">CETTS</div>
      <div className="tagline">Continuous Electrochemical Tailings Treatment System</div>
      <div className="bar-track">
        <div className="bar-fill"></div>
      </div>
    </div>
  );
}
