import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function ContactForm() {
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
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={trans} style={{ maxWidth: 880 }}>
      <div style={{ padding: 24, borderRadius: 10, background: "rgba(255,255,255,0.02)" }}>
        <h3 style={{ marginTop: 0, fontSize: 28, fontWeight: 700, display: "flex", alignItems: "center", gap: 12 }}>
          <Mail size={28} style={{ color: "#38bdf8" }} />
          Contact
        </h3>
        <p style={{ color: "#9fbfd4", marginBottom: 20 }}>
          Email: <a href="mailto:siddharth.2001.m@gmail.com" style={{ color: "#38bdf8", textDecoration: "none" }}>siddharth.2001.m@gmail.com</a>
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <input
            required
            placeholder="Your Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            style={{ padding: 12, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.35)", color: "#e6f7ff", fontSize: 14 }}
          />
          <input
            required
            placeholder="Your Email"
            type="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            style={{ padding: 12, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.35)", color: "#e6f7ff", fontSize: 14 }}
          />
          <textarea
            required
            placeholder="Your Message"
            rows={6}
            value={state.message}
            onChange={(e) => setState({ ...state, message: e.target.value })}
            style={{ padding: 12, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.35)", color: "#e6f7ff", fontSize: 14, resize: "vertical" }}
          />
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button
              type="submit"
              disabled={status === "sending"}
              style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124", padding: "12px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "sent" && <span style={{ color: "#4ade80", fontSize: 14 }}>Message sent successfully!</span>}
            {status === "error" && <span style={{ color: "#fb7185", fontSize: 14 }}>Error sending message.</span>}
          </div>
        </form>
      </div>
    </motion.div>
  );
}