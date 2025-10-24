import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Senior Data Engineer",
    org: "Ati Motors",
    date: "Apr 2025 – Present",
    bullets: [
      "Repurposed Grafana dashboards into a unified analytics platform used by executives and CS.",
      "Built a high-throughput ZMQ telemetry ingestion pipeline for AMR sensor streams.",
      "Automated KPI workflows; decreased manual reporting time by ~80%.",
    ],
  },
  {
    role: "Data Engineer",
    org: "Ati Motors",
    date: "Sep 2023 – Mar 2025",
    bullets: [
      "Co-developed monitoring platform adopted by 200+ users for fleet telemetry.",
      "Integrated Grafana with FastAPI to reduce downtime and improve visibility.",
      "Built real-time alerting system for critical fleet events.",
    ],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(0);
  const trans = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={trans}>
      <h1 style={{ marginTop: 0, fontSize: 36, fontWeight: 700, color: "#e6f7ff", marginBottom: 32 }}>Experience</h1>
      <div style={{ display: "grid", gap: 16 }}>
        {EXPERIENCES.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...trans, delay: i * 0.08 }}
            style={{ padding: 24, borderRadius: 12, background: open === i ? "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(14,165,233,0.03))" : "rgba(255,255,255,0.02)", border: "1px solid " + (open === i ? "rgba(56,189,248,0.2)" : "rgba(255,255,255,0.05)"), transition: "all 0.3s ease" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 20, color: "#e6f7ff" }}>
                  {e.role}
                </div>
                <div style={{ color: "#38bdf8", marginTop: 6, fontWeight: 600, fontSize: 16 }}>@ {e.org}</div>
                <div style={{ color: "#9fbfd4", marginTop: 6, fontSize: 14 }}>{e.date}</div>
              </div>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ padding: "10px 16px", borderRadius: 8, background: "transparent", border: "1px solid rgba(56,189,248,0.3)", color: "#38bdf8", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 14 }}
              >
                {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {open === i ? "Show Less" : "Show Details"}
              </button>
            </div>

            <ul style={{ marginTop: 20, paddingLeft: 24 }}>
              {(open === i ? e.bullets : e.bullets.slice(0, 2)).map((b, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  style={{ color: "#bcd7e6", marginTop: 10, fontSize: 15, lineHeight: 1.7 }}
                >
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}