"use client";

import React, { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

function BoltIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function CheckIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function InfoIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function AlertCircleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function ArrowUpIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function ArrowDownIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

function LockIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ChevronDownIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ClockIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function FlareIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  );
}

function ToolsIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function UserIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MessageIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function QuoteIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function AIChipIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 3h6M9 21h6M3 9v6M21 9v6M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M18 9h3M3 15h3M18 15h3" />
    </svg>
  );
}

function ShieldIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function SlidersIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

// ─── Primitives ───────────────────────────────────────────────────────────────

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className="toggle-btn"
      style={{
        width: 40, height: 24, borderRadius: 12,
        background: checked ? "#7367f0" : "#dce3e1",
        border: "none", cursor: "pointer",
        position: "relative", flexShrink: 0,
        transition: "background 220ms", padding: 0,
      }}
    >
      <span style={{
        position: "absolute", width: 18, height: 18,
        borderRadius: "50%", background: "#fff",
        top: 3, left: checked ? 19 : 3,
        transition: "left 220ms", display: "block",
      }} />
    </button>
  );
}

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className="checkbox-btn"
      style={{
        width: 16, height: 16, borderRadius: 2,
        border: checked ? "none" : "1.5px solid #212121",
        background: checked ? "#7367f0" : "transparent",
        cursor: "pointer", display: "flex",
        alignItems: "center", justifyContent: "center",
        flexShrink: 0, padding: 0, transition: "all 150ms",
        color: "#fff",
      }}
    >
      {checked && <CheckIcon size={10} />}
    </button>
  );
}

function Radio({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      role="radio"
      aria-checked={checked}
      onClick={onChange}
      style={{
        width: 16, height: 16, borderRadius: "50%",
        border: checked ? "none" : "1.5px solid #212121",
        background: checked ? "#7367f0" : "transparent",
        cursor: "pointer", display: "flex",
        alignItems: "center", justifyContent: "center",
        flexShrink: 0, padding: 0, transition: "all 150ms",
      }}
    >
      {checked && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "block" }} />}
    </button>
  );
}

type MetricDir = "up" | "down" | "neutral";

function MetricBadge({ label, dir = "neutral" }: { label: string; dir?: MetricDir }) {
  const color = dir === "up" ? "#17b169" : dir === "down" ? "#e53e3e" : "#2f3d39";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      background: "rgba(134,146,208,0.1)", padding: "3px 8px",
      borderRadius: 4, fontSize: 12, fontWeight: 500,
      color: "#2f3d39", whiteSpace: "nowrap",
    }}>
      <span style={{ color }}>{dir === "up" ? <ArrowUpIcon /> : dir === "down" ? <ArrowDownIcon /> : null}</span>
      {label}
    </span>
  );
}

function Alert({ variant = "info", title, children }: {
  variant?: "info" | "success" | "error";
  title?: string;
  children: React.ReactNode;
}) {
  const s = {
    info: { bg: "#edf5fd", border: "#3047ec", iconColor: "#3047ec", textColor: "#564db4" },
    success: { bg: "#eafbf2", border: "#17b169", iconColor: "#17b169", textColor: "#161f1c" },
    error: { bg: "#fdecec", border: "#ff0000", iconColor: "#ff0000", textColor: "#161f1c" },
  }[variant];

  return (
    <div style={{
      display: "flex", gap: 12, padding: "12px 16px", borderRadius: 4,
      background: s.bg, borderLeft: `4px solid ${s.border}`,
    }}>
      <span style={{ color: s.iconColor, flexShrink: 0, marginTop: 1 }}><InfoIcon size={18} /></span>
      <div>
        {title && <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 3, color: "#161f1c" }}>{title}</div>}
        <div style={{ fontSize: 14, color: s.textColor, lineHeight: 1.5 }}>{children}</div>
      </div>
    </div>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 6,
      border: "1px solid #dce3e1", overflow: "hidden", ...style,
    }}>
      {children}
    </div>
  );
}

function SectionHeader({ title, description, badge }: {
  title: string; description?: string; badge?: React.ReactNode;
}) {
  return (
    <div style={{ padding: "16px 20px", borderBottom: "1px solid #dce3e1" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: description ? 4 : 0 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#212121" }}>{title}</span>
        {badge}
      </div>
      {description && <p style={{ fontSize: 14, color: "#565656", margin: 0 }}>{description}</p>}
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function DashboardIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" />
      <rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" />
    </svg>
  );
}

function CraneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 21H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5l2 3h9a2 2 0 0 1 2 2v2" />
      <path d="M16 21v-5a2 2 0 0 0-2-2h-1" />
      <circle cx="19" cy="19" r="2" />
    </svg>
  );
}

function PaletteIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function HandshakeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" />
    </svg>
  );
}

function ChatIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function RocketIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function BarChartIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function HistoryIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" /><path d="M12 7v5l4 2" />
    </svg>
  );
}

function LifeBuoyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </svg>
  );
}

function SettingsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function SendIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function ChevronRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ChevronUpIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function NavBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 500, color: "#344054",
      background: "#f2f4f7", borderRadius: 10,
      padding: "1px 7px", whiteSpace: "nowrap", flexShrink: 0,
    }}>{children}</span>
  );
}

