import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const transition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={transition} style={{ marginTop: 20 }}>
      <div style={{ display: "flex", gap: 20, alignItems: "center", background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", padding: 20, borderRadius: 12 }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginTop: 0 }}>About</h3>
          <p style={{ color: "#bcd7e6" }}>
            Engineer by training, builder by instinct — I bridge robotics data and human decisions. I specialise in telemetry
            pipelines, KPI automation, and operational analytics for autonomous fleets. At Ati Motors, I built observability systems
            and an analytics platform to reduce downtime and speed decision cycles.
          </p>
        </div>
        <div style={{ width: 220 }}>
          <div style={{ width: "100%", borderRadius: 8, overflow: "hidden", background: "rgba(255,255,255,0.02)", padding: 12 }}>
            {/* Placeholder: you can add a second image or stats here */}
            <div style={{ color: "#9fbfd4" }}>Placeholder for short stats or secondary image</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
