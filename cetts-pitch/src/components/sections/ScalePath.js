export default function ScalePath() {
  const phases = [
    { phase: "Phase 1 — Now", title: "Pilot Unit", desc: "Single containerized skid. 90-day on-site validation with partner mine. Prove economics on real tailings." },
    { phase: "Phase 2 — Month 6", title: "Multi-Skid Array", desc: "4–8 units in parallel. Process 50–200 tons/day. Full SCADA integration. Continuous metal recovery." },
    { phase: "Phase 3 — Year 1", title: "Site-Wide Deployment", desc: "20+ units. Integrated with existing plant infrastructure. Tailings-to-revenue conversion at industrial scale." },
    { phase: "Phase 4 — Year 2+", title: "Licensed Deployment", desc: "Technology licensing to Tier 1 miners globally. Regional manufacturing partnerships. Legacy tailings remediation contracts." },
  ];

  return (
    <section className="section" id="scale">
      <div className="section-label">Deployment Roadmap</div>
      <div className="section-title">
        From <strong>one skid</strong> to <strong>site-wide deployment</strong>
      </div>
      <div className="section-desc">Modular architecture means linear scaling. Add capacity like shipping containers.</div>
      <div className="timeline">
        {phases.map((p, i) => (
          <div className="timeline-item" key={i}>
            <div className="phase">{p.phase}</div>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
