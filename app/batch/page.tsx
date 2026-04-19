"use client";

import { useMemo, useState } from "react";
import TopNav from "../../components/top-nav";

type RowTone = "amber" | "rose" | "emerald";

type RequestRow = {
  name: string;
  type: "Payroll" | "Invoice" | "Affiliate" | "Contributor" | "Vendor" | "Contractor";
  amount: string;
  status:
    | "Pending Verification"
    | "Rule Mismatch"
    | "Approved"
    | "Scheduled"
    | "Paid"
    | "Rejected";
  updated: string;
  tone: RowTone;
};

type CategoryFilter =
  | "All"
  | "Payroll"
  | "Invoices"
  | "Affiliates"
  | "Contributors"
  | "Vendors";

type StatusFilter = "Pending" | "Approved" | "Scheduled" | "Rejected";

type ModalKey = "julia" | "diana" | "luna" | "stripe" | null;

export default function RequestsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("Pending");
  const [activeModal, setActiveModal] = useState<ModalKey>(null);

  const rows: RequestRow[] = [
    {
      name: "Julia M.",
      type: "Payroll",
      amount: "$3,500",
      status: "Pending Verification",
      updated: "2m ago",
      tone: "amber",
    },
    {
      name: "Diana H.",
      type: "Payroll",
      amount: "$4,200",
      status: "Rule Mismatch",
      updated: "5m ago",
      tone: "rose",
    },
    {
      name: "Luna D.",
      type: "Contractor",
      amount: "$2,000",
      status: "Rule Mismatch",
      updated: "12m ago",
      tone: "rose",
    },
    {
      name: "Stripe Treasury",
      type: "Invoice",
      amount: "$6,500",
      status: "Pending Verification",
      updated: "15m ago",
      tone: "emerald",
    },
    {
      name: "Jake T.",
      type: "Affiliate",
      amount: "$1,200",
      status: "Approved",
      updated: "20m ago",
      tone: "emerald",
    },
    {
      name: "Grant DAO",
      type: "Contributor",
      amount: "$5,100",
      status: "Scheduled",
      updated: "45m ago",
      tone: "emerald",
    },
    {
      name: "Sam R.",
      type: "Affiliate",
      amount: "$800",
      status: "Paid",
      updated: "1h ago",
      tone: "emerald",
    },
    {
      name: "Northstar Media",
      type: "Vendor",
      amount: "$9,400",
      status: "Approved",
      updated: "1h ago",
      tone: "emerald",
    },
    {
      name: "Mira K.",
      type: "Payroll",
      amount: "$3,100",
      status: "Scheduled",
      updated: "2h ago",
      tone: "emerald",
    },
    {
      name: "Studio Pixel",
      type: "Vendor",
      amount: "$2,700",
      status: "Rejected",
      updated: "3h ago",
      tone: "rose",
    },
    {
      name: "Atlas Ops",
      type: "Contributor",
      amount: "$4,600",
      status: "Pending Verification",
      updated: "3h ago",
      tone: "amber",
    },
    {
      name: "Ava P.",
      type: "Affiliate",
      amount: "$1,450",
      status: "Scheduled",
      updated: "4h ago",
      tone: "emerald",
    },
    {
      name: "Leo V.",
      type: "Affiliate",
      amount: "$950",
      status: "Pending Verification",
      updated: "5h ago",
      tone: "amber",
    },
    {
      name: "Orbit Vendors",
      type: "Vendor",
      amount: "$3,850",
      status: "Scheduled",
      updated: "6h ago",
      tone: "emerald",
    },
    {
      name: "FrameForge Studio",
      type: "Vendor",
      amount: "$4,200",
      status: "Pending Verification",
      updated: "7h ago",
      tone: "amber",
    },
  ];

  const categories = [
    { label: "Payroll", value: 34, color: "#22D3EE" },
    { label: "Invoices", value: 22, color: "#22C55E" },
    { label: "Affiliates", value: 14, color: "#A78BFA" },
    { label: "Contributors", value: 12, color: "#FACC15" },
    { label: "Vendors", value: 10, color: "#F43F5E" },
    { label: "Other", value: 8, color: "#374151" },
  ];

  const topTabs: CategoryFilter[] = [
    "All",
    "Payroll",
    "Invoices",
    "Affiliates",
    "Contributors",
    "Vendors",
  ];

  const statusTabs: StatusFilter[] = [
    "Pending",
    "Approved",
    "Scheduled",
    "Rejected",
  ];

  const radius = 78;
  const stroke = 24;
  const normalizedRadius = radius;
  const circumference = 2 * Math.PI * normalizedRadius;

  const categoryToTypeMap: Record<CategoryFilter, RequestRow["type"] | "All"> = {
    All: "All",
    Payroll: "Payroll",
    Invoices: "Invoice",
    Affiliates: "Affiliate",
    Contributors: "Contributor",
    Vendors: "Vendor",
  };

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const categoryMatches =
        activeCategory === "All"
          ? true
          : row.type === categoryToTypeMap[activeCategory];

      const statusMatches =
        activeStatus === "Pending"
          ? row.status === "Pending Verification" || row.status === "Rule Mismatch"
          : activeStatus === "Approved"
          ? row.status === "Approved" || row.status === "Paid"
          : activeStatus === "Scheduled"
          ? row.status === "Scheduled"
          : row.status === "Rejected";

      return categoryMatches && statusMatches;
    });
  }, [activeCategory, activeStatus]);

  const statusCount = (status: StatusFilter) => {
    return rows.filter((row) => {
      const categoryMatches =
        activeCategory === "All"
          ? true
          : row.type === categoryToTypeMap[activeCategory];

      const statusMatches =
        status === "Pending"
          ? row.status === "Pending Verification" || row.status === "Rule Mismatch"
          : status === "Approved"
          ? row.status === "Approved" || row.status === "Paid"
          : status === "Scheduled"
          ? row.status === "Scheduled"
          : row.status === "Rejected";

      return categoryMatches && statusMatches;
    }).length;
  };

  const openModalForRow = (name: string) => {
    if (name === "Julia M.") setActiveModal("julia");
    else if (name === "Diana H.") setActiveModal("diana");
    else if (name === "Luna D.") setActiveModal("luna");
    else if (name === "Stripe Treasury" || name === "FrameForge Studio") {
      setActiveModal("stripe");
    }
  };

  const isRowClickable = (name: string) =>
    ["Julia M.", "Diana H.", "Luna D.", "Stripe Treasury", "FrameForge Studio"].includes(name);

  let cumulativePercent = 0;

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-6">
        <TopNav active="requests" />

        <section className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
          <div className="mb-6">
            <h2 className="text-[2rem] font-semibold tracking-tight">
              Payout Requests
            </h2>
          </div>

          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {topTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategory(tab)}
                  className={`rounded-2xl border px-6 py-3 text-lg transition ${
                    activeCategory === tab
                      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                      : "border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/[0.07]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="w-[290px] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-lg text-white/45">
                Search
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl text-white/75">
                ⚙
              </div>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-3">
            {statusTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveStatus(tab)}
                className={`rounded-full border px-4 py-2 text-base transition ${
                  activeStatus === tab
                    ? tab === "Pending"
                      ? "border-amber-400/30 bg-amber-400/10 text-amber-200"
                      : tab === "Rejected"
                      ? "border-rose-400/30 bg-rose-400/10 text-rose-200"
                      : "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                    : "border-white/10 bg-white/[0.04] text-white/65 hover:bg-white/[0.07]"
                }`}
              >
                {tab} ({statusCount(tab)})
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1.3fr_0.9fr] gap-4 border-b border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/50">
              <div>Name</div>
              <div>Type</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Updated</div>
            </div>

            {filteredRows.length > 0 ? (
              filteredRows.map((row) => (
                <button
                  key={`${row.name}-${row.amount}`}
                  type="button"
                  onClick={() => openModalForRow(row.name)}
                  disabled={!isRowClickable(row.name)}
                  className={`grid w-full grid-cols-[1.4fr_1fr_1fr_1.3fr_0.9fr] gap-4 border-b border-white/10 px-6 py-4 text-left text-[0.98rem] text-white/82 last:border-b-0 ${
                    isRowClickable(row.name)
                      ? "cursor-pointer transition hover:bg-white/[0.04]"
                      : "cursor-default"
                  }`}
                >
                  <div className="font-medium text-white">{row.name}</div>
                  <div>{row.type}</div>
                  <div className="font-semibold text-white">{row.amount}</div>
                  <div
                    className={
                      row.tone === "rose"
                        ? "text-rose-300"
                        : row.tone === "amber"
                        ? "text-amber-300"
                        : "text-emerald-300"
                    }
                  >
                    {row.status}
                  </div>
                  <div className="text-white/55">{row.updated}</div>
                </button>
              ))
            ) : (
              <div className="px-6 py-10 text-center text-white/55">
                No requests match the selected filters.
              </div>
            )}
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_1fr_0.9fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[1.8rem] font-semibold tracking-tight">
                Payout Volume
              </h3>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
                USDC
              </div>
            </div>

            <p className="text-[2.8rem] font-semibold tracking-tight">$245,830</p>
            <p className="mt-2 text-base text-cyan-300">↑ 12.4% vs last period</p>

            <div className="relative mt-5 h-[250px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,38,0.96),rgba(8,12,26,0.98))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,140,255,0.12),transparent_32%)]" />
              <div className="absolute inset-x-0 top-[25%] border-t border-white/10" />
              <div className="absolute inset-x-0 top-[50%] border-t border-white/10" />
              <div className="absolute inset-x-0 top-[75%] border-t border-white/10" />

              <svg
                viewBox="0 0 700 260"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  d="M30 220 L90 180 L145 205 L195 150 L250 175 L305 120 L355 145 L410 98 L470 130 L525 88 L585 95 L650 38"
                  stroke="rgba(123,211,255,0.95)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 220 L90 180 L145 205 L195 150 L250 175 L305 120 L355 145 L410 98 L470 130 L525 88 L585 95 L650 38"
                  stroke="rgba(90,150,255,0.18)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="absolute bottom-4 left-5 right-5 flex justify-between text-sm text-white/45">
                <span>Nov 1</span>
                <span>Nov 8</span>
                <span>Nov 15</span>
                <span>Nov 22</span>
                <span>Nov 30</span>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
            <div className="mb-5 border-b border-white/10 pb-4">
              <h3 className="text-[1.8rem] font-semibold tracking-tight">
                Payouts by Category
              </h3>
            </div>

            <div className="flex items-center justify-between gap-8">
              <div className="relative flex h-[260px] w-[260px] items-center justify-center">
                <svg width="260" height="260" viewBox="0 0 260 260" className="-rotate-90">
                  <circle
                    cx="130"
                    cy="130"
                    r={normalizedRadius}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={stroke}
                    fill="none"
                  />
                  {categories.map((item) => {
                    const dash = (item.value / 100) * circumference;
                    const gap = circumference - dash;
                    const rotation = (cumulativePercent / 100) * 360;
                    cumulativePercent += item.value;

                    return (
                      <circle
                        key={item.label}
                        cx="130"
                        cy="130"
                        r={normalizedRadius}
                        stroke={item.color}
                        strokeWidth={stroke}
                        strokeLinecap="butt"
                        fill="none"
                        strokeDasharray={`${dash} ${gap}`}
                        transform={`rotate(${rotation} 130 130)`}
                      />
                    );
                  })}
                </svg>

                <div className="absolute flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full bg-[#081120]">
                  <span className="text-[4rem] font-semibold leading-none tracking-tight">
                    128
                  </span>
                  <span className="mt-2 text-lg text-white/55">Total</span>
                </div>
              </div>

              <div className="min-w-[250px] space-y-5 border-l border-white/10 pl-8">
                {categories.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-8"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[1.15rem] text-white/82">{item.label}</span>
                    </div>
                    <span className="text-[1.15rem] font-medium text-white">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[1.8rem] font-semibold tracking-tight">
                Execution Health
              </h3>
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-200">
                Live
              </div>
            </div>

            <div className="relative h-[160px] overflow-hidden rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,38,0.96),rgba(8,12,26,0.98))]">
              <div className="absolute inset-x-0 top-[25%] border-t border-white/10" />
              <div className="absolute inset-x-0 top-[50%] border-t border-white/10" />
              <div className="absolute inset-x-0 top-[75%] border-t border-white/10" />

              <svg
                viewBox="0 0 620 180"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  d="M20 130 L75 95 L125 112 L180 82 L235 70 L290 52 L345 88 L400 105 L455 78 L515 92 L585 35"
                  stroke="rgba(123,211,255,0.95)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="absolute bottom-3 left-4 right-4 flex justify-between text-sm text-white/45">
                <span>12 AM</span>
                <span>6 AM</span>
                <span>12 PM</span>
                <span>6 PM</span>
                <span>Now</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-[2rem] font-semibold text-emerald-300">176</p>
                <p className="mt-1 text-sm text-white/60">Executed</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-[2rem] font-semibold text-amber-300">8</p>
                <p className="mt-1 text-sm text-white/60">Pending</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-[2rem] font-semibold text-rose-300">3</p>
                <p className="mt-1 text-sm text-white/60">Failed</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="max-h-[85vh] w-full max-w-[860px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0a1022] shadow-[0_0_60px_rgba(20,40,100,0.35)]">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <h3 className="text-[1.7rem] font-semibold tracking-tight">
                  {activeModal === "stripe" ? "Vendor Invoice Details" : "Employee Profile"}
                </h3>
                <p className="mt-1 text-sm text-white/55">
                  {activeModal === "stripe"
                    ? "Review invoice details before approving the payout."
                    : "Condensed profile view for payout approval."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 hover:bg-white/[0.07]"
              >
                Close
              </button>
            </div>

            <div className="max-h-[calc(85vh-88px)] overflow-y-auto px-6 py-6">
              {activeModal === "julia" && (
                <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
                  <div className="space-y-5">
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Full Name</p>
                      <p className="mt-2 text-[1.45rem] font-semibold">Julia Morgan</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Work Email</p>
                      <p className="mt-2 text-[1.05rem] text-white/85">julia.morgan@somnia-payroll.io</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Role</p>
                      <p className="mt-2 text-[1.2rem] font-medium text-white">Payroll Operations Specialist</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Employment Type</p>
                      <p className="mt-2 text-[1.05rem] text-white/85">Full-time • United States</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[1.3rem] border border-cyan-400/20 bg-cyan-400/10 p-5">
                      <p className="text-sm text-white/55">Annual Compensation</p>
                      <p className="mt-2 text-[2rem] font-semibold text-white">$67,000</p>
                      <p className="mt-2 text-sm text-white/65">Active • Bi-weekly payroll cycle</p>
                    </div>

                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Responsibilities</p>
                      <ul className="mt-3 space-y-3 text-[1rem] text-white/82">
                        <li>• Process scheduled payroll runs and maintain payroll records.</li>
                        <li>• Consolidate timesheet and payout data before disbursement.</li>
                        <li>• Calculate payment amounts and validate payroll exceptions.</li>
                        <li>• Coordinate with finance on payroll approvals and corrections.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === "diana" && (
                <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
                  <div className="space-y-5">
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Full Name</p>
                      <p className="mt-2 text-[1.45rem] font-semibold">Diana Hart</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Work Email</p>
                      <p className="mt-2 text-[1.05rem] text-white/85">diana.hart@somnia-payroll.io</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Role</p>
                      <p className="mt-2 text-[1.2rem] font-medium text-white">Customer Support Specialist</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Employment Type</p>
                      <p className="mt-2 text-[1.05rem] text-white/85">Full-time • United States</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[1.3rem] border border-amber-400/20 bg-amber-400/10 p-5">
                      <p className="text-sm text-white/55">Annual Compensation</p>
                      <p className="mt-2 text-[2rem] font-semibold text-white">$62,000</p>
                      <p className="mt-2 text-sm text-white/65">Manual review triggered on current request</p>
                    </div>

                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Responsibilities</p>
                      <ul className="mt-3 space-y-3 text-[1rem] text-white/82">
                        <li>• Resolve user and payout-related support issues.</li>
                        <li>• Guide users through account and payment workflows.</li>
                        <li>• Escalate unresolved cases to internal teams.</li>
                        <li>• Document recurring issues and recommend support improvements.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === "luna" && (
                <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
                  <div className="space-y-5">
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Full Name</p>
                      <p className="mt-2 text-[1.45rem] font-semibold">Luna Davis</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Work Email</p>
                      <p className="mt-2 text-[1.05rem] text-white/85">luna.davis@somnia-payroll.io</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Role</p>
                      <p className="mt-2 text-[1.2rem] font-medium text-white">Payment Operations Specialist</p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Employment Type</p>
                      <p className="mt-2 text-[1.05rem] text-white/85">Contractor • United States</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[1.3rem] border border-rose-400/20 bg-rose-400/10 p-5">
                      <p className="text-sm text-white/55">Annual Compensation</p>
                      <p className="mt-2 text-[2rem] font-semibold text-white">$63,000</p>
                      <p className="mt-2 text-sm text-white/65">Current request exceeds weekly approval threshold</p>
                    </div>

                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Responsibilities</p>
                      <ul className="mt-3 space-y-3 text-[1rem] text-white/82">
                        <li>• Process payment files and treasury transfer operations.</li>
                        <li>• Research and resolve payment exceptions.</li>
                        <li>• Monitor payment workflows and update procedures.</li>
                        <li>• Support compliance and suspicious-activity escalation.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === "stripe" && (
                <div className="space-y-6">
                  <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Vendor</p>
                      <p className="mt-2 text-[1.45rem] font-semibold">Stripe Treasury</p>
                    </div>

                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Invoice Number</p>
                      <p className="mt-2 text-[1.25rem] font-medium text-white">STR-2026-041</p>
                    </div>

                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Billing Period</p>
                      <p className="mt-2 text-[1.05rem] text-white/85">Apr 1 – Apr 30, 2026</p>
                    </div>

                    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-white/45">Due Date</p>
                      <p className="mt-2 text-[1.05rem] text-white/85">May 5, 2026</p>
                    </div>
                  </div>

                  <div className="rounded-[1.4rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-white/55">Service Description</p>
                        <p className="mt-2 text-[1.15rem] text-white/90">
                          Treasury infrastructure, payout rails, and stablecoin settlement support
                        </p>
                        <p className="mt-4 text-sm text-white/60">
                          Includes treasury account maintenance, payout orchestration support, and settlement monitoring.
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-white/55">Invoice Total</p>
                        <p className="mt-2 text-[2rem] font-semibold text-white">$6,500</p>
                        <p className="mt-2 text-sm text-amber-200">Pending Verification</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm text-white/45">Line Items</p>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 text-white/85">
                        <span>Treasury account servicing</span>
                        <span>$2,200</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 text-white/85">
                        <span>Payout routing and transfer support</span>
                        <span>$2,800</span>
                      </div>
                      <div className="flex items-center justify-between text-white/85">
                        <span>Settlement monitoring and reporting</span>
                        <span>$1,500</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}