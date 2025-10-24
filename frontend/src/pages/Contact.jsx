import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 3000);
    }, 1000);
  }

  const trans = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={trans}>
      <h1 style={{ marginTop: 0, fontSize: 36, fontWeight: 700, color: "#e6f7ff", marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
        <Mail size={36} style={{ color: "#38bdf8" }} />
        Get In Touch
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...trans, delay: 0.1 }}
        >
          <div style={{ padding: 32, borderRadius: 12, background: "linear-gradient(135deg, rgba(56,189,248,0.05), rgba(14,165,233,0.02))", border: "1px solid rgba(56,189,248,0.15)", height: "100%" }}>
            <h2 style={{ marginTop: 0, color: "#38bdf8", fontSize: 24, marginBottom: 24 }}>Contact Information</h2>
            
            <div style={{ marginBottom: 24 }}>
              <div style={{ color: "#9fbfd4", marginBottom: 8, fontSize: 14 }}>Email</div>
              <a href="mailto:siddharth.2001.m@gmail.com" style={{ color: "#e6f7ff", textDecoration: "none", fontSize: 16, fontWeight: 600 }}>
                siddharth.2001.m@gmail.com
              </a>
            </div>

            <div style={{ marginTop: 32 }}>
              <div style={{ color: "#9fbfd4", marginBottom: 12, fontSize: 14 }}>Connect With Me</div>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="https://github.com/Sidd1218" target="_blank" rel="noreferrer" style={{ padding: 12, borderRadius: 10, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#38bdf8", fontWeight: 600 }}>
                  <Github size={20} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/siddharth-shanker/" target="_blank" rel="noreferrer" style={{ padding: 12, borderRadius: 10, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#38bdf8", fontWeight: 600 }}>
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div style={{ marginTop: 32, padding: 20, background: "rgba(56,189,248,0.08)", borderRadius: 10 }}>
              <div style={{ color: "#bcd7e6", fontSize: 14, lineHeight: 1.7 }}>
                I'm always open to discussing new opportunities, collaborations, or just having a chat about data engineering and robotics. Feel free to reach out!
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...trans, delay: 0.2 }}
        >
          <div style={{ padding: 32, borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h2 style={{ marginTop: 0, color: "#e6f7ff", fontSize: 24, marginBottom: 24 }}>Send a Message</h2>
            
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
              <div>
                <label style={{ display: "block", color: "#9fbfd4", marginBottom: 8, fontSize: 14 }}>Your Name</label>
                <input
                  required
                  placeholder="John Doe"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  style={{ width: "100%", padding: 14, borderRadius: 8, border: "1px solid rgba(56,189,248,0.2)", background: "rgba(0,0,0,0.3)", color: "#e6f7ff", fontSize: 15 }}
                />
              </div>
              <div>
                <label style={{ display: "block", color: "#9fbfd4", marginBottom: 8, fontSize: 14 }}>Your Email</label>
                <input
                  required
                  placeholder="john@example.com"
                  type="email"
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  style={{ width: "100%", padding: 14, borderRadius: 8, border: "1px solid rgba(56,189,248,0.2)", background: "rgba(0,0,0,0.3)", color: "#e6f7ff", fontSize: 15 }}
                />
              </div>
              <div>
                <label style={{ display: "block", color: "#9fbfd4", marginBottom: 8, fontSize: 14 }}>Your Message</label>
                <textarea
                  required
                  placeholder="Tell me about your project or inquiry..."
                  rows={8}
                  value={state.message}
                  onChange={(e) => setState({ ...state, message: e.target.value })}
                  style={{ width: "100%", padding: 14, borderRadius: 8, border: "1px solid rgba(56,189,248,0.2)", background: "rgba(0,0,0,0.3)", color: "#e6f7ff", fontSize: 15, resize: "vertical" }}
                />
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124", padding: "14px 24px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", gap: 10, fontSize: 15 }}
                >
                  <Send size={18} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "sent" && <span style={{ color: "#4ade80", fontSize: 14, fontWeight: 600 }}>✓ Message sent successfully!</span>}
                {status === "error" && <span style={{ color: "#fb7185", fontSize: 14, fontWeight: 600 }}>✗ Error sending message.</span>}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}