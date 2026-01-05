import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div className="grid-cols-1 md-grid-3" style={{ marginBottom: "48px" }}>
          <div style={{ gridColumn: "span 2" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              <img
                src="/blue-logo.svg"
                alt="K10 Logo"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
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
                  href="mailto:jawoju919@naver.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  jawoju919@naver.com
                </a>
              </li>
              <li>
                <a
                  href="tel:063-636-8059"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  063-636-8059
                </a>
              </li>
              <li>
                <a
                  href="tel:010-4192-8059"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  010-4192-8059
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
  );
};

export default Footer;
