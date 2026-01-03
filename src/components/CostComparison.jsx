import React from "react";
import { useTranslation } from "react-i18next";
import { TrendingUp } from "lucide-react";
import { styles } from "../styles";

const CostComparison = () => {
  const { t } = useTranslation();

  return (
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
                <span style={{ color: "#475569" }}>{t("comparison.risk")}</span>
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
  );
};

export default CostComparison;
