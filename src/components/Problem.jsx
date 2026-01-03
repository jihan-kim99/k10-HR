import React from "react";
import { useTranslation } from "react-i18next";
import { AlertTriangle, FileText } from "lucide-react";
import { styles } from "../styles";

const Problem = () => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        ...styles.section,
        backgroundColor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}
      className="section-padding"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/handshake.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: 1,
        }}
      ></div>
      <div style={{ ...styles.container, position: "relative", zIndex: 10 }}>
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
  );
};

export default Problem;
