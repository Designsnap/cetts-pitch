"use client";
import { useEffect, useRef, useState } from "react";

export default function CostOfInaction() {
  const counterRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [value, setValue] = useState("$0");

  useEffect(() => {
    const el = counterRef.current;
    if (!el || counted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCounted(true);
          const target = 50;
          let current = 0;
          const step = target / 80;
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setValue("$" + current.toFixed(1) + "B+");
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [counted]);

  const rows = [
    ["Tailings dam construction", "$500M – $2B+", "$0 — No dam needed"],
    ["Annual dam maintenance", "$10 – 50M / year", "$0"],
    ["Chemical treatment (AMD)", "$2,000 – 5,000 / ton", "$200 – 400 / ton"],
    ["Environmental monitoring", "$5 – 20M / year", "Minimal — closed loop"],
    ["Dam failure liability", "$1 – 10B on balance sheet", "$0"],
    ["Post-closure care", "$50 – 500M (perpetuity NPV)", "$0 — Nothing to close"],
    ["Recovered metal value", "$0 — Locked in tailings", "Revenue stream"],
  ];

  return (
    <section className="section cost-section" id="cost">
      <div className="section-label">The Cost of Inaction</div>
      <div className="section-title">
        Global tailings liability — <strong>right now</strong>
      </div>
      <div className="cost-counter" ref={counterRef}>{value}</div>
      <div className="cost-label">And growing every second. Maintenance. Monitoring. Insurance. Perpetuity.</div>
      <div style={{ maxWidth: "800px", margin: "4rem auto 0" }}>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Cost Category</th>
              <th>Current Method</th>
              <th>CETTS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([cat, curr, cetts], i) => (
              <tr key={i}>
                <td>{cat}</td>
                <td>{curr}</td>
                <td>{cetts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
