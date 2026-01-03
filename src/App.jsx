import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import { styles } from "./styles";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import CostComparison from "./components/CostComparison";
import JobSearch from "./components/JobSearch";
import Housing from "./components/Housing";
import VisaServices from "./components/VisaServices";
import JobSeekerHeader from "./components/JobSeekerHeader";
import CompanySolutions from "./components/CompanySolutions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "job-seekers", "companies", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={styles.wrapper}>
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        changeLanguage={changeLanguage}
        lang={lang}
      />

      <div id="home">
        <Hero scrollToSection={scrollToSection} />
      </div>

      <div id="services">
        <Problem />
        <CostComparison />
      </div>

      <div id="job-seekers">
        <JobSeekerHeader />
        <JobSearch />
        <Housing />
        <VisaServices />
      </div>

      <div id="companies">
        <CompanySolutions scrollToSection={scrollToSection} />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
