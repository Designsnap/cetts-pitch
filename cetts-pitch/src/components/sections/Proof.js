"use client";
import { useEffect, useRef } from "react";

export default function Proof() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    let Chart;
    async function initChart() {
      const mod = await import("chart.js/auto");
      Chart = mod.default;
      const ctx = chartRef.current;
      if (!ctx) return;
      if (chartInstance.current) chartInstance.current.destroy();
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Dam Construction", "Annual Maintenance", "Treatment ($/ton)", "Monitoring ($/yr)", "Failure Liability", "Post-Closure NPV"],
          datasets: [
            {
              label: "Conventional",
              data: [1000, 30, 3500, 12, 5000, 275],
              backgroundColor: "rgba(239,68,68,0.7)",
              borderRadius: 4,
            },
            {
              label: "CETTS",
              data: [0.5, 0.5, 300, 1, 0, 0],
              backgroundColor: "rgba(56,189,248,0.7)",
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { labels: { color: "#94a3b8", font: { size: 11 } } },
            title: {
              display: true,
              text: "Cost Comparison ($M or $/ton as labeled)",
              color: "#64748b",
              font: { size: 12 },
            },
          },
          scales: {
            x: { ticks: { color: "#64748b", font: { size: 10 } }, grid: { color: "rgba(255,255,255,0.03)" } },
            y: { ticks: { color: "#64748b" }, grid: { color: "rgba(255,255,255,0.05)" } },
          },
        },
      });
    }
    initChart();
    return () => { if (chartInstance.current) chartInstance.current.destroy(); };
  }, []);

  const proofs = [
    { val: "5–6V", label: "Cell Voltage", ctx: "Energy efficient operation" },
    { val: "50A", label: "Current Capacity", ctx: "Per cell module" },
    { val: "$200–400", label: "Cost Per Ton", ctx: "vs. $2,000–5,000 conventional" },
    { val: "pH 0", label: "Membrane Survival", ctx: "Extreme acid resistance proven" },
    { val: "0", label: "Waste Stream", ctx: "Closed-loop acid regeneration" },
    { val: "RT", label: "Operating Temp", ctx: "Room temperature processing" },
  ];

  return (
    <section className="section" id="proof">
      <div className="section-label">Validated Performance</div>
      <div className="section-title">
        Real data. <strong>Not projections.</strong>
      </div>
      <div className="section-desc">Independent electrochemical testing confirms performance across key metrics.</div>
      <div className="proof-grid">
        {proofs.map((p, i) => (
          <div className="proof-card" key={i}>
            <div className="proof-val">{p.val}</div>
            <div className="proof-label">{p.label}</div>
            <div className="proof-context">{p.ctx}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <canvas ref={chartRef} style={{ maxWidth: "600px", maxHeight: "300px", margin: "0 auto" }}></canvas>
      </div>
    </section>
  );
}
