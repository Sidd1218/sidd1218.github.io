import React from "react";
import { motion } from "framer-motion";

export default function Hero({ onCTAClick = () => {} }) {
  const transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={transition} style={{ position: "relative", zIndex: 10 }}>
      <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "space-between", background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", padding: 28, borderRadius: 12, boxShadow: "0 16px 40px rgba(2,6,23,0.6)" }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800 }}>Hi — I'm Siddharth Shanker</h1>
          <div style={{ height: 8, width: 220, borderRadius: 6, margin: "12px 0", background: "linear-gradient(90deg,#38bdf8,#0ea5e9)" }} />
          <p style={{ color: "#bcd7e6", marginTop: 6 }}>
            Data Engineer building telemetry pipelines and operational analytics for robotics fleets. I turn
            telemetry into decision-grade insights and production dashboards.
          </p>

          <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
            <button onClick={onCTAClick} style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124", padding: "10px 14px", borderRadius: 10, fontWeight: 700, border: "none", cursor: "pointer" }}>
              View Projects
            </button>
            <a href="/Siddharth.pdf" download>
              <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.06)", color: "#cfeffa", padding: "10px 14px", borderRadius: 10, cursor: "pointer" }}>
                Resume
              </button>
            </a>
          </div>
        </div>

        <div style={{ width: 120, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 120, height: 120, borderRadius: 999, overflow: "hidden", background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))", boxShadow: "0 8px 28px rgba(0,0,0,0.5)" }}>
            <img src="/avatar.png" alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}