import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";

const Process = () => {
  const { t } = useTranslation();

  return (
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

        <div className="grid-cols-1 md-grid-3" style={{ position: "relative" }}>
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
  );
};

export default Process;
