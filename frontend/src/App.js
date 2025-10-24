import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", position: "relative", background: "radial-gradient(ellipse at top left,#071026 0%,#030412 60%)" }}>
        <Particles />
        <Header />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px 48px 24px", position: "relative", zIndex: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}