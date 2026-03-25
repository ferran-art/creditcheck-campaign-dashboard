import { useState } from "react";

const data = {
  period: "20 Feb – 25 Mar 2026 (34 days)",
  totalInvestment: 4299.72,
  totalLeads: 1079,
  paidLeads: 957,
  blendedCPL: 3.99,
  paidCPL: 4.49,
  obRate: 0.385,
  obLeads: 415,
  channels: [
    {
      name: "Meta Ads",
      color: "#1877F2",
      budget: 1869.89,
      leads: 546,
      cpl: 3.43,
      budgetSteps: ["30€/day", "45€/day", "60€/day"],
      shareLeads: ((546 / 1079) * 100).toFixed(1),
      shareBudget: ((1869.89 / 4299.72) * 100).toFixed(1),
    },
    {
      name: "Google Ads",
      color: "#34A853",
      budget: 2429.83,
      leads: 411,
      cpl: 5.91,
      budgetSteps: ["30€/day", "45€/day", "91€/day"],
      shareLeads: ((411 / 1079) * 100).toFixed(1),
      shareBudget: ((2429.83 / 4299.72) * 100).toFixed(1),
    },
    {
      name: "Organic",
      color: "#8B5CF6",
      budget: 0,
      leads: 122,
      cpl: 0,
      budgetSteps: [],
      shareLeads: ((122 / 1079) * 100).toFixed(1),
      shareBudget: "0.0",
    },
  ],
};

const StatCard = ({ label, value, sub, accent }) => (
  <div
    style={{
      background: "var(--bg-card, #ffffff)",
      border: "1px solid var(--border, #e5e7eb)",
      borderRadius: 12,
      padding: "20px 24px",
      flex: "1 1 200px",
      minWidth: 180,
      borderTop: accent ? `3px solid ${accent}` : undefined,
    }}
  >
    <div
      style={{
        fontSize: 13,
        color: "var(--text-muted, #6b7280)",
        marginBottom: 4,
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontSize: 28,
        fontWeight: 700,
        color: "var(--text-primary, #111827)",
        lineHeight: 1.2,
      }}
    >
      {value}
    </div>
    {sub && (
      <div
        style={{
          fontSize: 12,
          color: "var(--text-muted, #6b7280)",
          marginTop: 4,
        }}
      >
        {sub}
      </div>
    )}
  </div>
);

