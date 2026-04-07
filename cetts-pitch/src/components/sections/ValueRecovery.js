export default function ValueRecovery() {
  const metals = [
    { symbol: "Cu", name: "Copper", price: "$8,500/t" },
    { symbol: "Au", name: "Gold", price: "$2,300/oz" },
    { symbol: "Ni", name: "Nickel", price: "$16,000/t" },
    { symbol: "Co", name: "Cobalt", price: "$33,000/t" },
    { symbol: "Pt", name: "Platinum", price: "$950/oz" },
    { symbol: "REE", name: "Rare Earths", price: "Critical" },
  ];

  return (
    <section className="section" id="recovery">
      <div className="section-label">Value Recovery</div>
      <div className="section-title">
        Your waste is worth more than <strong>some mines</strong>
      </div>
      <div className="section-desc">
        CETTS recovers marketable metals from tailings that conventional methods leave behind.
      </div>
      <div className="metals-grid">
        {metals.map((m, i) => (
          <div className="metal-card" key={i}>
            <div className="symbol">{m.symbol}</div>
            <div className="name">{m.name}</div>
            <div className="price">{m.price}</div>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.85rem", color: "var(--muted)" }}>
        Recovery rates and target metals are tailings-chemistry dependent. Site-specific models available under NDA.
      </p>
    </section>
  );
}
