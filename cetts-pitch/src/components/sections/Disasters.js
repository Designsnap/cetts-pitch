export default function Disasters() {
  const disasters = [
    {
      year: "January 25, 2019",
      name: "Brumadinho Dam",
      location: "Minas Gerais, Brazil — Vale S.A.",
      stats: [
        { num: "270", label: "Lives Lost" },
        { num: "$7B+", label: "Total Cost" },
        { num: "12M m³", label: "Waste Released" },
      ],
    },
    {
      year: "November 5, 2015",
      name: "Samarco Dam",
      location: "Mariana, Brazil — BHP / Vale JV",
      stats: [
        { num: "19", label: "Lives Lost" },
        { num: "$5.2B", label: "Settlement" },
        { num: "60M m³", label: "Waste Released" },
      ],
    },
    {
      year: "August 4, 2014",
      name: "Mount Polley",
      location: "British Columbia, Canada — Imperial Metals",
      stats: [
        { num: "25M m³", label: "Waste Released" },
        { num: "$40M+", label: "Cleanup Cost" },
        { num: "∞", label: "Ecosystem Damage" },
      ],
    },
  ];

  return (
    <section className="section" id="problem">
      <div className="section-label">The Problem</div>
      <div className="section-title">
        The industry is sitting on <strong>ticking time bombs</strong>
      </div>
      <div className="section-desc">
        Every major mining company carries billions in tailings liability. Some have already detonated.
      </div>
      <div className="disaster-grid">
        {disasters.map((d, i) => (
          <div className="disaster-card" key={i}>
            <div className="year">{d.year}</div>
            <h3>{d.name}</h3>
            <div className="location">{d.location}</div>
            <div className="stat-row">
              {d.stats.map((s, j) => (
                <div className="stat" key={j}>
                  <span className="num">{s.num}</span>
                  <span className="label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
