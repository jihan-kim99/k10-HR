import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";

const JobSeekerHeader = () => {
  const { t } = useTranslation();

  return (
    <section
      style={{ ...styles.section, backgroundColor: "white" }}
      className="section-padding"
    >
      <div style={styles.container}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={styles.subTitle}>{t("jobSeekers.header.subtitle")}</h2>
          <h3 style={styles.sectionTitle}>{t("jobSeekers.header.title")}</h3>
          <p
            style={{
              color: "#475569",
              fontSize: "1.125rem",
              marginTop: "16px",
            }}
          >
            {t("jobSeekers.header.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobSeekerHeader;
