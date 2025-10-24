import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Code2, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const navItems = [
    { path: "/", label: "Home", Icon: Home },
    { path: "/about", label: "About", Icon: User },
    { path: "/projects", label: "Projects", Icon: Code2 },
    { path: "/experience", label: "Experience", Icon: Briefcase },
    { path: "/contact", label: "Contact", Icon: Mail },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(3,4,18,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#e6f7ff" }}>Siddharth Shanker</div>
        
        <nav style={{ display: "flex", gap: 8 }}>
          {navItems.map(({ path, label, Icon }) => (
            <NavLink
              key={path}
              to={path}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                background: isActive ? "linear-gradient(90deg,#38bdf8,#0ea5e9)" : "transparent",
                color: isActive ? "#021124" : "#bcd7e6",
                transition: "all 0.2s ease",
                border: isActive ? "none" : "1px solid transparent",
              })}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.background = "rgba(56,189,248,0.1)";
                  e.currentTarget.style.borderColor = "rgba(56,189,248,0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}