import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { HowIThink } from "@/sections/HowIThink";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <HowIThink />
      <About />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};