function NavItem({
  icon, label, active = false, indent = false, badge,
  expanded, chevron = true,
}: {
  icon: React.ReactNode; label: string; active?: boolean;
  indent?: boolean; badge?: string; expanded?: boolean; chevron?: boolean;
}) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: indent ? "10px 16px 10px 28px" : "10px 16px",
      cursor: "pointer", borderRadius: 6,
      color: active ? "#7367f0" : "#565656",
      background: active ? "rgba(115,103,240,0.06)" : "transparent",
      transition: "background 150ms",
    }}>
      <span style={{ flexShrink: 0 }}>{icon}</span>
      <span style={{ flex: 1, fontSize: 15, fontWeight: 600, lineHeight: 1 }}>{label}</span>
      {badge && <NavBadge>{badge}</NavBadge>}
      {chevron && (
        expanded !== undefined
          ? <span style={{ color: "#9ca3af", flexShrink: 0 }}>{expanded ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}</span>
          : <span style={{ color: "#9ca3af", flexShrink: 0 }}><ChevronDownIcon size={16} /></span>
      )}
    </div>
  );
}

// ─── Nav icons for new narrow sidebar ────────────────────────────────────────

function GlobeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ArrowRightIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function UsersIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Sidebar() {
  const navItems = [
    { id: "chat", label: "Chat", icon: <ChatIcon size={18} />, active: false },
    { id: "settings", label: "Settings", icon: <SettingsIcon size={18} />, active: false },
    { id: "intelligence", label: "Intelligence", icon: <GlobeIcon size={18} />, active: true },
    { id: "actions", label: "Actions", icon: <ArrowRightIcon size={18} />, active: false },
    { id: "deploy", label: "Deploy", icon: <RocketIcon size={18} />, active: false },
    { id: "teams", label: "Teams", icon: <UsersIcon size={18} />, active: false },
  ];

  return (
    <aside style={{
      width: 160, flexShrink: 0,
      background: "#fff",
      borderRight: "1px solid #dce3e1",
      display: "flex", flexDirection: "column",
      height: "100vh", position: "sticky", top: 0,
    }}>
      {/* Logo */}
      <div style={{ padding: "16px 12px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #dce3e1" }}>
        <div style={{
          width: 24, height: 24, borderRadius: 5,
          background: "#7367f0",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#212121", lineHeight: 1 }}>CustomGPT</span>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "8px 0" }}>
        {navItems.map(item => (
          <div
            key={item.id}
            style={{
              height: 44, display: "flex", alignItems: "center", gap: 10,
              padding: "0 12px", cursor: "pointer",
              background: item.active ? "rgba(115,103,240,0.08)" : "transparent",
              color: item.active ? "#7367f0" : "#565656",
              fontWeight: item.active ? 700 : 500,
              fontSize: 15,
              transition: "background 150ms",
            }}
          >
            <span style={{ flexShrink: 0 }}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Bottom avatar */}
      <div style={{ padding: "12px", borderTop: "1px solid #dce3e1", display: "flex", justifyContent: "center" }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "#1a1a2e",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 13, fontWeight: 600,
        }}>N</div>
      </div>
    </aside>
  );
}

// ─── TopBar ───────────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <div style={{
      height: 56, flexShrink: 0,
      background: "#fff", borderBottom: "1px solid #dce3e1",
      display: "flex", alignItems: "center",
      padding: "0 24px", gap: 12,
    }}>
      {/* Left */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#212121" }}>Customer Support Agent</span>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          background: "#eafbf2", color: "#0d6b3a",
          fontSize: 12, fontWeight: 600,
          padding: "3px 8px", borderRadius: 4,
        }}>
          <BoltIcon size={11} /> V3 ON
        </span>
      </div>
      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          padding: "7px 14px", borderRadius: 6, fontSize: 14, fontWeight: 500,
          border: "1px solid #dce3e1", background: "#fff", color: "#212121",
          cursor: "pointer",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Preview
        </button>
        <button style={{
          display: "inline-flex", alignItems: "center",
          padding: "7px 18px", borderRadius: 6, fontSize: 14, fontWeight: 500,
          border: "none", background: "#7367f0", color: "#fff",
          cursor: "pointer",
        }}>
          Publish
        </button>
      </div>
    </div>
  );
}

// ─── ChatPanel ────────────────────────────────────────────────────────────────

function ShareIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function ExpandIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function CopyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function ThumbUpIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function ThumbDownIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z" />
      <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
    </svg>
  );
}

function MicIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function ChatPanel() {
  return (
    <div style={{
      width: 300, flexShrink: 0,
      background: "#fff", borderLeft: "1px solid #dce3e1",
      display: "flex", flexDirection: "column",
      height: "100%",
    }}>
      {/* Header */}
      <div style={{
        height: 48, flexShrink: 0,
        background: "#7367f0",
        display: "flex", alignItems: "center",
        padding: "0 14px", gap: 8,
      }}>
        <span style={{ flex: 1, fontSize: 15, fontWeight: 600, color: "#fff" }}>Agent title</span>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 4, display: "flex", alignItems: "center" }}>
          <ShareIcon size={18} />
        </button>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 4, display: "flex", alignItems: "center" }}>
          <ExpandIcon size={18} />
        </button>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 4, display: "flex", alignItems: "center" }}>
          <SettingsIcon size={18} />
        </button>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 4, display: "flex", alignItems: "center" }}>
          <XIcon size={18} />
        </button>
      </div>

      {/* Chat body */}
      <div style={{ flex: 1, overflowY: "auto", padding: 16, background: "#f9f9f9", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Bot message */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{
            background: "#7367f0", color: "#fff",
            borderRadius: "12px 12px 12px 2px",
            padding: "10px 14px", fontSize: 14, lineHeight: 1.5,
            maxWidth: 220,
          }}>
            Would you like to build AI agent from your Google Drive?
          </div>
        </div>

        {/* User message with avatar */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, justifyContent: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, maxWidth: 220 }}>
            <div style={{
              background: "#fff", color: "#565656", fontSize: 13, lineHeight: 1.5,
              border: "1px solid #e5e5e5", borderRadius: "12px 12px 2px 12px",
              padding: "10px 14px",
            }}>
              The global GDP in 2024 was approximately $105 trillion, reflecting continued growth across emerging and developed markets, driven by services, technology, and infrastructure investment.
            </div>
            {/* Source image placeholder */}
            <div style={{
              width: 160, height: 80, background: "#e5e5e5",
              borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 12, color: "#9ca3af" }}>Source image</span>
            </div>
            {/* Reaction row */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: 2, display: "flex" }}>
                <CopyIcon size={16} />
              </button>
              <button style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: 2, display: "flex" }}>
                <ThumbUpIcon size={16} />
              </button>
              <button style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: 2, display: "flex" }}>
                <ThumbDownIcon size={16} />
              </button>
            </div>
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "#7367f0", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: 12, fontWeight: 600,
          }}>A</div>
        </div>
      </div>

      {/* Input area */}
      <div style={{ borderTop: "1px solid #dce3e1", padding: 12, display: "flex", alignItems: "center", gap: 8, background: "#fff" }}>
        <span style={{ flex: 1, fontSize: 14, color: "#9ca3af" }}>Ask me anything...</span>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#7367f0", padding: 4, display: "flex" }}>
          <MicIcon size={18} />
        </button>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#7367f0", padding: 4, display: "flex" }}>
          <SendIcon size={18} />
        </button>
      </div>

      {/* Footer */}
      <div style={{ background: "#f2f2f2", padding: "8px 12px", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#9ca3af" }}>By using this agent, you agree to our Terms of Service</div>
        <div style={{ fontSize: 11, color: "#9ca3af" }}>Powered by CustomGPT.ai</div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IntelligencePage() {
  const [brainV3, setBrainV3] = useState(true);
  const [autoReview, setAutoReview] = useState(true);
  const [factChecker, setFactChecker] = useState(true);
  const [toneReviewer, setToneReviewer] = useState(true);
  const [hallucinationGuard, setHallucinationGuard] = useState(false);
  const [goal, setGoal] = useState("optimal");
  const [dataSource, setDataSource] = useState("my-data");
  const [userAwareness, setUserAwareness] = useState(false);
  const [maxQueries, setMaxQueries] = useState("200");
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [dropdownOpensUp, setDropdownOpensUp] = useState(false);
  const modelTriggerRef = React.useRef<HTMLDivElement>(null);
  const infoIconRef = React.useRef<HTMLSpanElement>(null);
  const [infoTooltip, setInfoTooltip] = useState<{ x: number; y: number } | null>(null);

  React.useEffect(() => {
    if (!modelDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (modelTriggerRef.current && !modelTriggerRef.current.contains(e.target as Node)) {
        setModelDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [modelDropdownOpen]);
  const [selectedModel, setSelectedModel] = useState("gpt-4.1");
  const [premiumModal, setPremiumModal] = useState<string | null>(null);
  const [premiumModalClosing, setPremiumModalClosing] = useState(false);

  const closeModal = React.useCallback(() => {
    setPremiumModalClosing(true);
    setTimeout(() => {
      setPremiumModal(null);
      setPremiumModalClosing(false);
    }, 260);
  }, []);

  const models = [
    // ── All plans ──────────────────────────────────────────────────────
    {
      id: "gpt-4.1",
      label: "GPT-4.1",
      badge: { text: "Recommended", bg: "#eafbf2", color: "#0d6b3a", icon: "check" },
      bestFor: "General use (recommended default)",
      latency: "Fast",
      latencyDot: "#9fe7c1",
      plan: "all" as const,
    },
    // ── Premium ────────────────────────────────────────────────────────
    {
      id: "gpt-4o-mini",
      label: "GPT-4o mini",
      badge: { text: "Premium", bg: "#e3e1fc", color: "#4c3db5", icon: "bolt" },
      bestFor: "High-volume, sub-second responses",
      latency: "Fastest",
      latencyDot: "#4ade80",
      plan: "premium" as const,
    },
    {
      id: "gpt-5.1",
      label: "GPT-5.1",
      badge: { text: "Premium", bg: "#e3e1fc", color: "#4c3db5", icon: "bolt" },
      bestFor: "Complex reasoning tasks",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "premium" as const,
    },
    // ── Enterprise ─────────────────────────────────────────────────────
    {
      id: "claude-sonnet-4.6",
      label: "Claude Sonnet 4.6",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Advanced intelligence and natural dialogue",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "claude-opus-4.6",
      label: "Claude Opus 4.6",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Most capable model available",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "claude-4.5-haiku",
      label: "Claude 4.5 Haiku",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Lightweight, fast responses",
      latency: "Fastest",
      latencyDot: "#4ade80",
      plan: "enterprise" as const,
    },
    {
      id: "claude-4.5-opus",
      label: "Claude 4.5 Opus",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Advanced reasoning and intelligence",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "claude-4.6-opus",
      label: "Claude 4.6 Opus",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Advanced reasoning and intelligence",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "claude-4.5-sonnet",
      label: "Claude 4.5 Sonnet",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Advanced intelligence and natural dialogue",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "claude-4.6-sonnet",
      label: "Claude 4.6 Sonnet",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Advanced intelligence and natural dialogue",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "gpt-5.1-optimal",
      label: "GPT-5.1 Optimal",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Deeper reasoning, structured problem-solving",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "gpt-5.1-smart",
      label: "GPT-5.1 Smart",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Analytical or technical interactions",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "gpt-5.2-optimal",
      label: "GPT-5.2 Optimal",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Analytical or technical interactions",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "gpt-5.2-smart",
      label: "GPT-5.2 Smart",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Analytical or technical interactions",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "gpt-5.4",
      label: "GPT-5.4",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Analytical and technical agents requiring structured, precise responses",
      latency: "Medium latency",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
    {
      id: "gemini-2.5-flash",
      label: "Gemini 2.5 Flash",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "High-volume query handling, quick responses",
      latency: "Fastest",
      latencyDot: "#4ade80",
      plan: "enterprise" as const,
    },
    {
      id: "gemini-3-pro",
      label: "Gemini 3 Pro",
      badge: { text: "Enterprise", bg: "#fff0e6", color: "#7c3800", icon: "bolt" },
      bestFor: "Advanced reasoning (preview mode)",
      latency: "Moderate",
      latencyDot: "#ffcfa0",
      plan: "enterprise" as const,
    },
  ];

  const tabs = [
    { id: "general", label: "General", icon: <ToolsIcon /> },
    { id: "persona", label: "Persona", icon: <UserIcon /> },
    { id: "conversation", label: "Conversation", icon: <MessageIcon /> },
    { id: "citations", label: "Citations", icon: <QuoteIcon /> },
    { id: "intelligence", label: "Intelligence", icon: <AIChipIcon /> },
    { id: "advanced", label: "Advanced", icon: <SlidersIcon /> },
    { id: "security", label: "Security", icon: <ShieldIcon /> },
  ];

  const goals = [
    {
      id: "speed", label: "Speed", desc: "Fast answers for high-volume support",
      metrics: [{ label: "Speed", dir: "up" as MetricDir }, { label: "Accuracy", dir: "down" as MetricDir }, { label: "Cost", dir: "down" as MetricDir }],
    },
    {
      id: "optimal", label: "Optimal", badge: "Recommended", desc: "Best for most business use cases",
      metrics: [{ label: "Balanced speed, accuracy and cost", dir: "neutral" as MetricDir }],
    },
    {
      id: "accuracy", label: "Accuracy", desc: "Strictly grounded, citation-heavy answers",
      metrics: [{ label: "Speed", dir: "down" as MetricDir }, { label: "Accuracy", dir: "up" as MetricDir }, { label: "Cost", dir: "up" as MetricDir }],
    },
    {
      id: "understanding", label: "Understanding", desc: "Multi-step reasoning for complex tasks",
      metrics: [{ label: "Speed", dir: "down" as MetricDir }, { label: "Accuracy", dir: "up" as MetricDir }, { label: "Cost", dir: "up" as MetricDir }],
    },
  ];

  const reviewCards = [
    {
      key: "factChecker", label: "Fact Checker",
      desc: "Verifies factual claims against sources before responding. Skips chitchat and non-factual tasks.",
      checked: factChecker, toggle: () => setFactChecker(v => !v),
      metrics: [{ label: "Speed", dir: "down" as MetricDir }, { label: "Accuracy", dir: "up" as MetricDir }, { label: "Cost", dir: "up" as MetricDir }],
    },
    {
      key: "toneReviewer", label: "Tone Reviewer",
      desc: "Ensures responses match the agent's configured persona and tone. Flags off-brand language.",
      checked: toneReviewer, toggle: () => setToneReviewer(v => !v),
      metrics: [{ label: "Speed", dir: "down" as MetricDir }, { label: "Accuracy", dir: "up" as MetricDir }, { label: "Cost", dir: "up" as MetricDir }],
    },
    {
      key: "hallucinationGuard", label: "Hallucination Guard",
      desc: "Detects when the agent invents information not present in sources. Adds a confidence disclaimer.",
      checked: hallucinationGuard, toggle: () => setHallucinationGuard(v => !v),
      metrics: [{ label: "Speed", dir: "down" as MetricDir }, { label: "Accuracy", dir: "up" as MetricDir }, { label: "Cost", dir: "up" as MetricDir }],
    },
  ];

  const summaryItems = [
    goal === "optimal" ? "Balanced performance" : `${goal.charAt(0).toUpperCase() + goal.slice(1)}-focused performance`,
    autoReview ? "Quality-checked responses" : "Standard response mode",
    dataSource === "my-data" ? "Grounded in your data only" : "Broad knowledge access",
    brainV3 ? "Multi-step agentic reasoning" : "Simple query-response mode",
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <TopBar />

        <div style={{ flex: 1, display: "flex", minHeight: 0 }}>

      <div style={{ flex: 1, background: "#f5f5f5", overflowY: "auto" }}>

      {/* Top bar / breadcrumb */}
      <div style={{ background: "#fff", borderBottom: "1px solid #dce3e1", padding: "20px 32px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 22, fontWeight: 600, color: "#000" }}>Personalize</span>
            <span style={{ fontSize: 22, fontWeight: 600, color: "#212121" }}>·</span>
            <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 22, fontWeight: 600, color: "#000" }}>Agent name</span>
            <span style={{
              background: "#ffd154", color: "#8c690b", padding: "2px 10px",
              borderRadius: 4, fontSize: 13, fontWeight: 500,
              display: "inline-flex", alignItems: "center", gap: 4,
            }}>
              <BoltIcon size={12} /> Brain V3
            </span>
          </div>
          <button style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            padding: "6px 14px", borderRadius: 6, fontSize: 13, fontWeight: 500,
            border: "none", background: "#7367f0", color: "#fff",
            cursor: "pointer",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Premium
          </button>
        </div>
        <p style={{ fontSize: 13, color: "#565656", margin: "0 0 16px" }}>
          Settings here apply to all deployment options.
        </p>
        <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {tabs.map(tab => {
            const active = tab.id === "intelligence";
            return (
              <button key={tab.id} style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "7px 14px", borderRadius: "4px 4px 0 0",
                border: "none", cursor: "pointer", fontSize: 13, fontWeight: 500,
                background: active ? "#7367f0" : "transparent",
                color: active ? "#fff" : "#7367f0",
                transition: "all 150ms",
              }}>
                {tab.icon}{tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 20 }}>

        {/* Brain V3 */}
        <Card>
          <div style={{ padding: "18px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: "rgba(115,103,240,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#7367f0", flexShrink: 0,
                }}>
                  <BoltIcon size={20} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#161f1c" }}>Brain V3</span>
                    <span style={{ fontSize: 14, color: "#2f3d39" }}>Agentic orchestration with multi-step planning</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#2f3d39", margin: 0, lineHeight: 1.6 }}>
                    Enable multi-step agentic reasoning. All Actions and MCPs work together under a single planner to complete complex tasks. Disabling V3 returns the agent to simple query-response mode.
                  </p>
                </div>
              </div>
              <Toggle checked={brainV3} onChange={() => setBrainV3(v => !v)} />
            </div>
            {brainV3 && (
              <div style={{ marginTop: 16 }}>
                <Alert variant="success" title="This is a success alert.">
                  Enabling V3 unlocks Code Execution and Auto Review, and makes RAG optional. This is a top-level setting — it affects all deployments of this agent.
                </Alert>
              </div>
            )}
          </div>

          <div style={{ height: 1, background: "#dce3e1" }} />

          {/* Auto Review */}
          <div style={{ padding: "18px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#161f1c", marginBottom: 2 }}>Auto Review</div>
                <div style={{ fontSize: 14, color: "#2f3d39" }}>Run quality-checking subagents after every response</div>
              </div>
              <Toggle checked={autoReview} onChange={() => setAutoReview(v => !v)} />
            </div>

            {autoReview && (
              <div style={{ marginTop: 16, borderRadius: 4, border: "1px solid #dce3e1", overflow: "hidden" }}>
                {reviewCards.map((card, i) => (
                  <div key={card.key}>
                    <div style={{
                      padding: "14px 16px",
                      background: card.checked ? "rgba(115,103,240,0.04)" : "#fff",
                      transition: "background 150ms",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 15, fontWeight: 500, color: "#212121", marginBottom: 3 }}>{card.label}</div>
                          <div style={{ fontSize: 14, color: "#2f3d39", lineHeight: 1.5 }}>{card.desc}</div>
                        </div>
                        <Checkbox checked={card.checked} onChange={card.toggle} />
                      </div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {card.metrics.map(m => <MetricBadge key={m.label} label={m.label} dir={m.dir} />)}
                      </div>
                    </div>
                    {i < reviewCards.length - 1 && <div style={{ height: 1, background: "#dce3e1" }} />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>

        {/* Primary Goal */}
        <Card>
          <SectionHeader
            title="What is your primary goal?"
            description="Choose the outcome you want to optimize for."
            badge={
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 4,
                color: "#7367f0", fontSize: 12, fontWeight: 500,
                padding: "2px 8px", borderRadius: 4, border: "1px solid #7367f0",
              }}>
                <LockIcon size={11} /> Premium Feature
              </span>
            }
          />
          <div style={{ padding: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {goals.map(g => (
              <div
                key={g.id}
                onClick={() => setGoal(g.id)}
                className="goal-card"
                style={{
                  textAlign: "left", padding: 14, borderRadius: 6,
                  border: `1.5px solid ${goal === g.id ? "#7367f0" : "#dce3e1"}`,
                  background: goal === g.id ? "rgba(115,103,240,0.04)" : "#fff",
                  cursor: "pointer", transition: "border-color 150ms, background 150ms",
                  display: "flex", flexDirection: "column", gap: 8,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1, paddingRight: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <span style={{ fontSize: 15, fontWeight: 500, color: "#212121" }}>{g.label}</span>
                      {g.badge && (
                        <span style={{
                          fontSize: 11, fontWeight: 500, color: "#2f3d39",
                          background: "rgba(134,146,208,0.1)", padding: "1px 6px", borderRadius: 4,
                        }}>{g.badge}</span>
                      )}
                    </div>
                    <div style={{ fontSize: 13, color: "#2f3d39", lineHeight: 1.45 }}>{g.desc}</div>
                  </div>
                  <Radio checked={goal === g.id} onChange={() => setGoal(g.id)} />
                </div>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {g.metrics.map(m => <MetricBadge key={m.label} label={m.label} dir={m.dir} />)}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Max Queries */}
        <Card>
          <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#161f1c", marginBottom: 2 }}>Max queries per task</div>
              <div style={{ fontSize: 14, color: "#2f3d39" }}>Limit how many steps the agent can take on a single task</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 140 }}>
              <label style={{ fontSize: 13, fontWeight: 500, color: "#2f3d39", display: "flex", alignItems: "center", gap: 4 }}>
                Set maximum{" "}
                <span
                  ref={infoIconRef}
                  style={{ display: "inline-flex", alignItems: "center", cursor: "default" }}
                  onMouseEnter={() => {
                    if (infoIconRef.current) {
                      const r = infoIconRef.current.getBoundingClientRect();
                      setInfoTooltip({ x: r.left + r.width / 2, y: r.top - 6 });
                    }
                  }}
                  onMouseLeave={() => setInfoTooltip(null)}
                >
                  <InfoIcon size={13} />
                </span>
              </label>
              <input
                type="number"
                value={maxQueries}
                onChange={e => setMaxQueries(e.target.value)}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#7367f0")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = document.activeElement === e.currentTarget ? "#7367f0" : "#dce3e1")}
                onFocus={e => { e.currentTarget.style.borderColor = "#7367f0"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(115,103,240,0.12)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "#dce3e1"; e.currentTarget.style.boxShadow = "none"; }}
                style={{
                  border: "1px solid #dce3e1", borderRadius: 4,
                  padding: "6px 10px", fontSize: 13,
                  color: "#161f1c", fontFamily: "inherit",
                  outline: "none", width: "100%",
                  transition: "border-color 150ms, box-shadow 150ms",
                }}
              />
              <span style={{ fontSize: 12, color: "#6f807a" }}>Message</span>
            </div>
          </div>
        </Card>

        {/* Model Selection */}
        <Card style={{ overflow: "visible" }}>
          <SectionHeader
            title="Model Selection"
            description="Choose the reasoning model for this agent. Stronger models may consume more queries."
          />
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: "#212121" }}>Reasoning Model</div>

            {/* Trigger row */}
            {(() => {
              const active = models.find(m => m.id === selectedModel) ?? models[0];
              return (
                <div
                  ref={modelTriggerRef}
                  style={{
                    position: "relative",
                    boxShadow: modelDropdownOpen ? "0 8px 32px rgba(115,103,240,0.18)" : "none",
                    borderRadius: 6,
                    transition: "box-shadow 200ms",
                    zIndex: modelDropdownOpen ? 10 : "auto",
                  }}>
                  <div
                    onClick={() => {
                      if (!modelDropdownOpen && modelTriggerRef.current) {
                        const rect = modelTriggerRef.current.getBoundingClientRect();
                        const spaceBelow = window.innerHeight - rect.bottom;
                        setDropdownOpensUp(spaceBelow < 420);
                      }
                      setModelDropdownOpen(v => !v);
                    }}
                    onMouseEnter={e => {
                      if (!modelDropdownOpen) (e.currentTarget as HTMLDivElement).style.borderColor = "#7367f0";
                    }}
                    onMouseLeave={e => {
                      if (!modelDropdownOpen) (e.currentTarget as HTMLDivElement).style.borderColor = "#dce3e1";
                    }}
                    style={{
                      border: `1.5px solid ${modelDropdownOpen ? "#7367f0" : "#dce3e1"}`,
                      borderRadius: modelDropdownOpen ? "6px 6px 0 0" : 6,
                      padding: "14px 16px", background: "#fff", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 12,
                      transition: "border-color 150ms",
                    }}
                  >
                    <span style={{ color: "#7367f0" }}><FlareIcon size={18} /></span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 15, fontWeight: 500, color: "#161f1c" }}>{active.label}</span>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 4,
                          fontSize: 12, fontWeight: 500, color: active.badge.color,
                          background: active.badge.bg, padding: "2px 8px", borderRadius: 4,
                        }}>
                          {active.badge.icon === "alert" ? <AlertCircleIcon size={12} /> : <BoltIcon size={11} />}
                          {active.badge.text}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <span style={{ fontSize: 12, fontWeight: 500, color: "#c0cac7" }}>
                          Best for: <span>{active.bestFor}</span>
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 500, color: "#c0cac7" }}>
                          <ClockIcon size={12} />
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: active.latencyDot, display: "inline-block" }} />
                          {active.latency}
                        </span>
                      </div>
                    </div>
                    <span style={{
                      color: "#9ca3af", transition: "transform 150ms",
                      transform: modelDropdownOpen
                        ? (dropdownOpensUp ? "rotate(0deg)" : "rotate(180deg)")
                        : (dropdownOpensUp ? "rotate(180deg)" : "rotate(0deg)"),
                    }}>
                      <ChevronDownIcon size={16} />
                    </span>
                  </div>

                  {/* Dropdown list */}
                  {modelDropdownOpen && (
                    <div style={{
                      position: "absolute",
                      left: 0, right: 0,
                      ...(dropdownOpensUp
                        ? { bottom: "100%", marginBottom: 2, borderRadius: "6px 6px 0 0", border: "1.5px solid #7367f0", borderBottom: "none" }
                        : { top: "100%", marginTop: 0, borderRadius: "0 0 6px 6px", border: "1.5px solid #7367f0", borderTop: "none" }
                      ),
                      background: "#fff",
                      maxHeight: 396, overflowY: "auto",
                      zIndex: 20,
                    }}>
                      {(["all", "premium", "enterprise"] as const).map(planGroup => {
                        const group = models.filter(m => m.plan === planGroup);
                        if (!group.length) return null;
                        const groupLabel = planGroup === "all" ? "Standard" : planGroup === "premium" ? "Premium" : "Enterprise";
                        const groupColor = planGroup === "all" ? "#9aa7a3" : planGroup === "premium" ? "#4c3db5" : "#7c3800";
                        return (
                          <div key={planGroup}>
                            <div style={{
                              padding: "6px 10px 4px",
                              fontSize: 11, fontWeight: 600, letterSpacing: "0.06em",
                              color: groupColor, textTransform: "uppercase",
                            }}>
                              {groupLabel}
                            </div>
                            <div>
                              {group.map((m) => (
                                <div
                                  key={m.id}
                                  onClick={() => {
                                    if (m.plan !== "all") {
                                      setPremiumModal(m.id);
                                      setModelDropdownOpen(false);
                                    } else {
                                      setSelectedModel(m.id);
                                      setModelDropdownOpen(false);
                                    }
                                  }}
                                  className="model-cell"
                                  style={{
                                    display: "flex", alignItems: "center", gap: 12,
                                    padding: "10px 12px", cursor: "pointer",
                                    background: m.id === selectedModel ? "rgba(115,103,240,0.06)" : "#fff",
                                    borderTop: "1px solid #f2f4f7",
                                    transition: "background 120ms",
                                    opacity: m.plan !== "all" ? 0.82 : 1,
                                  }}
                                >
                                  <span style={{ color: "#7367f0" }}><FlareIcon size={18} /></span>
                                  <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                                      <span style={{ fontSize: 14, fontWeight: 500, color: "#161f1c" }}>{m.label}</span>
                                      <span style={{
                                        display: "inline-flex", alignItems: "center", gap: 4,
                                        fontSize: 11, fontWeight: 500, color: m.badge.color,
                                        background: m.badge.bg, padding: "2px 7px", borderRadius: 4,
                                      }}>
                                        {m.badge.icon === "alert"
                                          ? <AlertCircleIcon size={11} />
                                          : m.badge.icon === "check"
                                            ? <CheckIcon size={10} />
                                            : <BoltIcon size={10} />}
                                        {m.badge.text}
                                      </span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                                      <span style={{ fontSize: 12, fontWeight: 400, color: "#c0cac7" }}>
                                        Best for: {m.bestFor}
                                      </span>
                                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "#c0cac7" }}>
                                        <ClockIcon size={11} />
                                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: m.latencyDot, display: "inline-block" }} />
                                        {m.latency}
                                      </span>
                                    </div>
                                  </div>
                                  {m.plan !== "all"
                                    ? <span style={{ color: "#c0cac7", flexShrink: 0 }}><LockIcon size={14} /></span>
                                    : m.id === selectedModel
                                      ? <span style={{ color: "#7367f0", flexShrink: 0 }}><CheckIcon size={14} /></span>
                                      : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}

            <Alert variant="info">
              This model increases query consumption. You can monitor usage{" "}
              <a href="#" style={{ color: "#3047ec", textDecoration: "underline", fontWeight: 500 }}>here</a>.
            </Alert>
          </div>
        </Card>

        {/* Data Source Control */}
        <Card>
          <SectionHeader
            title="Data Source Control"
            description="Choose model that works best for your agent"
          />
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { id: "my-data", label: "My Data Only", desc: "Answers are strictly grounded in your uploaded documents." },
              { id: "my-data-general", label: "My Data + General Knowledge", desc: "Allows broader context but may reduce strict grounding." },
            ].map(opt => (
              <div
                key={opt.id}
                onClick={() => setDataSource(opt.id)}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(115,103,240,0.05)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                style={{ cursor: "pointer", padding: "10px 8px", borderRadius: 6, transition: "background 150ms" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                  <Radio checked={dataSource === opt.id} onChange={() => setDataSource(opt.id)} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#212121" }}>{opt.label}</span>
                </div>
                <div style={{ paddingLeft: 24, fontSize: 14, color: "#565656" }}>{opt.desc}</div>
              </div>
            ))}
            <div style={{ height: 1, background: "#dce3e1" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {([
                { label: "Reduced hallucination risk", icon: <ShieldIcon size={13} /> },
                { label: "Enterprise-safe configuration", icon: <LockIcon size={13} /> },
                { label: "Recommended for compliance-heavy environments", icon: <AIChipIcon size={13} /> },
              ] as { label: string; icon: React.ReactNode }[]).map(({ label, icon }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "8px 12px", borderRadius: 8,
                  background: "#f5f5f5",
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, background: "#dce3e1",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "#565656",
                  }}>
                    {icon}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#2f3d39" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* User Awareness */}
        <Card>
          <SectionHeader
            title="User Awareness"
            description="Choose model that works best for your agent"
          />
          <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
            <Toggle checked={userAwareness} onChange={() => setUserAwareness(v => !v)} />
            <span style={{ fontSize: 14, fontWeight: 500, color: "#212121" }}>
              Personalize responses based on logged-in user identity
            </span>
          </div>
        </Card>

        {/* Configuration Summary */}
        <Card>
          <SectionHeader title="Configuration Summary" />
          <div style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#161f1c", marginBottom: 12 }}>Your agent is optimized for:</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {summaryItems.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 2, background: "#7367f0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "#fff",
                  }}>
                    <CheckIcon size={11} />
                  </div>
                  <span style={{ fontSize: 14, color: "#2f3d39" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingBottom: 40 }}>
          <button style={{
            padding: "9px 20px", borderRadius: 4, fontSize: 14, fontWeight: 500,
            border: "1px solid #dce3e1", background: "#fff", color: "#212121",
            cursor: "pointer",
          }}>
            Cancel
          </button>
          <button style={{
            padding: "9px 20px", borderRadius: 4, fontSize: 14, fontWeight: 500,
            border: "none", background: "#7367f0", color: "#fff", cursor: "pointer",
          }}>
            Save Changes
          </button>
        </div>
      </div>
      </div>
          <ChatPanel />
        </div>{/* end: flex row (center + chat) */}
      </div>{/* end: flex col (topbar + content row) */}

      {/* Premium Model Modal */}
      {premiumModal && (() => {
        const model = models.find(m => m.id === premiumModal)!;
        return (
          <div
            onClick={() => closeModal()}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.45)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 1000,
              animation: premiumModalClosing ? "backdropFadeOut 260ms ease both" : "backdropFadeIn 200ms ease both",
            }}
          >
            <div
              key={premiumModal}
              onClick={e => e.stopPropagation()}
              style={{
                animation: premiumModalClosing
                  ? "modalSlideOut 260ms cubic-bezier(0.4, 0, 1, 1) both"
                  : "modalSlideIn 300ms cubic-bezier(0.22, 1, 0.36, 1) both",
                background: "#fff", borderRadius: 10,
                width: 616, maxWidth: "calc(100vw - 40px)",
                padding: "32px", position: "relative",
                boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
              }}
            >
              {/* Close */}
              <button
                onClick={() => closeModal()}
                style={{
                  position: "absolute", top: 16, right: 16,
                  background: "#fff", border: "1px solid #dce3e1",
                  borderRadius: 6, width: 32, height: 32,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#565656",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Heading */}
              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontSize: 26, fontWeight: 600, color: "#212121", margin: "0 0 10px" }}>
                  Use {model.label} with Premium
                </h2>
                <p style={{ fontSize: 15, color: "#565656", margin: 0, lineHeight: 1.6 }}>
                  Your current plan includes standard models. {model.label} is not included. Premium unlocks advanced models for higher-quality or more specialized agent behavior.
                </p>
              </div>

              <div style={{ height: 1, background: "#dce3e1", marginBottom: 20 }} />

              {/* Actions */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => { setSelectedModel("gpt-4.1"); closeModal(); }}
                  style={{
                    padding: "8px 16px", borderRadius: 6, fontSize: 14,
                    fontWeight: 500, border: "none",
                    background: "#e3e1fc", color: "#7367f0",
                    cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                  </svg>
                  Use GPT-5.1 Optimal instead
                </button>
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={() => closeModal()}
                    style={{
                      padding: "8px 16px", borderRadius: 6, fontSize: 14,
                      fontWeight: 500, border: "none",
                      background: "transparent", color: "#7367f0",
                      cursor: "pointer",
                    }}
                  >
                    Not now
                  </button>
                  <button
                    style={{
                      padding: "8px 20px", borderRadius: 6, fontSize: 14,
                      fontWeight: 500, border: "none",
                      background: "#7367f0", color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Upgrade to Premium
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Fixed tooltip */}
      {infoTooltip && (
        <div style={{
          position: "fixed",
          left: infoTooltip.x,
          top: infoTooltip.y,
          transform: "translate(-50%, -100%)",
          background: "#161f1c", color: "#fff",
          fontSize: 12, fontWeight: 400, lineHeight: 1.4,
          padding: "5px 9px", borderRadius: 6,
          whiteSpace: "nowrap", pointerEvents: "none",
          zIndex: 9999,
        }}>
          Max queries per conversation
        </div>
      )}
    </div>
  );
}
