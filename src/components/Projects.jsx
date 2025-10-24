import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * - featuredManual: update URLs/descriptions here
 * - GitHub repos auto-fetched using VITE_GITHUB_USERNAME (env)
 * - Certifications: read from public/cert_links.json
 */

const featuredManual = [
  { id: "rtap", title: "Real-Time Transport Analytics Pipeline", desc: "Telemetry ingestion & monitoring platform.", stack: ["Python", "FastAPI", "Grafana"], url: "#" },
  // TODO: replace / add featured projects here
];

export default function Projects() {
  const username = import.meta.env.VITE_GITHUB_USERNAME || "Sidd1218";
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [certs, setCerts] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d)) {
          d.sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));
          setRepos(d);
        }
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));

    fetch("/cert_links.json")
      .then((r) => r.json())
      .then(setCerts)
      .catch(() => setCerts({}));
  }, [username]);

  const trans = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans}>
      <h3 style={{ marginTop: 0 }}>Projects & Certifications</h3>

      <div style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {featuredManual.map((p, i) => (
            <div key={p.id} style={{ padding: 14, borderRadius: 10, background: "rgba(255,255,255,0.02)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 800 }}>{p.title}</div>
                <div>
                  <a href={p.url}><button style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124" }}>View</button></a>
                </div>
              </div>
              <div style={{ color: "#bcd7e6", marginTop: 8 }}>{p.desc}</div>
              <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.stack.map((s) => <div key={s} style={{ padding: "6px 10px", borderRadius: 999, background: "rgba(255,255,255,0.02)" }}>{s}</div>)}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ marginBottom: 8 }}>All repositories</h4>
          {loading ? <div style={{ color: "#9fbfd4" }}>Loading repos...</div> : (
            <div style={{ display: "grid", gap: 8 }}>
              {repos.map((r) => (
                <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" style={{ padding: 12, borderRadius: 10, background: "rgba(255,255,255,0.02)", textDecoration: "none", color: "#cfeffa" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700 }}>{r.name}</div>
                    <div style={{ color: "#9fbfd4", fontSize: 12 }}>{new Date(r.updated_at).toLocaleDateString()}</div>
                  </div>
                  <div style={{ color: "#bcd7e6", marginTop: 6 }}>{r.description}</div>
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 style={{ marginBottom: 8 }}>Certifications & Publications</h4>
          <div style={{ display: "grid", gap: 8 }}>
            {Object.keys(certs).length === 0 && <div style={{ color: "#9fbfd4" }}>No certification links found. Add them to public/cert_links.json</div>}
            {Object.keys(certs).map((k) => (
              <div key={k} style={{ padding: 12, borderRadius: 10, background: "rgba(255,255,255,0.02)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: "#bcd7e6" }}>{k}</div>
                <div>
                  {certs[k] ? <a href={certs[k]} target="_blank" rel="noreferrer"><button style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124" }}>View</button></a> : <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.06)", color: "#cfeffa" }}>Add link</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
