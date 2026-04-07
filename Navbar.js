"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav id="mainNav" className={scrolled ? "scrolled" : ""}>
      <div className="brand">CETTS</div>
      <div className="nav-links">
        <a href="#problem" onClick={(e) => { e.preventDefault(); scrollTo("problem"); }}>The Problem</a>
        <a href="#cost" onClick={(e) => { e.preventDefault(); scrollTo("cost"); }}>The Cost</a>
        <a href="#breakthrough" onClick={(e) => { e.preventDefault(); scrollTo("breakthrough"); }}>Breakthrough</a>
        <a href="#system" onClick={(e) => { e.preventDefault(); scrollTo("system"); }}>The System</a>
        <a href="#proof" onClick={(e) => { e.preventDefault(); scrollTo("proof"); }}>Proof</a>
        <button className="nav-cta" onClick={() => scrollTo("cta")}>
          Request Access
        </button>
      </div>
    </nav>
  );
}
