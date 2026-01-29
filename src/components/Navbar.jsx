import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown, CheckCircle, Menu, X } from "lucide-react";
import { styles } from "../styles";
import { useNavigate, useLocation } from "react-router-dom";
import { LANGUAGES_CONFIG } from '../constants';

const Navbar = ({ isScrolled: propIsScrolled, scrollToSection }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localScrolled, setLocalScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const scrolled =
    propIsScrolled !== undefined ? propIsScrolled : localScrolled;

  const languages = LANGUAGES_CONFIG;

  const currentLang =
    languages.find((l) => i18n.language?.startsWith(l.code)) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setLocalScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const selectLanguage = (lang) => {
    const currentPath = location.pathname;
    let newPath = currentPath;

    // Check if path starts with language code (e.g. /en, /en/, /en/consultation)
    if (currentPath.match(/^\/[a-z]{2}(\/|$)/)) {
       newPath = currentPath.replace(/^\/[a-z]{2}/, `/${lang.code}`);
    } else {
       // Fallback if somehow we are at a path without lang (unlikely with current routing)
       // Ensure we don't double slash
       const path = currentPath.startsWith('/') ? currentPath : '/' + currentPath;
       newPath = `/${lang.code}${path === '/' ? '' : path}`;
    }

    navigate(newPath);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (scrollToSection) {
      scrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  const navStyle = {
    position: "fixed",
    width: "100%",
    zIndex: 950,
    transition: "all 0.3s ease",
    padding: scrolled || isMenuOpen ? "12px 0" : "24px 0",
    backgroundColor:
      scrolled || isMenuOpen ? "rgba(255, 255, 255, 0.95)" : "transparent",
    backdropFilter: scrolled || isMenuOpen ? "blur(12px)" : "none",
    boxShadow:
      scrolled || isMenuOpen ? "0 1px 2px 0 rgba(0, 0, 0, 0.05)" : "none",
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={styles.container}>
          <div style={styles.navContent}>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              style={{
                textDecoration: "none",
              }}
            >
              <div style={styles.logoContainer}>
                <img
                  src="/blue-logo.svg"
                  alt="K10 Logo"
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                />
                <span
                  className={`brand-text ${
                    scrolled || isMenuOpen
                      ? "brand-text-scrolled"
                      : "brand-text-transparent"
                  }`}
                  style={styles.brandName}
                >
                  {t("brandName")}
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="desktop-nav">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-slate-300 hover-blue"
                style={{
                  textDecoration: "none",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
              >
                {t("nav.home")}
              </a>
              <a
                href="#job-seekers"
                onClick={(e) => handleNavClick(e, "job-seekers")}
                className="text-slate-300 hover-blue"
                style={{
                  textDecoration: "none",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
              >
                {t("nav.forWorkers")}
              </a>
              <a
                href="#companies"
                onClick={(e) => handleNavClick(e, "companies")}
                className="text-slate-300 hover-blue"
                style={{
                  textDecoration: "none",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
              >
                {t("nav.forCompanies")}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="text-slate-300 hover-blue"
                style={{
                  textDecoration: "none",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
              >
                {t("nav.contact")}
              </a>

              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  style={{
                    ...styles.langButton,
                    backgroundColor: isLangMenuOpen
                      ? "rgba(255, 255, 255, 0.1)"
                      : "transparent",
                    color: isLangMenuOpen ? "#60a5fa" : "inherit",
                  }}
                  className="text-slate-300 hover-blue"
                >
                  <Globe size={18} />
                  <span style={{ textTransform: "uppercase" }}>
                    {currentLang.code}
                  </span>
                  <ChevronDown
                    size={14}
                    style={{
                      transform: isLangMenuOpen
                        ? "rotate(180deg)"
                        : "rotate(0)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                {isLangMenuOpen && (
                  <div style={styles.dropdown} className="fade-in">
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        color: "#94a3b8",
                        padding: "8px 16px",
                        textTransform: "uppercase",
                      }}
                    >
                      {t("nav.selectLanguage")}
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "8px 16px",
                          fontSize: "0.875rem",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor:
                            currentLang.code === lang.code
                              ? "#eff6ff"
                              : "transparent",
                          color:
                            currentLang.code === lang.code
                              ? "#2563eb"
                              : "#475569",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <span>{lang.native}</span>
                        {currentLang.code === lang.code && (
                          <CheckCircle size={14} />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => navigate(`/${currentLang.code}/consultation`)}
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "8px 24px",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px -1px rgba(37, 99, 235, 0.2)",
                }}
              >
                {t("nav.startNow")}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div
              className="mobile-nav-btn"
              style={{ alignItems: "center", gap: "12px", zIndex: 1000 }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid",
                  color: scrolled || isMenuOpen ? "#0f172a" : "white",
                  borderColor:
                    scrolled || isMenuOpen
                      ? "#e2e8f0"
                      : "rgba(255,255,255,0.3)",
                  backgroundColor:
                    scrolled || isMenuOpen
                      ? "#f8fafc"
                      : "rgba(255,255,255,0.1)",
                }}
              >
                {currentLang.code}
              </div>
              <button
                onClick={toggleMenu}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                {isMenuOpen ? (
                  <X color="#0f172a" size={28} />
                ) : (
                  <Menu color={scrolled ? "#0f172a" : "white"} size={28} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div
          className="mobile-menu slide-in-right"
          style={{
            position: "fixed",
            inset: 0,
            top: "60px",
            backgroundColor: "white",
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            padding: "24px",
          }}
        >
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1e293b",
                padding: "8px 0",
                borderBottom: "1px solid #f1f5f9",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {t("nav.home")}
            </a>
            <a
              href="#job-seekers"
              onClick={(e) => handleNavClick(e, "job-seekers")}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1e293b",
                padding: "8px 0",
                borderBottom: "1px solid #f1f5f9",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {t("nav.forWorkers")}
            </a>
            <a
              href="#companies"
              onClick={(e) => handleNavClick(e, "companies")}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1e293b",
                padding: "8px 0",
                borderBottom: "1px solid #f1f5f9",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {t("nav.forCompanies")}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1e293b",
                padding: "8px 0",
                borderBottom: "1px solid #f1f5f9",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {t("nav.contact")}
            </a>
          </nav>

          <div style={{ marginTop: "24px" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                color: "#94a3b8",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {t("nav.selectLanguage")}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang)}
                  style={{
                    textAlign: "left",
                    padding: "12px",
                    borderRadius: "12px",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    backgroundColor:
                      currentLang.code === lang.code ? "#eff6ff" : "#f8fafc",
                    color:
                      currentLang.code === lang.code ? "#1d4ed8" : "#475569",
                    border:
                      currentLang.code === lang.code
                        ? "1px solid #bfdbfe"
                        : "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      backgroundColor:
                        currentLang.code === lang.code ? "#bfdbfe" : "#e2e8f0",
                      color:
                        currentLang.code === lang.code ? "#1e40af" : "#64748b",
                    }}
                  >
                    {lang.code}
                  </span>
                  {lang.native}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate(`/${currentLang.code}/consultation`)}
            style={{
              marginTop: "auto",
              backgroundColor: "#1e3a8a",
              color: "white",
              padding: "16px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "1.125rem",
              border: "none",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            {t("nav.startNow")}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
