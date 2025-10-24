import React, { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORMSPREE_ID";
  const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (r.ok) {
        setStatus("sent");
        setState({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ maxWidth: 880 }}>
      <div style={{ padding: 20, borderRadius: 10, background: "rgba(255,255,255,0.02)" }}>
        <h3 style={{ marginTop: 0 }}>Contact</h3>
        <p style={{ color: "#9fbfd4" }}>Email: <a href="mailto:siddharth.2001.m@gmail.com">siddharth.2001.m@gmail.com</a></p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, marginTop: 12 }}>
          <input required placeholder="Name" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} style={{ padding: 10, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.35)", color: "#e6f7ff" }} />
          <input required placeholder="Email" type="email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} style={{ padding: 10, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.35)", color: "#e6f7ff" }} />
          <textarea required placeholder="Message" rows={6} value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} style={{ padding: 10, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.35)", color: "#e6f7ff" }} />
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button type="submit" style={{ background: "linear-gradient(90deg,#38bdf8,#0ea5e9)", color: "#021124", padding: "10px 14px", borderRadius: 8 }}>Send message</button>
            {status === "sending" && <span style={{ color: "#9fbfd4" }}>Sending...</span>}
            {status === "sent" && <span style={{ color: "#4ade80" }}>Message sent!</span>}
            {status === "error" && <span style={{ color: "#fb7185" }}>Error sending message.</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
