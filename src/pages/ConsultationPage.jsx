import React, { useState } from "react";
import { styles } from "../styles";
import { User, Building2, Send } from "lucide-react";

const ConsultationPage = () => {
  const [selectedType, setSelectedType] = useState(null); // 'worker' or 'company'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted for ${selectedType}: ${JSON.stringify(formData)}`);
    // In a real app, this would send data to a backend
  };

  const blockStyle = (type) => ({
    flex: 1,
    padding: "40px",
    borderRadius: "16px",
    border: selectedType === type ? "2px solid #2563eb" : "1px solid #e2e8f0",
    backgroundColor: selectedType === type ? "#eff6ff" : "white",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    transition: "all 0.3s ease",
    boxShadow: selectedType === type ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
  });

  return (
    <div style={{ ...styles.wrapper, paddingTop: "100px", minHeight: "calc(100vh - 80px)" }}>
      <div style={styles.container}>
        <h1 style={{ ...styles.sectionTitle, textAlign: "center", marginBottom: "48px" }}>
          Start Consultation
        </h1>

        <div
          className="flex-col-mobile flex-row-md"
          style={{ display: "flex", gap: "24px", marginBottom: "48px" }}
        >
          <div
            onClick={() => handleTypeSelect("worker")}
            style={blockStyle("worker")}
            className="selection-card"
          >
            <User size={48} color={selectedType === "worker" ? "#2563eb" : "#64748b"} />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1e293b" }}>For Workers</h3>
            <p style={{ textAlign: "center", color: "#64748b" }}>
              Find jobs, visa support, and settlement assistance in Korea.
            </p>
          </div>

          <div
            onClick={() => handleTypeSelect("company")}
            style={blockStyle("company")}
            className="selection-card"
          >
            <Building2 size={48} color={selectedType === "company" ? "#2563eb" : "#64748b"} />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1e293b" }}>For Companies</h3>
            <p style={{ textAlign: "center", color: "#64748b" }}>
              Hire global talent and get visa/immigration support.
            </p>
          </div>
        </div>

        {selectedType && (
          <div style={{ maxWidth: "600px", margin: "0 auto", paddingBottom: "64px" }}>
             <h2 style={{ ...styles.sectionTitle, fontSize: "1.75rem", textAlign: "center", marginBottom: "32px" }}>
              {selectedType === "worker" ? "Worker Consultation" : "Company Consultation"} Survey
            </h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#334155" }}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#334155" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#334155" }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                  placeholder="Your Phone Number"
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#334155" }}>Message / Requirements</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    resize: "vertical",
                  }}
                  placeholder="Tell us more about what you need..."
                />
              </div>

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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "16px"
                }}
              >
                Submit Request <Send size={20} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationPage;
