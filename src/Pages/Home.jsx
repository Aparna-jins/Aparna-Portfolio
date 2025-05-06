import React from "react";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import SkillsSection from "../Components/SkillsSection";
import ProjectSection from "../Components/ProjectSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle /> <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
