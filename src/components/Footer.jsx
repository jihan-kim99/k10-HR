import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div className="grid-cols-1 md-grid-4" style={{ marginBottom: "48px" }}>
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
                  href="mailto:contact@k10.kr"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  contact@k10.kr
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
  );
};

export default Footer;
