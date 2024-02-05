"use client";
import { useRef } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skill from "@/components/skill";
import Projects from "@/components/project";
import Footers from "@/components/footers";
import SocialMedia from "@/components/socialMedia";
import Navbar from "@/components/navbar";

export default function Home() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  const handleAboutClick = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleSkillClick = () => {
    if (skillRef.current) {
      window.scrollTo({
        top: skillRef.current.offsetTop + 100,
        behavior: "smooth",
      });
    }
  };

  const handleProjectClick = () => {
    if (projectRef.current) {
      window.scrollTo({
        top: projectRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full h-auto overflow-hidden bg-[#060817]">
      <nav className="w-full flex justify-center text-white  ">
        <Navbar
          handleAboutClick={handleAboutClick}
          handleSkillClick={handleSkillClick}
          handleProjectClick={handleProjectClick}
        />
      </nav>
      <SocialMedia />
      <Hero />
      <About ref={aboutRef} />
      <Skill ref={skillRef} />
      <Projects ref={projectRef} />
      <Footers />
    </main>
  );
}
