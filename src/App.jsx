import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Shield,
  Globe,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Building2,
  TrendingUp,
  AlertTriangle,
  Menu,
  X,
  Smartphone,
  Award,
  ChevronDown,
} from "lucide-react";

const K10GlobalHR = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    { code: "zh", label: "Chinese", native: "中文" },
    { code: "en", label: "English", native: "English" },
    { code: "ko", label: "Korean", native: "한국어" },
    { code: "ja", label: "Japanese", native: "日本語" },
    { code: "mn", label: "Mongolian", native: "Монгол" },
    { code: "vi", label: "Vietnamese", native: "Tiếng Việt" },
    { code: "ru", label: "Russian", native: "Русский" },
  ];

  const currentLang =
    languages.find((l) => i18n.language?.startsWith(l.code)) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang.code);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);
  };

  // Styles
  const styles = {
    wrapper: {
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: "#1e293b",
      backgroundColor: "white",
      overflowX: "hidden",
      minHeight: "100vh",
    },
    nav: {
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
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    navContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    logoBox: {
      width: "40px",
      height: "40px",
      backgroundColor: "#1e3a8a",
      borderRadius: "0 12px 0 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logoText: {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.25rem",
    },
    brandName: {
      fontWeight: "bold",
      fontSize: "1.25rem",
      letterSpacing: "-0.025em",
      // Color handled by class for responsiveness
    },
    langButton: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      padding: "4px 12px",
      borderRadius: "9999px",
      backgroundColor: isLangMenuOpen
        ? "rgba(255, 255, 255, 0.1)"
        : "transparent",
      color: isLangMenuOpen ? "#60a5fa" : "inherit",
      border: "none",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: "600",
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      right: 0,
      marginTop: "8px",
      width: "192px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      border: "1px solid #f1f5f9",
      padding: "8px 0",
      overflow: "hidden",
      zIndex: 60,
    },
    hero: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "80px",
      backgroundColor: "#0f172a",
      overflow: "hidden",
    },
    heroBg: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
    },
    heroImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.3,
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(30, 58, 138, 0.4), rgba(15, 23, 42, 0.8), #0f172a)",
    },
    heroContent: {
      position: "relative",
      zIndex: 20,
      maxWidth: "896px",
    },
    badge: {
      display: "inline-block",
      padding: "4px 12px",
      marginBottom: "24px",
      border: "1px solid rgba(96, 165, 250, 0.3)",
      borderRadius: "9999px",
      backgroundColor: "rgba(30, 58, 138, 0.3)",
      backdropFilter: "blur(4px)",
    },
    badgeText: {
      color: "#93c5fd",
      fontSize: "0.875rem",
      fontWeight: "600",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    heroTitle: {
      fontWeight: "bold",
      color: "white",
      marginBottom: "24px",
      lineHeight: 1.1,
    },
    gradientText: {
      background: "linear-gradient(to right, #60a5fa, #67e8f9)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    heroDesc: {
      color: "#cbd5e1",
      marginBottom: "40px",
      maxWidth: "672px",
      lineHeight: 1.6,
    },
    buttonGroup: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
    },
    section: {
      // Padding handled by CSS class
    },
    sectionTitle: {
      fontSize: "2.25rem",
      fontWeight: "bold",
      color: "#0f172a",
      marginBottom: "16px",
    },
    subTitle: {
      fontSize: "0.875rem",
      fontWeight: "bold",
      color: "#ef4444",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: "8px",
    },
    card: {
      backgroundColor: "white",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      border: "1px solid #f1f5f9",
      transition: "transform 0.3s ease",
    },
    iconBox: {
      width: "56px",
      height: "56px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "24px",
    },
    footer: {
      backgroundColor: "#020617",
      color: "#94a3b8",
      padding: "64px 0",
      borderTop: "1px solid #0f172a",
    },
  };

  const css = `
    /* Reset & Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    
    /* Responsive Layouts */
    .desktop-nav { display: none; }
    .mobile-nav-btn { display: flex; }
    .mobile-menu { display: flex; }
    .hero-title { font-size: 2rem; }
    .hero-desc { font-size: 1rem; }
    .section-padding { padding: 48px 0; }
    .cta-title { font-size: 2rem; }
    .cta-desc { font-size: 1rem; }
    .grid-cols-1 { display: grid; grid-template-columns: 1fr; gap: 24px; }
    .flex-col-mobile { flex-direction: column; }
    .brand-text { color: #0f172a; }
    
    @media (min-width: 768px) {
      .desktop-nav { display: flex; align-items: center; gap: 24px; }
      .mobile-nav-btn { display: none; }
      .mobile-menu { display: none; }
      .hero-title { font-size: 4.5rem; }
      .hero-desc { font-size: 1.25rem; }
      .section-padding { padding: 96px 0; }
      .cta-title { font-size: 3rem; }
      .cta-desc { font-size: 1.25rem; }
      .md-grid-2 { grid-template-columns: 1fr 1fr; gap: 48px; }
      .md-grid-3 { grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
      .md-grid-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
      .flex-row-md { flex-direction: row; }
      .w-half-md { width: 50%; }
      .brand-text-scrolled { color: #0f172a; }
      .brand-text-transparent { color: white; }
      
      .btn-primary { padding: 12px 32px; font-size: 1.125rem; }
      .btn-outline { padding: 12px 32px; font-size: 1.125rem; }
    }

    /* Utilities */
    .text-slate-600 { color: #475569; }
    .text-slate-300 { color: #cbd5e1; }
    .hover-blue:hover { color: #3b82f6; cursor: pointer; }
    
    /* Buttons */
    .btn-primary {
      background-color: #2563eb;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
      box-shadow: 0 10px 15px -3px rgba(30, 58, 138, 0.5);
      border: none;
      cursor: pointer;
    }
    .btn-primary:hover { background-color: #1d4ed8; transform: translateY(-1px); }
    .btn-primary:active { background-color: #1e40af; transform: translateY(0); }

    .btn-outline {
      background-color: transparent;
      border: 1px solid #475569;
      color: #cbd5e1;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.2s;
      cursor: pointer;
    }
    .btn-outline:hover { background-color: rgba(255,255,255,0.05); border-color: white; color: white; }

    /* Cards */
    .feature-card:hover { transform: translateY(-4px); }
    .bg-red-50 { background-color: #fef2f2; }
    .bg-orange-50 { background-color: #fff7ed; }
    .text-red-500 { color: #ef4444; }
    .text-orange-500 { color: #f97316; }

    /* Animations */
    @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
    .slide-in-right { animation: slideInRight 0.2s ease-out; }
    
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    .fade-in { animation: fadeIn 0.2s ease-out; }
  `;

  return (
    <div style={styles.wrapper}>
      <style>{css}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.container}>
          <div style={styles.navContent}>
            <div style={styles.logoContainer}>
              <div style={styles.logoBox}>
                <span style={styles.logoText}>K10</span>
              </div>
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

            {/* Desktop Nav */}
            <div className="desktop-nav">
              <a
                href="#solutions"
                className="text-slate-300 hover-blue"
                style={{ textDecoration: "none", transition: "color 0.2s" }}
              >
                {t("nav.solutions")}
              </a>
              <a
                href="#process"
                className="text-slate-300 hover-blue"
                style={{ textDecoration: "none", transition: "color 0.2s" }}
              >
                {t("nav.process")}
              </a>
              <a
                href="#comparison"
                className="text-slate-300 hover-blue"
                style={{ textDecoration: "none", transition: "color 0.2s" }}
              >
                {t("nav.costSavings")}
              </a>

              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  style={styles.langButton}
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
              href="#solutions"
              onClick={toggleMenu}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1e293b",
                padding: "8px 0",
                borderBottom: "1px solid #f1f5f9",
                textDecoration: "none",
              }}
            >
              {t("nav.solutions")}
            </a>
            <a
              href="#process"
              onClick={toggleMenu}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1e293b",
                padding: "8px 0",
                borderBottom: "1px solid #f1f5f9",
                textDecoration: "none",
              }}
            >
              {t("nav.process")}
            </a>
            <a
              href="#comparison"
              onClick={toggleMenu}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1e293b",
                padding: "8px 0",
                borderBottom: "1px solid #f1f5f9",
                textDecoration: "none",
              }}
            >
              {t("nav.costSavings")}
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

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Modern skyscraper"
            style={styles.heroImg}
          />
          <div style={styles.heroOverlay}></div>
        </div>

        <div style={styles.container} className="relative z-20">
          <div style={styles.heroContent}>
            <div style={styles.badge}>
              <span style={styles.badgeText}>{t("hero.badge")}</span>
            </div>

            <h1 className="hero-title" style={styles.heroTitle}>
              {t("hero.title1")}
              <br />
              <span style={styles.gradientText}>{t("hero.title2")}</span>
            </h1>

            <p style={styles.heroDesc} className="hero-desc">
              {t("hero.desc")}
            </p>

            <div style={styles.buttonGroup}>
              <button className="btn-primary">
                {t("hero.cta.start")} <ArrowRight size={20} />
              </button>
              <button className="btn-outline">{t("hero.cta.view")}</button>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section
        style={{ ...styles.section, backgroundColor: "#f8fafc" }}
        className="section-padding"
      >
        <div style={styles.container}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={styles.subTitle}>{t("problem.subtitle")}</h2>
            <h3 style={styles.sectionTitle}>{t("problem.title")}</h3>
          </div>

          <div
            className="grid-cols-1 md-grid-2"
            style={{ maxWidth: "1024px", margin: "0 auto" }}
          >
            {/* Card 1 */}
            <div className="feature-card" style={styles.card}>
              <div style={{ ...styles.iconBox, backgroundColor: "#fef2f2" }}>
                <AlertTriangle className="text-red-500" size={28} />
              </div>
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  color: "#0f172a",
                }}
              >
                {t("problem.risk.title")}
              </h4>
              <p
                style={{
                  color: "#475569",
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                }}
              >
                {t("problem.risk.desc")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card" style={styles.card}>
              <div style={{ ...styles.iconBox, backgroundColor: "#fff7ed" }}>
                <FileText className="text-orange-500" size={28} />
              </div>
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  color: "#0f172a",
                }}
              >
                {t("problem.admin.title")}
              </h4>
              <p
                style={{
                  color: "#475569",
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                }}
              >
                {t("problem.admin.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        id="solutions"
        style={{ ...styles.section, backgroundColor: "white" }}
        className="section-padding"
      >
        <div style={styles.container}>
          <div
            className="flex-col-mobile flex-row-md"
            style={{ display: "flex", gap: "64px", alignItems: "center" }}
          >
            {/* Dark Card */}
            <div
              className="w-half-md"
              style={{ width: "100%", position: "relative" }}
            >
              <div
                style={{
                  backgroundColor: "#0f172a",
                  color: "white",
                  padding: "48px",
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    padding: "40px",
                    opacity: 0.1,
                  }}
                >
                  <Shield size={200} />
                </div>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginBottom: "24px",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  {t("solution.shield.title")}
                </h3>
                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "1.125rem",
                    marginBottom: "32px",
                    lineHeight: 1.6,
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  {t("solution.shield.desc")}
                  <span style={{ color: "#60a5fa", fontWeight: "bold" }}>
                    {t("solution.shield.highlight")}
                  </span>
                  。
                </p>
                <div
                  className="grid-cols-1 md-grid-2"
                  style={{ gap: "16px", position: "relative", zIndex: 10 }}
                >
                  {[
                    t("solution.shield.items.crossBorder"),
                    t("solution.shield.items.visa"),
                    t("solution.shield.items.multiLang"),
                    t("solution.shield.items.audit"),
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <CheckCircle color="#60a5fa" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Text */}
            <div className="w-half-md" style={{ width: "100%" }}>
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  marginBottom: "32px",
                  color: "#0f172a",
                }}
              >
                {t("solution.talent.title")}
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#475569",
                  marginBottom: "40px",
                }}
              >
                {t("solution.talent.desc")}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#eff6ff",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Globe color="#2563eb" size={24} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        marginBottom: "8px",
                        color: "#0f172a",
                      }}
                    >
                      {t("solution.features.visa.title")}
                    </h4>
                    <p style={{ color: "#475569" }}>
                      {t("solution.features.visa.desc")}
                      <span style={{ fontWeight: "600", color: "#1e3a8a" }}>
                        {t("solution.features.visa.highlight")}
                      </span>
                      {t("solution.features.visa.desc2")}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#eef2ff",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Smartphone color="#4f46e5" size={24} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        marginBottom: "8px",
                        color: "#0f172a",
                      }}
                    >
                      {t("solution.features.tech.title")}
                    </h4>
                    <p style={{ color: "#475569" }}>
                      {t("solution.features.tech.desc")}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#f0fdfa",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Users color="#0d9488" size={24} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        marginBottom: "8px",
                        color: "#0f172a",
                      }}
                    >
                      {t("solution.features.culture.title")}
                    </h4>
                    <p style={{ color: "#475569" }}>
                      {t("solution.features.culture.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        style={{
          ...styles.section,
          backgroundColor: "#0f172a",
          color: "white",
        }}
        className="section-padding"
      >
        <div style={styles.container}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: "bold" }}>
              {t("process.title")}
            </h2>
            <p
              style={{
                color: "#94a3b8",
                marginTop: "16px",
                fontSize: "1.125rem",
              }}
            >
              {t("process.desc")}
            </p>
          </div>

          <div
            className="grid-cols-1 md-grid-3"
            style={{ position: "relative" }}
          >
            {/* Steps */}
            {[
              {
                num: "1",
                title: t("process.steps.1.title"),
                desc: t("process.steps.1.desc"),
              },
              {
                num: "2",
                title: t("process.steps.2.title"),
                desc: t("process.steps.2.desc"),
              },
              {
                num: "3",
                title: t("process.steps.3.title"),
                desc: t("process.steps.3.desc"),
              },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 910,
                }}
              >
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    backgroundColor: "#1e293b",
                    borderRadius: "9999px",
                    border: "4px solid #334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#60a5fa",
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "12px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    maxWidth: "280px",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section
        id="comparison"
        style={{ ...styles.section, backgroundColor: "#f8fafc" }}
        className="section-padding"
      >
        <div style={styles.container}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={styles.sectionTitle}>{t("comparison.title")}</h2>
            <p
              style={{
                color: "#475569",
                marginTop: "16px",
                fontSize: "1.125rem",
              }}
            >
              {t("comparison.desc")}
            </p>
          </div>

          <div
            style={{
              maxWidth: "896px",
              margin: "0 auto",
              backgroundColor: "white",
              padding: "48px",
              borderRadius: "24px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
              {/* Bar 1 */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                  }}
                >
                  <span style={{ color: "#475569" }}>
                    {t("comparison.internal")}
                  </span>
                  <span style={{ color: "#0f172a" }}>
                    {t("comparison.internalCost")}
                  </span>
                </div>
                <div
                  style={{
                    height: "24px",
                    width: "100%",
                    backgroundColor: "#f1f5f9",
                    borderRadius: "9999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "#94a3b8",
                      borderRadius: "9999px",
                    }}
                  ></div>
                </div>
              </div>

              {/* Bar 2 */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                  }}
                >
                  <span style={{ color: "#475569" }}>
                    {t("comparison.risk")}
                  </span>
                  <span style={{ color: "#0f172a" }}>
                    {t("comparison.riskCost")}
                  </span>
                </div>
                <div
                  style={{
                    height: "24px",
                    width: "100%",
                    backgroundColor: "#f1f5f9",
                    borderRadius: "9999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "83%",
                      backgroundColor: "#94a3b8",
                      borderRadius: "9999px",
                    }}
                  ></div>
                </div>
              </div>

              {/* Bar 3 (Winner) */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#1e3a8a", fontWeight: "bold" }}>
                      {t("comparison.k10")}
                    </span>
                    <span
                      style={{
                        backgroundColor: "#dcfce7",
                        color: "#15803d",
                        fontSize: "0.75rem",
                        padding: "2px 8px",
                        borderRadius: "9999px",
                      }}
                    >
                      {t("comparison.recommended")}
                    </span>
                  </div>
                  <span style={{ color: "#1e3a8a", fontWeight: "bold" }}>
                    {t("comparison.k10Cost")}
                  </span>
                </div>
                <div
                  style={{
                    height: "40px",
                    width: "100%",
                    backgroundColor: "#f1f5f9",
                    borderRadius: "9999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "38%",
                      background: "linear-gradient(to right, #2563eb, #60a5fa)",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingRight: "16px",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                      }}
                    >
                      {t("comparison.savings")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "48px",
                backgroundColor: "#eff6ff",
                padding: "24px",
                borderRadius: "12px",
                display: "flex",
                gap: "16px",
              }}
            >
              <TrendingUp color="#2563eb" size={32} />
              <div>
                <h4
                  style={{
                    color: "#1e3a8a",
                    fontWeight: "bold",
                    marginBottom: "4px",
                  }}
                >
                  {t("comparison.impact.title")}
                </h4>
                <p
                  style={{
                    color: "#1e40af",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    opacity: 0.8,
                  }}
                >
                  {t("comparison.impact.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{ ...styles.section, backgroundColor: "white" }}
        className="section-padding"
      >
        <div style={styles.container}>
          <div
            style={{
              backgroundColor: "#0f172a",
              borderRadius: "24px",
              padding: "80px 24px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 10,
                maxWidth: "672px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(234, 179, 8, 0.2)",
                  border: "1px solid rgba(234, 179, 8, 0.5)",
                  color: "#fde047",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  marginBottom: "32px",
                }}
              >
                <Award size={14} /> {t("cta.partner")}
              </div>

              <h2
                className="cta-title"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: "24px",
                }}
              >
                {t("cta.spots")}
              </h2>
              <p
                className="cta-desc"
                style={{
                  color: "#cbd5e1",
                  marginBottom: "40px",
                  lineHeight: 1.6,
                }}
              >
                {t("cta.desc")}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#0f172a",
                    padding: "16px 32px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {t("cta.apply")}
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #475569",
                    color: "white",
                    padding: "16px 32px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    cursor: "pointer",
                  }}
                >
                  {t("cta.contact")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div
            className="grid-cols-1 md-grid-4"
            style={{ marginBottom: "48px" }}
          >
            <div style={{ gridColumn: "span 2" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#1e3a8a",
                    borderRadius: "0 8px 0 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "0.875rem",
                    }}
                  >
                    K10
                  </span>
                </div>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    color: "white",
                  }}
                >
                  {t("brandName")}
                </span>
              </div>
              <p style={{ maxWidth: "384px", marginBottom: "24px" }}>
                {t("footer.desc")}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                {[
                  t("footer.cities.seoul"),
                  t("footer.cities.tokyo"),
                  t("footer.cities.shanghai"),
                  t("footer.cities.singapore"),
                  t("footer.cities.mumbai"),
                ].map((city) => (
                  <span
                    key={city}
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#475569",
                    }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                {t("footer.company")}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {t("footer.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {t("footer.services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {t("footer.careers")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {t("footer.privacy")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                {t("footer.contact")}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <li>
                  <a
                    href="mailto:contact@k10global.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    contact@k10global.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:1588-XXXX"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    1588-XXXX
                  </a>
                </li>
                <li style={{ fontSize: "0.875rem", marginTop: "16px" }}>
                  {t("footer.location")}
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              paddingTop: "32px",
              borderTop: "1px solid #0f172a",
              textAlign: "center",
              fontSize: "0.875rem",
            }}
          >
            <p>
              &copy; {new Date().getFullYear()} {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default K10GlobalHR;
