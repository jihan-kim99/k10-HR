import React from "react";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";

const CompanySolutions = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        style={{ ...styles.section, backgroundColor: "white" }}
        className="section-padding"
      >
        <div style={styles.container}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={styles.subTitle}>{t("companies.header.subtitle")}</h2>
            <h3 style={styles.sectionTitle}>{t("companies.header.title")}</h3>
            <p
              style={{
                color: "#475569",
                fontSize: "1.125rem",
                marginTop: "16px",
              }}
            >
              {t("companies.header.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Talent Acquisition */}
      <section
        style={{
          ...styles.section,
          backgroundColor: "#f8fafc",
        }}
        className="section-padding"
      >
        <div style={styles.container}>
          <div
            className="flex-col-mobile flex-row-md flex-row-reverse-md"
            style={{
              display: "flex",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, maxWidth: "500px" }}>
              <img
                src="/korea2.jpg"
                alt="Talent Acquisition"
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
              <h2 style={styles.subTitle}>
                {t("companies.talentAcquisition.subtitle")}
              </h2>
              <h3 style={styles.sectionTitle}>
                {t("companies.talentAcquisition.title")}
              </h3>
              <p
                style={{
                  color: "#475569",
                  fontSize: "1.125rem",
                  marginBottom: "32px",
                  lineHeight: 1.6,
                }}
              >
                {t("companies.talentAcquisition.description")}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.talentAcquisition.benefits.screening")}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.talentAcquisition.benefits.assessment")}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.talentAcquisition.benefits.cultural")}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.talentAcquisition.benefits.hiring")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa & Immigration */}
      <section
        style={{
          ...styles.section,
          backgroundColor: "white",
        }}
        className="section-padding"
      >
        <div style={styles.container}>
          <div
            className="flex-col-mobile flex-row-md flex-row-reverse-md"
            style={{
              display: "flex",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, maxWidth: "500px" }}>
              <img
                src="/airport.jpg"
                alt="Visa & Immigration"
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
              <h2 style={styles.subTitle}>
                {t("companies.visaImmigration.subtitle")}
              </h2>
              <h3 style={styles.sectionTitle}>
                {t("companies.visaImmigration.title")}
              </h3>
              <p
                style={{
                  color: "#475569",
                  fontSize: "1.125rem",
                  marginBottom: "32px",
                  lineHeight: 1.6,
                }}
              >
                {t("companies.visaImmigration.description")}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.visaImmigration.benefits.support")}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.visaImmigration.benefits.coordination")}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.visaImmigration.benefits.preparation")}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.visaImmigration.benefits.compliance")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Support */}
      <section
        style={{
          ...styles.section,
          backgroundColor: "#f8fafc",
        }}
        className="section-padding"
      >
        <div style={styles.container}>
          <div
            className="flex-col-mobile flex-row-md flex-row-reverse-md"
            style={{
              display: "flex",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, maxWidth: "500px" }}>
              <img
                src="/workspace.jpg"
                alt="Onboarding Support"
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
              <h2 style={styles.subTitle}>
                {t("companies.onboarding.subtitle")}
              </h2>
              <h3 style={styles.sectionTitle}>
                {t("companies.onboarding.title")}
              </h3>
              <p
                style={{
                  color: "#475569",
                  fontSize: "1.125rem",
                  marginBottom: "32px",
                  lineHeight: 1.6,
                }}
              >
                {t("companies.onboarding.description")}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.onboarding.benefits.orientation")}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.onboarding.benefits.language")}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.onboarding.benefits.integration")}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <CheckCircle color="#10b981" size={24} />
                  <span style={{ color: "#0f172a", fontWeight: "500" }}>
                    {t("companies.onboarding.benefits.consultation")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanySolutions;
