// app\page.js
"use client";
import "../app/assets/styles/index.css"
import FadeIn from './components/FadeIn';
import { Navigation } from "./components";
import { useState, useEffect } from "react";
import { Main, Home, Career, About, Contact, Testimonial, Footer, } from "./components";

export default function App() {
  const [mode, setMode] = useState('light');

  const handleModeChange = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  useEffect(() => {
    const path = window.location.pathname.replace("/", "");

    if (window.location.pathname !== "/") {
      window.history.replaceState(null, "", "/");
    }

    if (path && path !== "home") {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className={`main-container main-hero ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main mode={mode} />
        <Home />
        <Career />
        <Testimonial />
        <About />
        <Contact />
        <Footer />
      </FadeIn>
    </div>
  );
}
