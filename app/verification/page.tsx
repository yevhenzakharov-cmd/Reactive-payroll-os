import TopNav from "../components/top-nav";

export default function VerificationPage() {
  const checks = [
    {
      label: "ID Verified",
      value: "134 Passed",
      tone: "emerald",
      open: false,
    },
    {
      label: "Company Membership Check",
      value: "Failed",
      tone: "rose",
      open: true,
    },
    {
      label: "Approved Amount Verified",
      value: "92 Valid",
      tone: "emerald",
      open: false,
    },
    {
      label: "Wallet Verified",
      value: "Valid",
      tone: "emerald",
      open: false,
    },
  ];

  const apiChecks = [
    { label: "Payroll API", value: "Passed", tone: "emerald" },
    { label: "Tax API", value: "Passed", tone: "emerald" },
    { label: "Risk Score API", value: "Failed", tone: "rose" },
  ];

  const summaryChips = [
    { label: "1 Critical", tone: "rose" },
    { label: "2 Blocked Checks", tone: "amber" },
    { label: "1 Action Required", tone: "cyan" },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-6">
        <TopNav active="verification" />

        <section className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-[2rem] font-semibold tracking-tight">
                Verification Center
              </h2>
              <p className="mt-2 text-[1.02rem] text-white/55">
                Review payout mismatches, identity checks, and API validation.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
              Review Filters
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-3">
            {summaryChips.map((chip) => (
              <div
                key={chip.label}
                className={`rounded-full border px-4 py-2 text-sm ${
                  chip.tone === "rose"
                    ? "border-rose-400/25 bg-rose-400/10 text-rose-200"
                    : chip.tone === "amber"
                    ? "border-amber-400/25 bg-amber-400/10 text-amber-200"
                    : "border-cyan-400/25 bg-cyan-400/10 text-cyan-200"
                }`}
              >
                {chip.label}
              </div>
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,38,0.96),rgba(8,12,26,0.98))] p-5">
            <div className="rounded-[1.3rem] border border-rose-400/25 bg-rose-400/10 px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-rose-300">⚠</span>
                    <p className="text-[1.5rem] font-semibold tracking-tight text-white">
                      Rule Mismatch Detected — Review Required
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-white/55">Validation Error</p>
                </div>

                <button className="text-white/60">⌄</button>
              </div>
            </div>

            <div className="mt-4 rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-5 py-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg font-semibold text-white/85">
                    D
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <p className="text-[1.9rem] font-semibold leading-none">Diana H.</p>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/70">
                        Contractor
                      </span>
                    </div>
                    <p className="mt-3 text-base text-white/75">Payout</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                        Request ID: PAY-2048
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                        Submitted: 12m ago
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[2.3rem] font-semibold tracking-tight">$2,000</p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {checks.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-block h-3 w-3 rounded-full ${
                          item.tone === "rose" ? "bg-rose-400" : "bg-emerald-400"
                        }`}
                      />
                      <span className="text-[1.35rem] font-medium text-white/90">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {item.tone === "rose" ? (
                        <span className="rounded-md border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-sm text-amber-200">
                          {item.value}
                        </span>
                      ) : (
                        <span className="text-[1.1rem] text-white/85">{item.value}</span>
                      )}
                      <span className="text-white/55">⌄</span>
                    </div>
                  </div>

                  {item.open && (
                    <div className="border-t border-white/10 px-5 py-5">
                      <p className="text-[1.15rem] text-white/72">
                        diana@cryptodesk.xyz is not listed as a verified team member.
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-4">
                        <button className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
                          Resend Check
                        </button>

                        <div className="flex items-center gap-3">
                          <span className="text-emerald-300">✓</span>
                          <span className="text-[1.05rem] text-white/85">Failed</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[1.25rem] border border-rose-400/20 bg-rose-400/10 px-5 py-5">
              <div className="flex items-center gap-3">
                <span className="text-xl text-rose-300">⚠</span>
                <p className="text-[1.4rem] font-semibold tracking-tight">
                  Payout Rule Mismatch
                </p>
              </div>

              <p className="mt-4 text-[1.08rem] text-white/82">
                $2,000 exceeds Diana&apos;s approved weekly payout threshold of $1,500.
              </p>

              <button className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
                View Payout Rule
              </button>
            </div>

            <div className="mt-6">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-[2rem] font-semibold tracking-tight">
                  API Verification
                </h3>

                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                  2 of 3 APIs Passed
                </div>
              </div>

              <div className="space-y-3">
                {apiChecks.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-block h-3 w-3 rounded-full ${
                          item.tone === "rose" ? "bg-rose-400" : "bg-emerald-400"
                        }`}
                      />
                      <span className="text-[1.2rem] text-white/88">{item.label}</span>
                    </div>

                    <span
                      className={`text-[1.05rem] ${
                        item.tone === "rose" ? "text-rose-300" : "text-emerald-300"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <button className="rounded-xl border border-rose-400/20 bg-rose-400/10 px-5 py-3 text-sm text-rose-200">
                  Reject Request
                </button>
                <button className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-200">
                  Resolve Issue
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}