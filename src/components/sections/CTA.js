"use client";

export default function CTA() {
  const handleSubmit = () => {
    alert("Thank you. Our team will review your request and respond within 48 hours.");
  };

  return (
    <section className="section" id="cta">
      <div className="section-title" style={{ textAlign: "center" }}>
        Your competitors are already <strong>asking about this.</strong>
      </div>
      <div className="cta-sub">Are you?</div>
      <div className="cta-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Corporate Email" required />
        <input type="text" placeholder="Company" />
        <select defaultValue="">
          <option value="" disabled>Your Role</option>
          <option>C-Suite / Board</option>
          <option>VP Operations</option>
          <option>VP Sustainability / ESG</option>
          <option>Head of Metallurgy</option>
          <option>Business Development</option>
          <option>Investor</option>
          <option>Other</option>
        </select>
        <button className="cta-btn" type="button" onClick={handleSubmit}>
          Request Technical Briefing
        </button>
      </div>
      <div className="cta-note">
        <i className="fas fa-lock"></i>&nbsp; Access to technical documentation requires NDA execution. We select partners carefully.
      </div>
    </section>
  );
}
