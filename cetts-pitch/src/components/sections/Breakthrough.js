export default function Breakthrough() {
  return (
    <section className="section membrane-reveal" id="breakthrough">
      <div className="classified">PROPRIETARY</div>
      <div className="section-label">The Breakthrough</div>
      <div className="section-title" style={{ maxWidth: "700px", margin: "0 auto 1rem" }}>
        We didn&apos;t invent electrochemistry.<br />
        <strong>We removed the barrier.</strong>
      </div>
      <div className="section-desc" style={{ maxWidth: "500px", margin: "0 auto 2rem", textAlign: "center" }}>
        A proprietary nano membrane. 100x cost reduction. Proven in extreme chemistry. The details are not on this page.
      </div>
      <div className="membrane-glow">
        <i className="fas fa-atom" style={{ fontSize: "2rem", color: "var(--accent)", zIndex: 1, position: "relative" }}></i>
      </div>
      <div className="membrane-stats">
        {[
          { val: "100×", lbl: "Cost Reduction" },
          { val: "pH 0", lbl: "Acid Survival" },
          { val: "<$5", lbl: "Per m² Production Cost" },
          { val: "∞", lbl: "Field Replaceable" },
        ].map((s, i) => (
          <div className="membrane-stat" key={i}>
            <div className="val">{s.val}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: "3rem", fontSize: "0.8rem", color: "var(--muted)", textAlign: "center" }}>
        Full technical specifications available under NDA to qualified partners.
      </p>
    </section>
  );
}
