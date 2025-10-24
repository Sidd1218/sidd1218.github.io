import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const featuredManual = [
  { id: "rtap", title: "Real-Time Transport Analytics Pipeline", desc: "Telemetry ingestion & monitoring platform for autonomous mobile robots with real-time dashboards.", stack: ["Python", "FastAPI", "Grafana", "Redis"], url: "#" },
];

export default function Projects() {
  const username = "Sidd1218";
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [certs, setCerts] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d)) {
          d.sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));
          setRepos(d.slice(0, 10));
        }
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));

    setCerts({
      "Python: Introduction to Data Science and Machine Learning A-Z": "",
      "Cybersecurity Essentials — Cisco": "",
      "Data Scientist Certificate — Datacamp (Apr 2025)": "https://www.datacamp.com/certificate/DS0026252232246",
      "Introduction to Packet Tracer — Cisco": "",
      "Introduction to Cybersecurity — Cisco": "",
      "Publication: Spatio-temporal Feature-based Weapon and Violence Detection (IEEE, Oct 2023)": "https://ieeexplore.ieee.org/document/10290433"
    });
  }, []);

  const trans = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={trans}>
      <h1 style={{ marginTop: 0, fontSize: 36, fontWeight: 700, color: "#e6f7ff", marginBottom: 32 }}>Projects & Certifications</h1>

      <div style={{ display: "grid", gap: 32 }}>
        {/* Featured Projects */}
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "#38bdf8", marginBottom: 16 }}>Featured Projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
            {featuredManual.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...trans, delay: i * 0.08 }}
                style={{ padding: 20, borderRadius: 12, background: "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(14,165,233,0.03))", border: "1px solid rgba(56,189,248,0.15)" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ fontWeight: 800, fontSize: 18, color: "#e6f7ff" }}>{p.title}</div>
                  <a href={p.url} style={{ textDecoration: "none" }}>
                    <button style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124", padding: "8px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                      View
                    </button>
                  </a>
                </div>
                <div style={{ color: "#bcd7e6", marginBottom: 12, fontSize: 14, lineHeight: 1.6 }}>{p.desc}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.stack.map((s) => <div key={s} style={{ padding: "4px 12px", borderRadius: 20, background: "rgba(56,189,248,0.12)", fontSize: 13, color: "#9fbfd4", fontWeight: 500 }}>{s}</div>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Repositories */}
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "#38bdf8", marginBottom: 16 }}>GitHub Repositories</h2>
          {loading ? <div style={{ color: "#9fbfd4" }}>Loading repos...</div> : (
            <div style={{ display: "grid", gap: 12 }}>
              {repos.map((r, idx) => (
                <motion.a
                  key={r.id}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...trans, delay: idx * 0.05 }}
                  style={{ padding: 16, borderRadius: 12, background: "rgba(255,255,255,0.02)", textDecoration: "none", color: "#cfeffa", display: "block", border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(56,189,248,0.06)";
                    e.currentTarget.style.borderColor = "rgba(56,189,248,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 8, color: "#e6f7ff" }}>
                      {r.name}
                      <ExternalLink size={14} style={{ color: "#9fbfd4" }} />
                    </div>
                    <div style={{ color: "#9fbfd4", fontSize: 12 }}>{new Date(r.updated_at).toLocaleDateString()}</div>
                  </div>
                  {r.description && <div style={{ color: "#bcd7e6", marginTop: 8, fontSize: 14 }}>{r.description}</div>}
                </motion.a>
              ))}
            </div>
          )}
        </div>

        {/* Certifications */}
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "#38bdf8", marginBottom: 16 }}>Certifications & Publications</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {Object.keys(certs).map((k, idx) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...trans, delay: idx * 0.05 }}
                style={{ padding: 16, borderRadius: 12, background: "rgba(255,255,255,0.02)", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div style={{ color: "#bcd7e6", fontSize: 14 }}>{k}</div>
                <div>
                  {certs[k] ? (
                    <a href={certs[k]} target="_blank" rel="noreferrer">
                      <button style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124", padding: "8px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>View</button>
                    </a>
                  ) : (
                    <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#9fbfd4", padding: "8px 14px", borderRadius: 8, cursor: "not-allowed", opacity: 0.5, fontSize: 13 }}>No link</button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}