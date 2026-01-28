import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { styles } from "../styles";

const Hero = ({ scrollToSection }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
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
            <button
              className="btn-primary"
              onClick={() => navigate("/consultation")}
            >
              {t("hero.cta.start")} <ArrowRight size={20} />
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollToSection("job-seekers")}
            >
              {t("hero.cta.view")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
