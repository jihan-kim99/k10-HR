import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import { styles } from "./styles";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ConsultationPage from "./pages/ConsultationPage";

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
    } else {
       // Optional: Navigate to home if element not found (requires useNavigate which isn't available here directly,
       // but we could use window.location or structure components differently.
       // For now, we leave it as is to avoid complex refactoring not requested).
       if (window.location.pathname !== "/") {
           window.location.href = "/#" + id;
       }
    }
  };

  return (
    <BrowserRouter>
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

        <Routes>
          <Route path="/" element={<Home scrollToSection={scrollToSection} />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Routes>

        <Footer scrollToSection={scrollToSection} />
      </div>
    </BrowserRouter>
  );
};

export default App;
