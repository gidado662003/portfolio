"use client";
import { usePathname } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import HomePage from "@/components/home";
import GetToKnow from "@/components/getToKnow";
import Experience from "@/components/experience";
import RecentWorks from "@/components/recentWorks";
import Nav from "@/components/nav";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const [homeRef, homeInView] = useInView({ threshold: 0.6 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1 });
  const [recentWorksRef, recentWorksInView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (experienceInView) setActiveSection("experience");
    else if (recentWorksInView) setActiveSection("services");
  }, [homeInView, aboutInView, experienceInView]);

  return (
    <>
      <section id="home" ref={homeRef}>
        <HomePage />
      </section>
      <section id="about" ref={aboutRef}>
        <GetToKnow />
      </section>
      <section id="experience" ref={experienceRef}>
        <Experience />
      </section>
      <section id="services" ref={recentWorksRef}>
        <RecentWorks />
      </section>
      <Nav activeSection={activeSection} />
    </>
  );
}
