import Image from "next/image";
import Link from "next/link";

export default function RequestDetailsPage() {
  const navItems = [
    { href: "/", label: "Overview", active: false },
    { href: "/requests", label: "Requests", active: true },
    { href: "/batch", label: "Batch Execution", active: false },
    { href: "/verification", label: "Verification Center", active: false },
  ];

  const timeline = [
    { label: "Request submitted", time: "12m ago", tone: "emerald" },
    { label: "Policy checks started", time: "10m ago", tone: "emerald" },
    { label: "Membership validation failed", time: "8m ago", tone: "rose" },
    { label: "Sent to manual review", time: "5m ago", tone: "amber" },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-6">
        <header className="mb-6 border-b border-white/10 pb-5">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-white/[0.03]">
                <Image
                  src="/somnia-logo.png"
                  alt="Somnia logo"
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px] object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-[2.3rem] font-semibold leading-none tracking-tight">
                  Somnia Payout OS
                </h1>
                <p className="mt-1 text-base text-white/60">
                  Reactive Payroll &amp; Payout Hub
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-sm text-white/60">Treasury Balance</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold">
                    $
                  </span>
                  <span className="text-[1.8rem] font-semibold tracking-tight">
                    2,450,300
                  </span>
                </div>
              </div>

              <nav className="flex items-center gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl border px-5 py-3 text-lg transition ${
                      item.active
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                        : "border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/[0.07]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/45">Requests / Details</p>

                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <h2 className="text-[2rem] font-semibold tracking-tight">
                      Diana H. — Payout Request
                    </h2>
                    <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-1.5 text-sm text-amber-200">
                      Manual Review Required
                    </span>
                  </div>

                  <p className="mt-3 text-[1.02rem] text-white/55">
                    Review full request context before sending to verification or batch.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
                  Request ID: PAY-2048
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/45">Payee</p>
                  <p className="mt-2 text-[1.5rem] font-semibold">Diana H.</p>
                  <p className="mt-2 text-white/65">Contractor · Growth Operations</p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/45">Requested Amount</p>
                  <p className="mt-2 text-[1.8rem] font-semibold">$2,000</p>
                  <p className="mt-2 text-white/65">USDC payout request</p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/45">Wallet</p>
                  <p className="mt-2 text-[1.1rem] font-medium">0x814c....0acf</p>
                  <p className="mt-2 text-white/65">Primary recipient wallet</p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/45">Current Status</p>
                  <p className="mt-2 text-[1.3rem] font-semibold text-amber-300">
                    Pending Verification
                  </p>
                  <p className="mt-2 text-white/65">Waiting for manual resolution</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
              <div className="mb-5 border-b border-white/10 pb-4">
                <h3 className="text-[1.8rem] font-semibold tracking-tight">
                  Request Timeline
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
                          item.tone === "rose"
                            ? "bg-rose-400"
                            : item.tone === "amber"
                            ? "bg-amber-400"
                            : "bg-emerald-400"
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
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-[1.8rem] font-semibold tracking-tight">
                  Request Summary
                </h3>

                <span className="rounded-full border border-rose-400/25 bg-rose-400/10 px-4 py-2 text-sm text-rose-200">
                  High Risk
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-white/45">Invoice Reference</p>
                  <p className="mt-1 text-white/85">INV-7743-GO</p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Approved Weekly Threshold</p>
                  <p className="mt-1 text-white/85">$1,500</p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Requested vs Approved</p>
                  <p className="mt-1 text-rose-300">$2,000 requested · $1,500 approved</p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Risk Level</p>
                  <p className="mt-1 text-amber-300">Manual review required before batch approval</p>
                </div>

                <div className="rounded-[1.2rem] border border-rose-400/20 bg-rose-400/10 px-4 py-4">
                  <p className="text-sm text-white/55">Primary Issue</p>
                  <p className="mt-2 text-[1.02rem] font-medium text-white">
                    Membership validation failed
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    The payee email is not currently listed as an approved internal team member.
                  </p>
                </div>
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
                  href="/verification"
                  className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-200"
                >
                  Open Verification Center
                </Link>
                <button className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/80">
                  Approve for Batch
                </button>
                <button className="rounded-xl border border-rose-400/20 bg-rose-400/10 px-5 py-3 text-sm text-rose-200">
                  Reject Request
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}