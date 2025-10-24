import React, { useEffect, useRef, useState } from "react";
import Particles from "./components/Particles";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import TabBar from "./components/TabBar";

/**
 * Top-level layout:
 * - fade & slide reveals (not scroll-snap)
 * - right-side TabBar appears after About section
 */

export default function App() {
  const sections = ["Hero", "About", "Projects", "Experience", "Contact"];
  const containerRef = useRef(null);
  const [active, setActive] = useState("Hero");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const opts = { root: null, threshold: 0.45 };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const name = e.target.dataset.section;
        if (e.isIntersecting) {
          setActive(name);
        }
      });
    }, opts);

    const nodes = document.querySelectorAll("[data-section]");
    nodes.forEach((n) => obs.observe(n));

    // showNav when About is not visible (i.e., user scrolled past About)
    const aboutEl = document.querySelector('[data-section="About"]');
    if (aboutEl) {
      const obs2 = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          setShowNav(!e.isIntersecting); // show nav when About is NOT intersecting
        },
        { root: null, threshold: 0.3 }
      );
      obs2.observe(aboutEl);
      return () => {
        obs.disconnect();
        obs2.disconnect();
      };
    }

    return () => obs.disconnect();
  }, []);

  function scrollTo(name) {
    const el = document.querySelector(`[data-section="${name}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div style={{ minHeight: "100vh", position: "relative", background: "radial-gradient(ellipse at top left,#071026 0%,#030412 60%)" }}>
      <Particles />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        <section data-section="Hero" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <Hero onCTAClick={() => scrollTo("Projects")} />
        </section>

        <section data-section="About" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <About />
        </section>

        <section data-section="Projects" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <Projects />
        </section>

        <section data-section="Experience" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <Experience />
        </section>

        <section data-section="Contact" style={{ paddingTop: 40, paddingBottom: 80 }}>
          <ContactForm />
        </section>
      </div>

      <TabBar visible={showNav} active={active} onClick={(n) => scrollTo(n)} />
    </div>
  );
}
