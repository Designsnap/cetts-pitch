"use client";

import { useEffect } from "react";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Disasters from "../components/sections/Disasters";
import CostOfInaction from "../components/sections/CostOfInaction";
import Bottleneck from "../components/sections/Bottleneck";
import Breakthrough from "../components/sections/Breakthrough";
import SystemViewer from "../components/sections/SystemViewer";
import ValueRecovery from "../components/sections/ValueRecovery";
import Proof from "../components/sections/Proof";
import ScalePath from "../components/sections/ScalePath";
import CTA from "../components/sections/CTA";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  useEffect(() => {
    // Section reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Disasters />
      <SectionDivider />
      <CostOfInaction />
      <SectionDivider />
      <Bottleneck />
      <SectionDivider />
      <Breakthrough />
      <SectionDivider />
      <SystemViewer />
      <SectionDivider />
      <ValueRecovery />
      <SectionDivider />
      <Proof />
      <SectionDivider />
      <ScalePath />
      <SectionDivider />
      <CTA />
      <Footer />
    </>
  );
}
