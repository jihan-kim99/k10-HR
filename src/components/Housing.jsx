import React from "react";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";

const Housing = () => {
  const { t } = useTranslation();
  return (
    <section
      style={{
        ...styles.section,
        backgroundColor: "white",
      }}
      className="section-padding"
    >
      <div style={styles.container}>
        <div
          className="flex-col-mobile flex-row-md"
          style={{ display: "flex", gap: "48px", alignItems: "center" }}
        >
          <div style={{ flex: 1, maxWidth: "500px" }}>
            <img
              src="/housing.jpg"
              alt="Housing in Korea"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={styles.subTitle}>{t("jobSeekers.housing.subtitle")}</h2>
            <h3 style={styles.sectionTitle}>{t("jobSeekers.housing.title")}</h3>
            <p
              style={{
                color: "#475569",
                fontSize: "1.125rem",
                marginBottom: "32px",
                lineHeight: 1.6,
              }}
            >
              {t("jobSeekers.housing.description")}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <CheckCircle color="#10b981" size={24} />
                <span style={{ color: "#0f172a", fontWeight: "500" }}>
                  {t("jobSeekers.housing.benefits.properties")}
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <CheckCircle color="#10b981" size={24} />
                <span style={{ color: "#0f172a", fontWeight: "500" }}>
                  {t("jobSeekers.housing.benefits.translation")}
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <CheckCircle color="#10b981" size={24} />
                <span style={{ color: "#0f172a", fontWeight: "500" }}>
                  {t("jobSeekers.housing.benefits.utilities")}
                </span>
              </div>
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <CheckCircle color="#10b981" size={24} />
                <span style={{ color: "#0f172a", fontWeight: "500" }}>
                  {t("jobSeekers.housing.benefits.coordination")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Housing;
