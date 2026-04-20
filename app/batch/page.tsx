import Link from "next/link";
import TopNav from "../components/top-nav";

export default function BatchPage() {
  const activityRows = [
    {
      user: "Julia M.",
      type: "Payroll",
      status: "Success",
      amount: "$2,500",
      tone: "emerald",
    },
    {
      user: "Diana H.",
      type: "Payroll",
      status: "Success",
      amount: "$1,000",
      tone: "emerald",
    },
    {
      user: "Jake T.",
      type: "Payroll",
      status: "Success",
      amount: "$3,500",
      tone: "emerald",
    },
    {
      user: "Sam R.",
      type: "Affiliate",
      status: "Success",
      amount: "$400",
      tone: "emerald",
    },
    {
      user: "Stripe Treasury",
      type: "Vendor",
      status: "Failed",
      amount: "$5,200",
      tone: "amber",
    },
  ];

  const transferRows = [
    { wallet: "0x1eEBA7C....6c6fd0", amount: "$45,000", tone: "blue" },
    { wallet: "0x6c8C3B....bD47f", amount: "$45,000", tone: "blue" },
    { wallet: "0xc6bc....ea62", amount: "$35,200", tone: "emerald" },
    { wallet: "0x814c....0acf", amount: "$35,200", tone: "emerald" },
  ];

  const batchCategories = [
    { label: "Payroll", value: 34, color: "#22D3EE" },
    { label: "Invoices", value: 22, color: "#22C55E" },
    { label: "Affiliates", value: 14, color: "#A78BFA" },
    { label: "Contributors", value: 12, color: "#FACC15" },
    { label: "Vendors", value: 10, color: "#F43F5E" },
    { label: "Other", value: 8, color: "#374151" },
  ];

  const radius = 78;
  const stroke = 24;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-6">
        <TopNav active="batch" />

        <section className="grid gap-6 xl:grid-cols-[1.65fr_0.7fr]">
          <div className="space-y-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/55">Scheduled Batch</p>
                  <h2 className="mt-2 text-[2rem] font-semibold tracking-tight">
                    Batch Execution
                  </h2>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
                  Add Batch Rule
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,38,0.96),rgba(8,12,26,0.98))] p-5">
                  <p className="text-base text-white/60">Scheduled Payout Batch</p>
                  <h3 className="mt-2 text-[2rem] font-semibold tracking-tight">
                    Automated Payout Run
                  </h3>

                  <div className="mt-5">
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[86%] rounded-full bg-[linear-gradient(90deg,#d9fff5_0%,#b7ffe8_45%,#7ef3d1_100%)]" />
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                        <p className="text-white/45">Execution Progress</p>
                        <p className="mt-2 text-[1.9rem] font-semibold">12</p>
                        <p className="text-white/70">Executed</p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                        <p className="text-white/45">Recipients Ready</p>
                        <p className="mt-2 text-[1.9rem] font-semibold">12</p>
                        <p className="text-white/70">Ready</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,38,0.96),rgba(8,12,26,0.98))] p-5">
                  <div className="mb-4 border-b border-white/10 pb-4">
                    <h3 className="text-[1.35rem] font-semibold tracking-tight">
                      Recipients by Category
                    </h3>
                  </div>

                  <div className="flex items-center justify-between gap-6">
                    <div className="relative ml-1 flex h-[250px] w-[250px] items-center justify-center">
                      <svg width="250" height="250" viewBox="0 0 260 260" className="-rotate-90">
                        <circle
                          cx="130"
                          cy="130"
                          r={radius}
                          stroke="rgba(255,255,255,0.08)"
                          strokeWidth={stroke}
                          fill="none"
                        />
                        {batchCategories.map((item) => {
                          const dash = (item.value / 100) * circumference;
                          const gap = circumference - dash;
                          const rotation = (cumulativePercent / 100) * 360;
                          cumulativePercent += item.value;

                          return (
                            <circle
                              key={item.label}
                              cx="130"
                              cy="130"
                              r={radius}
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

                      <div className="absolute flex h-[146px] w-[146px] flex-col items-center justify-center rounded-full bg-[#081120]">
                        <span className="text-[4rem] font-semibold leading-none tracking-tight">
                          18
                        </span>
                        <span className="mt-2 text-lg text-white/55">Recipients</span>
                      </div>
                    </div>

                    <div className="min-w-[220px] space-y-4 border-l border-white/10 pl-6">
                      {batchCategories.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-6"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className="h-4 w-4 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-[1.05rem] text-white/82">
                              {item.label}
                            </span>
                          </div>
                          <span className="text-[1.05rem] font-medium text-white">
                            {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-[1.8rem] font-semibold tracking-tight">
                  Payout Activity
                </h3>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/75">
                  Live View
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
                <div className="grid grid-cols-[1.25fr_0.9fr_0.9fr_0.8fr] gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/50">
                  <div>User</div>
                  <div>Type</div>
                  <div>Status</div>
                  <div>Amount</div>
                </div>

                {activityRows.map((row) => (
                  <div
                    key={`${row.user}-${row.amount}`}
                    className="grid grid-cols-[1.25fr_0.9fr_0.9fr_0.8fr] gap-4 border-b border-white/10 px-5 py-4 text-[0.98rem] text-white/82 last:border-b-0"
                  >
                    <div className="font-medium text-white">{row.user}</div>
                    <div>{row.type}</div>
                    <div className={row.tone === "amber" ? "text-amber-300" : "text-emerald-300"}>
                      {row.status}
                    </div>
                    <div className="font-semibold text-white">{row.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-[1.8rem] font-semibold tracking-tight">
                    Treasury Transfer
                  </h3>
                  <Link
                    href="/batch/transfer-details"
                    className="inline-flex rounded-xl border border-cyan-300/40 bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition hover:bg-cyan-400/25"
                  >
                    View Transfer Details
                  </Link>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/75">
                  Live View
                </div>
              </div>

              <div className="space-y-3">
                {transferRows.map((row) => (
                  <div
                    key={row.wallet}
                    className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-3.5 w-3.5 rounded-full ${
                          row.tone === "blue" ? "bg-sky-400" : "bg-emerald-400"
                        }`}
                      />
                      <span className="text-[1rem] text-white/82">{row.wallet}</span>
                    </div>
                    <span className="text-[1rem] font-medium text-white">{row.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
            <div className="mb-5 border-b border-white/10 pb-4">
              <h3 className="text-[1.8rem] font-semibold tracking-tight">
                Treasury Transfer
              </h3>
            </div>

            <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,38,0.96),rgba(8,12,26,0.98))] p-5">
              <p className="text-[2.6rem] font-semibold tracking-tight">$45,000</p>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-white/45">Route</p>
                  <p className="mt-1 text-base text-white/80">Treasury → Recipients</p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Source</p>
                  <p className="mt-1 text-base text-white/80">Stablecoin Treasury</p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Destination</p>
                  <p className="mt-1 text-base text-white/80">Recipient Wallets</p>
                </div>
              </div>

              <div className="mt-5">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,#60a5fa_0%,#34d399_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
