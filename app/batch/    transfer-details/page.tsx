import Link from "next/link";
import TopNav from "../../components/top-nav";

export default function TransferDetailsPage() {
  const recipients = [
    { wallet: "0x1eEBA7C....6c6fd0", status: "Completed", amount: "$12,500", tone: "emerald" },
    { wallet: "0x6c8C3B....bD47f", status: "Completed", amount: "$10,000", tone: "emerald" },
    { wallet: "0xc6bc....ea62", status: "Completed", amount: "$17,300", tone: "emerald" },
    { wallet: "0x814c....0acf", status: "Failed", amount: "$5,200", tone: "amber" },
  ];

  const timeline = [
    { label: "Transfer created", time: "14m ago", tone: "emerald" },
    { label: "Treasury funds reserved", time: "12m ago", tone: "emerald" },
    { label: "Route broadcasted", time: "10m ago", tone: "emerald" },
    { label: "Vendor payout failed", time: "7m ago", tone: "amber" },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-6">
        <TopNav active="batch" />

        <section className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/45">
                    Batch Execution / Transfer Details
                  </p>
                  <h2 className="mt-2 text-[2rem] font-semibold tracking-tight">
                    Treasury Transfer — Batch Route
                  </h2>
                  <p className="mt-2 text-[1.02rem] text-white/55">
                    Review transfer routing, payout destinations, and execution results.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
                  Transfer ID: TX-8812
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/45">Transfer Amount</p>
                  <p className="mt-2 text-[1.8rem] font-semibold">$45,000</p>
                  <p className="mt-2 text-white/65">Stablecoin treasury allocation</p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/45">Route</p>
                  <p className="mt-2 text-[1.35rem] font-medium">Treasury → Recipients</p>
                  <p className="mt-2 text-white/65">Somnia payout batch route</p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/45">Source Wallet</p>
                  <p className="mt-2 text-[1.1rem] font-medium">0x6c8C3B....bD47f</p>
                  <p className="mt-2 text-white/65">Stablecoin treasury source</p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/45">Network Status</p>
                  <p className="mt-2 text-[1.3rem] font-semibold text-amber-300">
                    1 Failed Transfer
                  </p>
                  <p className="mt-2 text-white/65">Requires retry or review</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
              <div className="mb-5 border-b border-white/10 pb-4">
                <h3 className="text-[1.8rem] font-semibold tracking-tight">
                  Transfer Timeline
                </h3>
              </div>

              <div className="space-y-3">
                {timeline.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-block h-3 w-3 rounded-full ${
                          item.tone === "amber" ? "bg-amber-400" : "bg-emerald-400"
                        }`}
                      />
                      <span className="text-[1.08rem] text-white/88">{item.label}</span>
                    </div>
                    <span className="text-sm text-white/55">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
              <div className="mb-5 border-b border-white/10 pb-4">
                <h3 className="text-[1.8rem] font-semibold tracking-tight">
                  Recipient Breakdown
                </h3>
              </div>

              <div className="space-y-4">
                {recipients.map((item) => (
                  <div
                    key={item.wallet}
                    className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[1.1rem] font-medium text-white/88">
                          {item.wallet}
                        </p>
                        <p
                          className={`mt-3 text-[1rem] ${
                            item.tone === "amber" ? "text-amber-300" : "text-emerald-300"
                          }`}
                        >
                          {item.status}
                        </p>
                      </div>

                      <p className="text-[1.5rem] font-semibold">{item.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
              <div className="mb-5 border-b border-white/10 pb-4">
                <h3 className="text-[1.8rem] font-semibold tracking-tight">
                  Actions
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/batch"
                  className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-200"
                >
                  Return to Batch Execution
                </Link>
                <button className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/80">
                  Retry Failed Transfer
                </button>
                <button className="rounded-xl border border-rose-400/20 bg-rose-400/10 px-5 py-3 text-sm text-rose-200">
                  Flag for Review
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
