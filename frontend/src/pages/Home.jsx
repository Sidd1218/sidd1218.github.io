import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Download } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  const skills = {
    'Languages': ['Python', 'SQL', 'JavaScript'],
    'Frameworks': ['FastAPI', 'Streamlit', 'React'],
    'Data & Tools': ['Grafana', 'AWS', 'Docker', 'Redis', 'MongoDB', 'Postgres'],
    'Analytics / ML': ['Pandas', 'NumPy', 'Scikit-Learn'],
    'Infra / DevOps': ['Git', 'CI/CD', 'Linux', 'Raspberry Pi']
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div style={{ display: "flex", gap: 32, alignItems: "center", justifyContent: "space-between", background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))", padding: 40, borderRadius: 16, boxShadow: "0 16px 40px rgba(2,6,23,0.6)" }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: 0, fontSize: 42, fontWeight: 800, color: "#e6f7ff" }}>Hi — I'm Siddharth Shanker</h1>
            <div style={{ height: 8, width: 240, borderRadius: 6, margin: "16px 0", background: "linear-gradient(90deg,#38bdf8,#0ea5e9)" }} />
            <p style={{ color: "#bcd7e6", fontSize: 16, lineHeight: 1.7, marginTop: 12 }}>
              Data Engineer building telemetry pipelines and operational analytics for robotics fleets. I turn
              telemetry into decision-grade insights and production dashboards.
            </p>

            <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
              <button
                onClick={() => navigate('/projects')}
                style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124", padding: "12px 20px", borderRadius: 10, fontWeight: 700, border: "none", cursor: "pointer", fontSize: 15 }}
              >
                View Projects
              </button>
              <a href="/Siddharth.pdf" download>
                <button style={{ background: "transparent", border: "1px solid rgba(56,189,248,0.4)", color: "#cfeffa", padding: "12px 20px", borderRadius: 10, cursor: "pointer", fontSize: 15, display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
                  <Download size={16} />
                  Resume
                </button>
              </a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 140, height: 140, borderRadius: 999, overflow: "hidden", background: "linear-gradient(135deg, #38bdf8, #0ea5e9)", boxShadow: "0 12px 36px rgba(56,189,248,0.3)" }}>
              <img src="/avatar.svg" alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.15 }}
        style={{ marginTop: 40 }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: "#e6f7ff" }}>Skills & Tech Stack</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {Object.entries(skills).map(([cat, list], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 + i * 0.08 }}
              style={{ padding: 20, borderRadius: 12, background: "linear-gradient(135deg, rgba(56,189,248,0.05), rgba(14,165,233,0.02))", border: "1px solid rgba(56,189,248,0.1)" }}
            >
              <div style={{ fontWeight: 700, marginBottom: 12, color: "#38bdf8", fontSize: 16 }}>{cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {list.map((s, idx) => (
                  <div key={idx} style={{ padding: "6px 12px", borderRadius: 20, background: "rgba(56,189,248,0.12)", fontSize: 13, color: "#bcd7e6", fontWeight: 500 }}>
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}