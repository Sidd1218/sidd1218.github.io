import React from "react";
import { Briefcase, Code2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: "Projects", label: "Projects", Icon: Code2 },
  { id: "Experience", label: "Experience", Icon: Briefcase },
  { id: "Contact", label: "Contact", Icon: Mail },
];

export default function TabBar({ visible = true, active, onClick }) {
  const trans = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 18 }}
          transition={trans}
          style={{
            position: "fixed",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 80,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {items.map(({ id, label, Icon }) => {
            const isActive = id === active;
            return (
              <div
                key={id}
                onClick={() => onClick(id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 999,
                  cursor: "pointer",
                  background: isActive ? "linear-gradient(90deg,#38bdf8,#0ea5e9)" : "rgba(255,255,255,0.02)",
                  color: isActive ? "#021124" : "#cfeffa",
                  boxShadow: isActive ? "0 8px 24px rgba(14,165,233,0.12)" : "none",
                  border: "1px solid rgba(255,255,255,0.03)",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={16} />
                <div style={{ fontSize: 13 }}>{label}</div>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}