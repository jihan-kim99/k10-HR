import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      style={{ ...styles.section, backgroundColor: "#f8fafc" }}
      className="section-padding"
    >
      <div style={styles.container}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={styles.subTitle}>{t("contact.subtitle")}</h2>
          <h3 style={styles.sectionTitle}>{t("contact.title")}</h3>
          <p
            style={{
              color: "#475569",
              fontSize: "1.125rem",
              marginTop: "16px",
            }}
          >
            {t("contact.desc")}
          </p>
        </div>

        <div
          className="flex-col-mobile flex-row-md"
          style={{ display: "flex", gap: "64px", alignItems: "start" }}
        >
          {/* Contact Form */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                backgroundColor: "white",
                padding: "48px",
                borderRadius: "24px",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "32px",
                  color: "#0f172a",
                }}
              >
                {t("contact.form.heading")}
              </h4>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div style={{ display: "flex", gap: "16px" }}>
                  <input
                    type="text"
                    placeholder={t("contact.form.firstName")}
                    style={{
                      flex: 1,
                      padding: "12px 16px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    placeholder={t("contact.form.lastName")}
                    style={{
                      flex: 1,
                      padding: "12px 16px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <input
                  type="email"
                  placeholder={t("contact.form.email")}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
                <input
                  type="text"
                  placeholder={t("contact.form.company")}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
                <textarea
                  placeholder={t("contact.form.message")}
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    resize: "vertical",
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "16px 32px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: "48px" }}>
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "24px",
                  color: "#0f172a",
                }}
              >
                {t("contact.info.heading")}
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                    >
                      <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold", color: "#0f172a" }}>
                      {t("contact.info.email")}
                    </p>
                    <p style={{ color: "#475569" }}>contact@k10.kr</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold", color: "#0f172a" }}>
                      {t("contact.info.phone")}
                    </p>
                    <p style={{ color: "#475569" }}>1588-XXXX</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold", color: "#0f172a" }}>
                      {t("contact.info.office")}
                    </p>
                    <p style={{ color: "#475569" }}>
                      {t("contact.info.address")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#0f172a",
                color: "white",
                padding: "32px",
                borderRadius: "16px",
              }}
            >
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                {t("contact.hours.heading")}
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{t("contact.hours.weekday")}</span>
                  <span>{t("contact.hours.weekdayTime")}</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{t("contact.hours.saturday")}</span>
                  <span>{t("contact.hours.saturdayTime")}</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{t("contact.hours.sunday")}</span>
                  <span>{t("contact.hours.closed")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
