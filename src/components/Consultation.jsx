import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Building2 } from "lucide-react";
import { styles } from "../styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Consultation = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language);
  const [activeSection, setActiveSection] = useState("");
  const [selectedType, setSelectedType] = useState(null); // 'worker' | 'company' | null

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    navigate(`/#${id}`);
  };

  const handleSelection = (type) => {
    setSelectedType(type);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedType(null);
    window.scrollTo(0, 0);
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "32px",
    borderRadius: "24px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "1rem",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#374151",
  };

  const formGroupStyle = {
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "16px 32px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1.125rem",
    border: "none",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.2s",
  };

  return (
    <div style={styles.wrapper}>
      <Navbar
        isScrolled={true}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        changeLanguage={changeLanguage}
        lang={lang}
      />

      <div
        style={{
          paddingTop: "140px",
          minHeight: "80vh",
          ...styles.container,
          paddingBottom: "80px",
        }}
      >
        {!selectedType ? (
          <>
            <h1
              style={{
                ...styles.sectionTitle,
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              Start Consultation
            </h1>
            <p
              style={{
                textAlign: "center",
                color: "#64748b",
                maxWidth: "600px",
                margin: "24px auto 64px auto",
                fontSize: "1.125rem",
              }}
            >
              Please select the option that describes you best to proceed with the
              consultation form.
            </p>

            <div
              style={{
                display: "flex",
                gap: "32px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                onClick={() => handleSelection("worker")}
                style={{
                  flex: 1,
                  minWidth: "300px",
                  maxWidth: "400px",
                  padding: "48px 32px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  cursor: "pointer",
                  textAlign: "center",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#eff6ff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px auto",
                  }}
                >
                  <User size={40} color="#2563eb" />
                </div>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#1e293b",
                    marginBottom: "16px",
                  }}
                >
                  For Workers
                </h2>
                <p style={{ color: "#64748b" }}>
                  Find jobs in Korea, visa support, and settlement assistance.
                </p>
              </div>

              <div
                onClick={() => handleSelection("company")}
                style={{
                  flex: 1,
                  minWidth: "300px",
                  maxWidth: "400px",
                  padding: "48px 32px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  cursor: "pointer",
                  textAlign: "center",
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#eff6ff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px auto",
                  }}
                >
                  <Building2 size={40} color="#2563eb" />
                </div>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#1e293b",
                    marginBottom: "16px",
                  }}
                >
                  For Companies
                </h2>
                <p style={{ color: "#64748b" }}>
                  Find global talent and manage foreign workforce visas.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="fade-in">
            <button
              onClick={handleBack}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "none",
                border: "none",
                fontSize: "1rem",
                fontWeight: "600",
                color: "#64748b",
                cursor: "pointer",
                marginBottom: "32px",
              }}
            >
              <ArrowLeft size={20} /> Back to Selection
            </button>

            <div style={formStyle}>
              <h2
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  textAlign: "center",
                  color: "#1e293b",
                }}
              >
                {selectedType === "worker"
                  ? "Worker Consultation"
                  : "Company Consultation"}
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "#64748b",
                  marginBottom: "32px",
                }}
              >
                Please fill out the form below and we will get back to you.
              </p>

              <form
                action="https://formsubmit.co/38dad5807af1f29e4fb219c59d23dcb2"
                method="POST"
              >
                {/* Hidden field to identify form type */}
                <input
                  type="hidden"
                  name="form_type"
                  value={selectedType === "worker" ? "Worker" : "Company"}
                />

                {selectedType === "worker" ? (
                  <>
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <div style={{ flex: 1, ...formGroupStyle }}>
                        <label style={labelStyle}>{t("contact.form.firstName") || "Name"}</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            style={inputStyle}
                        />
                        </div>
                        <div style={{ flex: 1, ...formGroupStyle }}>
                        <label style={labelStyle}>Nationality</label>
                        <input
                            type="text"
                            name="nationality"
                            placeholder="Your Nationality"
                            style={inputStyle}
                        />
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                         <div style={{ flex: 1, ...formGroupStyle }}>
                            <label style={labelStyle}>{t("contact.info.phone") || "Phone"}</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Phone Number"
                                style={inputStyle}
                            />
                        </div>
                        <div style={{ flex: 1, ...formGroupStyle }}>
                        <label style={labelStyle}>{t("contact.form.email") || "Email"}</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="email@example.com"
                            style={inputStyle}
                        />
                        </div>
                    </div>

                    <div style={formGroupStyle}>
                      <label style={labelStyle}>Current Visa Status (if in Korea)</label>
                      <input
                        type="text"
                        name="visa_status"
                        placeholder="e.g., E-9, D-2, None"
                        style={inputStyle}
                      />
                    </div>

                    <div style={formGroupStyle}>
                      <label style={labelStyle}>Message / Job Preference</label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        placeholder="Tell us about what kind of job you are looking for..."
                        style={{ ...inputStyle, resize: "vertical" }}
                      ></textarea>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                         <div style={{ flex: 1, ...formGroupStyle }}>
                            <label style={labelStyle}>{t("contact.form.company") || "Company Name"}</label>
                            <input
                                type="text"
                                name="company_name"
                                required
                                placeholder="Company Name"
                                style={inputStyle}
                            />
                        </div>
                        <div style={{ flex: 1, ...formGroupStyle }}>
                            <label style={labelStyle}>Contact Person</label>
                            <input
                                type="text"
                                name="contact_person"
                                required
                                placeholder="Name of Contact Person"
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                         <div style={{ flex: 1, ...formGroupStyle }}>
                            <label style={labelStyle}>{t("contact.info.phone") || "Phone"}</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Contact Phone Number"
                                style={inputStyle}
                            />
                        </div>
                        <div style={{ flex: 1, ...formGroupStyle }}>
                            <label style={labelStyle}>{t("contact.form.email") || "Email"}</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="company@example.com"
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    <div style={formGroupStyle}>
                      <label style={labelStyle}>Recruitment Needs</label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        placeholder="Describe your recruitment needs or questions..."
                        style={{ ...inputStyle, resize: "vertical" }}
                      ></textarea>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  style={buttonStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1d4ed8")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#2563eb")
                  }
                >
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Consultation;
