import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  const skills = {
    'Languages': ['Python', 'SQL', 'JavaScript'],
    'Frameworks': ['FastAPI', 'Streamlit', 'React'],
    'Data & Tools': ['Grafana', 'AWS', 'Docker', 'Redis', 'MongoDB', 'Postgres'],
    'Analytics / ML': ['Pandas', 'NumPy', 'Scikit-Learn'],
    'Infra / DevOps': ['Git', 'CI/CD', 'Linux', 'Raspberry Pi']
  };

  return (
    <motion.div initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={transition} style={{ marginTop: 20 }}>
      <div style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", padding: 20, borderRadius: 12 }}>
        <h3 style={{ marginTop: 0, fontSize: 28, fontWeight: 700 }}>About</h3>
        <p style={{ color: "#bcd7e6", lineHeight: 1.6 }}>
          Engineer by training, builder by instinct — I bridge robotics data and human decisions. I specialise in telemetry
          pipelines, KPI automation, and operational analytics for autonomous fleets. At Ati Motors, I built observability systems
          and an analytics platform to reduce downtime and speed decision cycles.
        </p>

        <div style={{ marginTop: 24 }}>
          <h4 style={{ marginBottom: 12, fontSize: 20, fontWeight: 600 }}>Skills & Tech Stack</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {Object.entries(skills).map(([cat, list], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
                style={{ padding: 14, borderRadius: 10, background: "rgba(255,255,255,0.02)" }}
              >
                <div style={{ fontWeight: 700, marginBottom: 8, color: "#cfeffa" }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {list.map((s, idx) => (
                    <div key={idx} style={{ padding: "4px 10px", borderRadius: 999, background: "rgba(56,189,248,0.08)", fontSize: 13, color: "#9fbfd4" }}>
                      {s}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}