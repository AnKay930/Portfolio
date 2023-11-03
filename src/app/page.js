import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
const home = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <did className="container mt-24 mx-auto px-4">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
        </did>
      </div>
    </>
  );
};

export default home;