const Bar = ({ value, max, color, label, right }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 10,
    }}
  >
    <div
      style={{
        width: 90,
        fontSize: 13,
        color: "var(--text-muted, #6b7280)",
        textAlign: "right",
      }}
    >
      {label}
    </div>
    <div
      style={{
        flex: 1,
        background: "var(--bg-bar, #f3f4f6)",
        borderRadius: 6,
        height: 28,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${(value / max) * 100}%`,
          background: color,
          height: "100%",
          borderRadius: 6,
          minWidth: 2,
          transition: "width 0.5s ease",
        }}
      />
    </div>
    <div
      style={{
        width: 80,
        fontSize: 13,
        fontWeight: 600,
        color: "var(--text-primary, #111827)",
      }}
    >
      {right}
    </div>
  </div>
);

export default function Dashboard() {
  const [tab, setTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "channels", label: "Channel Breakdown" },
    { id: "funnel", label: "Funnel" },
  ];

  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        maxWidth: 720,
        margin: "0 auto",
        padding: 16,
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "var(--text-primary, #111827)",
            margin: 0,
          }}
        >
          CreditCheck — Campaign Performance
        </h1>
        <div
          style={{
            fontSize: 13,
            color: "var(--text-muted, #6b7280)",
            marginTop: 4,
          }}
        >
          creditchecker.io · {data.period}
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 24,
          borderBottom: "1px solid var(--border, #e5e7eb)",
          paddingBottom: 0,
        }}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: tab === t.id ? 600 : 400,
              color:
                tab === t.id
                  ? "var(--text-primary, #111827)"
                  : "var(--text-muted, #6b7280)",
              background: "none",
              border: "none",
              borderBottom:
                tab === t.id
                  ? "2px solid var(--text-primary, #111827)"
                  : "2px solid transparent",
              cursor: "pointer",
              marginBottom: -1,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {tab === "overview" && (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <StatCard
              label="Total Investment"
              value="4.299,72€"
              sub="Paid channels only"
            />
            <StatCard
              label="Total Leads"
              value="1.079"
              sub="546 Meta · 411 Google · 122 Organic"
            />
            <StatCard
              label="Blended CPL"
              value="3,99€"
              sub="All 1.079 leads"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <StatCard
              label="Paid CPL"
              value="4,49€"
              sub="957 paid leads only"
            />
            <StatCard
              label="Open Banking Rate"
              value="38,5%"
              sub="Verified completion rate"
            />
            <StatCard
              label="Premium Leads"
              value="415"
              sub="Connected to Open Banking"
            />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <StatCard
              label="Qualified Leads (non-premium)"
              value="664"
              sub="Leads without Open Banking"
            />
          </div>
        </>
      )}

      {/* Channel Breakdown */}
      {tab === "channels" && (
        <>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 16,
              color: "var(--text-primary, #111827)",
            }}
          >
            Leads by Channel
          </div>
          {data.channels.map((c) => (
            <Bar
              key={c.name + "leads"}
              label={c.name}
              value={c.leads}
              max={550}
              color={c.color}
              right={`${c.leads} leads`}
            />
          ))}

          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 16,
              marginTop: 28,
              color: "var(--text-primary, #111827)",
            }}
          >
            Spend by Channel
          </div>
          {data.channels
            .filter((c) => c.budget > 0)
            .map((c) => (
              <Bar
                key={c.name + "spend"}
                label={c.name}
                value={c.budget}
                max={2500}
                color={c.color}
                right={`${c.budget.toLocaleString("es-ES", {
                  minimumFractionDigits: 2,
                })}€`}
              />
            ))}

          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 16,
              marginTop: 28,
              color: "var(--text-primary, #111827)",
            }}
          >
            CPL by Channel
          </div>
          {data.channels.map((c) => (
            <Bar
              key={c.name + "cpl"}
              label={c.name}
              value={c.cpl}
              max={7}
              color={c.color}
              right={c.cpl === 0 ? "0€" : `${c.cpl.toFixed(2)}€`}
            />
          ))}

          <div
            style={{
              background: "var(--bg-card, #ffffff)",
              border: "1px solid var(--border, #e5e7eb)",
              borderRadius: 12,
              padding: 20,
              marginTop: 24,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 12,
                color: "var(--text-primary, #111827)",
              }}
            >
              Efficiency Summary
            </div>
            <table
              style={{
                width: "100%",
                fontSize: 13,
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid var(--border, #e5e7eb)",
                  }}
                >
                  {[
                    "Channel",
                    "Spend",
                    "Leads",
                    "CPL",
                    "% Leads",
                    "% Budget",
                  ].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "8px 6px",
                        color: "var(--text-muted, #6b7280)",
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.channels.map((c) => (
                  <tr
                    key={c.name}
                    style={{
                      borderBottom: "1px solid var(--border, #e5e7eb)",
                    }}
                  >
                    <td style={{ padding: "8px 6px", fontWeight: 600 }}>
                      <span
                        style={{
                          display: "inline-block",
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: c.color,
                          marginRight: 6,
                        }}
                      />
                      {c.name}
                    </td>
                    <td style={{ padding: "8px 6px" }}>
                      {c.budget > 0
                        ? `${c.budget.toLocaleString("es-ES", {
                            minimumFractionDigits: 2,
                          })}€`
                        : "—"}
                    </td>
                    <td style={{ padding: "8px 6px" }}>{c.leads}</td>
                    <td style={{ padding: "8px 6px", fontWeight: 600 }}>
                      {c.cpl > 0 ? `${c.cpl.toFixed(2)}€` : "0€"}
                    </td>
                    <td style={{ padding: "8px 6px" }}>{c.shareLeads}%</td>
                    <td style={{ padding: "8px 6px" }}>{c.shareBudget}%</td>
                  </tr>
                ))}
                <tr style={{ fontWeight: 700 }}>
                  <td style={{ padding: "8px 6px" }}>Total</td>
                  <td style={{ padding: "8px 6px" }}>4.299,72€</td>
                  <td style={{ padding: "8px 6px" }}>1.079</td>
                  <td style={{ padding: "8px 6px" }}>3,99€</td>
                  <td style={{ padding: "8px 6px" }}>100%</td>
                  <td style={{ padding: "8px 6px" }}>100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{
              background: "#FFF7ED",
              border: "1px solid #FED7AA",
              borderRadius: 12,
              padding: 16,
              marginTop: 16,
              fontSize: 13,
              color: "#92400E",
            }}
          >
            <strong>Key insight:</strong> Meta delivers 50.6% of leads with
            only 43.5% of budget (3,43€ CPL). Google costs 72% more per lead
            (5,91€) — be ready to justify with quality/intent data, or propose
            reallocation.
          </div>
        </>
      )}

      {/* Funnel */}
      {tab === "funnel" && (
        <>
          {[
            {
              label: "Total Leads",
              value: 1079,
              pct: "100%",
              color: "#3B82F6",
              width: "100%",
            },
            {
              label: "Paid Leads",
              value: 957,
              pct: "88.7%",
              color: "#6366F1",
              width: "88.7%",
            },
            {
              label: "Qualified Leads (non-premium)",
              value: 664,
              pct: "61.5%",
              color: "#60A5FA",
              width: "61.5%",
            },
            {
              label: "Premium Leads (Open Banking)",
              value: 415,
              pct: "38.5%",
              color: "#8B5CF6",
              width: "38.5%",
            },
          ].map((step, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    color: "var(--text-primary, #111827)",
                    fontWeight: 500,
                  }}
                >
                  {step.label}
                </span>
                <span style={{ color: "var(--text-muted, #6b7280)" }}>
                  {step.value} ({step.pct})
                </span>
              </div>
              <div
                style={{
                  background: "var(--bg-bar, #f3f4f6)",
                  borderRadius: 8,
                  height: 36,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: step.width,
                    background: step.color,
                    height: "100%",
                    borderRadius: 8,
                    transition: "width 0.5s ease",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 12,
                  }}
                >
                  <span
                    style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}
                  >
                    {step.value}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div
            style={{
              background: "var(--bg-card, #ffffff)",
              border: "1px solid var(--border, #e5e7eb)",
              borderRadius: 12,
              padding: 20,
              marginTop: 24,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 16,
                color: "var(--text-primary, #111827)",
              }}
            >
              Cost at Each Stage
            </div>
            <table
              style={{
                width: "100%",
                fontSize: 13,
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid var(--border, #e5e7eb)",
                  }}
                >
                  {["Stage", "Volume", "Cost per Lead"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "8px 6px",
                        color: "var(--text-muted, #6b7280)",
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["All Leads (blended)", "1.079", "3,99€"],
                  ["Paid Leads Only", "957", "4,49€"],
                  ["Open Banking Qualified", "432", "9,95€"],
                ].map(([stage, vol, cost], i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--border, #e5e7eb)",
                    }}
                  >
                    <td style={{ padding: "8px 6px", fontWeight: 500 }}>
                      {stage}
                    </td>
                    <td style={{ padding: "8px 6px" }}>{vol}</td>
                    <td style={{ padding: "8px 6px", fontWeight: 700 }}>
                      {cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              background: "#F0FDF4",
              border: "1px solid #BBF7D0",
              borderRadius: 12,
              padding: 16,
              marginTop: 16,
              fontSize: 13,
              color: "#166534",
            }}
          >
            <strong>Bottom line:</strong> 432 verified Open Banking leads at
            9,95€ each, from a 4.300€ investment in 34 days. Sub-10€ cost per
            qualified lead is strong unit economics for lending.
          </div>
        </>
      )}
    </div>
  );
}
