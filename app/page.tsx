"use client";

import { useState } from "react";

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
    <div style={{ minHeight: "100vh", background: "#f5f5f5", fontFamily: "'Inter', sans-serif" }}>

      {/* Top bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #dce3e1", padding: "20px 32px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
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
              <button
                key={g.id}
                onClick={() => setGoal(g.id)}
                style={{
                  textAlign: "left", padding: 14, borderRadius: 6,
                  border: `1.5px solid ${goal === g.id ? "#7367f0" : "#dce3e1"}`,
                  background: goal === g.id ? "rgba(115,103,240,0.04)" : "#fff",
                  cursor: "pointer", transition: "all 150ms",
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
              </button>
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
                Set maximum <InfoIcon size={13} />
              </label>
              <input
                type="number"
                value={maxQueries}
                onChange={e => setMaxQueries(e.target.value)}
                style={{
                  border: "1px solid #dce3e1", borderRadius: 4,
                  padding: "6px 10px", fontSize: 13,
                  color: "#161f1c", fontFamily: "inherit",
                  outline: "none", width: "100%",
                }}
              />
              <span style={{ fontSize: 12, color: "#6f807a" }}>Message</span>
            </div>
          </div>
        </Card>

        {/* Model Selection */}
        <Card>
          <SectionHeader
            title="Model Selection"
            description="Choose the reasoning model for this agent. Stronger models may consume more queries."
          />
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: "#212121" }}>Reasoning Model</div>
            <div style={{
              border: "1px solid #dce3e1", borderRadius: 6, padding: "14px 16px",
              background: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ color: "#7367f0" }}><FlareIcon size={18} /></span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "#161f1c" }}>GPT-4.1</span>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontSize: 12, fontWeight: 500, color: "#3a0d0f",
                    background: "#fde8e8", padding: "2px 8px", borderRadius: 4,
                  }}>
                    <AlertCircleIcon size={12} />
                    Legacy model. Consumes 2 queries per message
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: "#c0cac7" }}>
                    Best for: <span>Complex reasoning</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 500, color: "#c0cac7" }}>
                    <ClockIcon size={12} /> Low latency
                  </span>
                </div>
              </div>
              <ChevronDownIcon size={16} />
            </div>
            <Alert variant="info">
              This model increases query consumption. You can monitor usage here.
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
              <div key={opt.id} style={{ cursor: "pointer" }} onClick={() => setDataSource(opt.id)}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                  <Radio checked={dataSource === opt.id} onChange={() => setDataSource(opt.id)} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#212121" }}>{opt.label}</span>
                </div>
                <div style={{ paddingLeft: 24, fontSize: 14, color: "#565656" }}>{opt.desc}</div>
              </div>
            ))}
            <div style={{ height: 1, background: "#dce3e1" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Reduced hallucination risk", "Enterprise-safe configuration", "Recommended for compliance-heavy environments"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 2, background: "#17b169",
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
  );
}
