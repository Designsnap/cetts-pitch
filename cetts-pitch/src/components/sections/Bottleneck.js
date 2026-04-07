export default function Bottleneck() {
  return (
    <section className="section" id="impossible">
      <div className="section-label">The Bottleneck</div>
      <div className="section-title">
        Electrochemistry could always do this.<br />
        <strong>One component made it impossible.</strong>
      </div>
      <div className="section-desc">
        The science has existed for decades. Every metallurgist knows it works. But the economics never did — because of one thing.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "1.5rem", marginTop: "2rem" }}>
        {[
          { val: "$500–800", label: "Per m² — Nafion 117", ctx: "Industry standard membrane" },
          { val: "$150–300", label: "Per m² — Fumasep", ctx: "Budget alternative" },
          { val: "Months", label: "Lifespan in mine chemistry", ctx: "Degrades in extreme pH / ORP" },
        ].map((item, i) => (
          <div className="proof-card" key={i}>
            <div className="proof-val" style={{ color: "var(--danger)" }}>{item.val}</div>
            <div className="proof-label">{item.label}</div>
            <div className="proof-context">{item.ctx}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "3rem", color: "var(--muted)", fontSize: "0.95rem" }}>
        At these prices, the math <strong style={{ color: "var(--danger)" }}>never works</strong> at scale.<br />
        <span style={{ fontSize: "0.8rem" }}>This is why electrochemical treatment has never been deployed in mining. Until now.</span>
      </div>
    </section>
  );
}
