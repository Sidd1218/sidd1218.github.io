import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const featuredManual = [
  { id: "rtap", title: "Real-Time Transport Analytics Pipeline", desc: "Telemetry ingestion & monitoring platform.", stack: ["Python", "FastAPI", "Grafana"], url: "#" },
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
          setRepos(d.slice(0, 8));
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
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans}>
      <h3 style={{ marginTop: 0, fontSize: 28, fontWeight: 700 }}>Projects & Certifications</h3>

      <div style={{ display: "grid", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
          {featuredManual.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...trans, delay: i * 0.08 }}
              style={{ padding: 16, borderRadius: 10, background: "rgba(255,255,255,0.02)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 800, fontSize: 16 }}>{p.title}</div>
                <a href={p.url} style={{ textDecoration: "none" }}>
                  <button style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124", padding: "6px 12px", borderRadius: 8, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                    View
                  </button>
                </a>
              </div>
              <div style={{ color: "#bcd7e6", marginTop: 8, fontSize: 14 }}>{p.desc}</div>
              <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.stack.map((s) => <div key={s} style={{ padding: "4px 10px", borderRadius: 999, background: "rgba(56,189,248,0.08)", fontSize: 13, color: "#9fbfd4" }}>{s}</div>)}
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h4 style={{ marginBottom: 12, fontSize: 20, fontWeight: 600 }}>GitHub Repositories</h4>
          {loading ? <div style={{ color: "#9fbfd4" }}>Loading repos...</div> : (
            <div style={{ display: "grid", gap: 8 }}>
              {repos.map((r) => (
                <motion.a
                  key={r.id}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={trans}
                  style={{ padding: 12, borderRadius: 10, background: "rgba(255,255,255,0.02)", textDecoration: "none", color: "#cfeffa", display: "block" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
                      {r.name}
                      <ExternalLink size={14} style={{ color: "#9fbfd4" }} />
                    </div>
                    <div style={{ color: "#9fbfd4", fontSize: 12 }}>{new Date(r.updated_at).toLocaleDateString()}</div>
                  </div>
                  {r.description && <div style={{ color: "#bcd7e6", marginTop: 6, fontSize: 14 }}>{r.description}</div>}
                </motion.a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 style={{ marginBottom: 12, fontSize: 20, fontWeight: 600 }}>Certifications & Publications</h4>
          <div style={{ display: "grid", gap: 8 }}>
            {Object.keys(certs).map((k, idx) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...trans, delay: idx * 0.06 }}
                style={{ padding: 12, borderRadius: 10, background: "rgba(255,255,255,0.02)", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <div style={{ color: "#bcd7e6", fontSize: 14 }}>{k}</div>
                <div>
                  {certs[k] ? (
                    <a href={certs[k]} target="_blank" rel="noreferrer">
                      <button style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124", padding: "6px 12px", borderRadius: 8, border: "none", cursor: "pointer" }}>View</button>
                    </a>
                  ) : (
                    <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.06)", color: "#cfeffa", padding: "6px 12px", borderRadius: 8, cursor: "not-allowed", opacity: 0.5 }}>No link</button>
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