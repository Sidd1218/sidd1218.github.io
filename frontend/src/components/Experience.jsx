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
    ],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(null);
  const trans = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans}>
      <h3 style={{ marginTop: 0, fontSize: 28, fontWeight: 700 }}>Experience</h3>
      <div style={{ display: "grid", gap: 12 }}>
        {EXPERIENCES.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...trans, delay: i * 0.06 }}
            style={{ padding: 16, borderRadius: 10, background: "rgba(255,255,255,0.02)" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>
                  {e.role} <span style={{ color: "#9fbfd4", marginLeft: 8, fontWeight: 700 }}>@ {e.org}</span>
                </div>
                <div style={{ color: "#9fbfd4", marginTop: 6, fontSize: 14 }}>{e.date}</div>
              </div>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ padding: "8px", borderRadius: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.06)", color: "#cfeffa", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
              >
                {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {open === i ? "Less" : "Details"}
              </button>
            </div>

            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              {(open === i ? e.bullets : e.bullets.slice(0, 2)).map((b, idx) => (
                <li key={idx} style={{ color: "#bcd7e6", marginTop: 6, fontSize: 14, lineHeight: 1.5 }}>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}