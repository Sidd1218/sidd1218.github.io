import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      <div style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))", padding: 40, borderRadius: 16, boxShadow: "0 16px 40px rgba(2,6,23,0.6)" }}>
        <h1 style={{ marginTop: 0, fontSize: 36, fontWeight: 700, color: "#e6f7ff", marginBottom: 24 }}>About Me</h1>
        
        <div style={{ color: "#bcd7e6", lineHeight: 1.8, fontSize: 16 }}>
          <p style={{ marginBottom: 20 }}>
            Engineer by training, builder by instinct — I bridge robotics data and human decisions. I specialise in telemetry
            pipelines, KPI automation, and operational analytics for autonomous fleets.
          </p>
          
          <p style={{ marginBottom: 20 }}>
            At Ati Motors, I built observability systems and an analytics platform to reduce downtime and speed decision cycles.
            My work focuses on transforming raw telemetry into decision-grade insights that power production dashboards used by
            executives and customer success teams.
          </p>
          
          <p style={{ marginBottom: 20 }}>
            I'm passionate about building scalable data infrastructure that enables teams to make faster, more informed decisions.
            Whether it's designing high-throughput ingestion pipelines or creating intuitive analytics interfaces, I focus on
            systems that are both robust and user-friendly.
          </p>

          <div style={{ marginTop: 32, padding: 24, background: "rgba(56,189,248,0.05)", borderRadius: 12, border: "1px solid rgba(56,189,248,0.15)" }}>
            <h3 style={{ color: "#38bdf8", marginTop: 0, marginBottom: 16, fontSize: 20 }}>What I Do</h3>
            <ul style={{ margin: 0, paddingLeft: 24 }}>
              <li style={{ marginBottom: 12, color: "#bcd7e6" }}>Build telemetry pipelines for robotics and IoT systems</li>
              <li style={{ marginBottom: 12, color: "#bcd7e6" }}>Design and implement operational analytics platforms</li>
              <li style={{ marginBottom: 12, color: "#bcd7e6" }}>Automate KPI tracking and reporting workflows</li>
              <li style={{ marginBottom: 12, color: "#bcd7e6" }}>Create real-time monitoring and alerting systems</li>
              <li style={{ color: "#bcd7e6" }}>Transform complex data into actionable insights</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}