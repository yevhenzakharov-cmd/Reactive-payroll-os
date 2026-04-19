import TopNav from "./components/top-nav";

export default function Home() {
  const stats = [
    {
      title: "Pending Requests",
      value: "12",
      subtext: "Awaiting Review",
      accent: "cyan",
    },
    {
      title: "Ready for Payout",
      value: "$78,200",
      subtext: "Verified & Approved",
      accent: "emerald",
    },
    {
      title: "Issues Detected",
      value: "5",
      subtext: "Action Required",
      accent: "amber",
    },
    {
      title: "Next Payout Batch",
      value: "In 2 Hours",
      subtext: "18 Recipients | $45,000",
      accent: "violet",
    },
  ];

  const activity = [
    {
      name: "Julia M.",
      type: "Payroll",
      status: "Scheduled",
      amount: "$3,500",
      tone: "emerald",
    },
    {
      name: "Stripe Treasury",
      type: "Invoice",
      status: "Pending Review",
      amount: "$5,200",
      tone: "amber",
    },
    {
      name: "Sam R.",
      type: "Affiliate",
      status: "Approved",
      amount: "$1,800",
      tone: "emerald",
    },
    {
      name: "Luna D.",
      type: "Contractor",
      status: "Issue Detected",
      amount: "$2,000",
      tone: "rose",
    },
    {
      name: "Grant DAO",
      type: "Contributor",
      status: "Completed",
      amount: "$10,000",
      tone: "emerald",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-6">
        <TopNav active="overview" />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const accentClass =
              stat.accent === "cyan"
                ? "from-cyan-400/20 via-blue-500/10 to-transparent"
                : stat.accent === "emerald"
                ? "from-emerald-400/20 via-cyan-400/10 to-transparent"
                : stat.accent === "amber"
                ? "from-amber-400/20 via-rose-400/10 to-transparent"
                : "from-violet-400/20 via-fuchsia-400/10 to-transparent";

            const subtextClass =
              stat.accent === "emerald"
                ? "text-emerald-300"
                : stat.accent === "amber"
                ? "text-rose-300"
                : "text-white/60";

            const valueClass =
              stat.accent === "violet"
                ? "text-[3.2rem] lg:text-[3.4rem]"
                : "text-[3.5rem] lg:text-[3.7rem]";

            return (
              <div
                key={stat.title}
                className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,33,0.98),rgba(6,10,24,0.98))] p-6 shadow-[0_0_40px_rgba(25,40,90,0.18)]"
              >
                <div className={`rounded-[1.4rem] bg-gradient-to-r ${accentClass}`}>
                  <div className="rounded-[1.4rem] px-3 py-3">
                    <div className="border-b border-white/10 pb-4">
                      <p className="text-[1.05rem] text-white/80">{stat.title}</p>
                    </div>

                    <div className="flex min-h-[170px] flex-col items-center justify-center text-center">
                      <p
                        className={`${valueClass} font-semibold leading-none tracking-tight`}
                      >
                        {stat.value}
                      </p>
                      <p className={`mt-5 text-[1.1rem] ${subtextClass}`}>
                        {stat.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.9fr_1fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
            <div className="mb-5 border-b border-white/10 pb-4">
              <h2 className="text-[2rem] font-semibold tracking-tight">
                Treasury Overview
              </h2>
            </div>

            <div className="relative h-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,38,0.96),rgba(8,12,26,0.98))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,140,255,0.12),transparent_32%)]" />

              <div className="absolute inset-x-0 top-[25%] border-t border-white/10" />
              <div className="absolute inset-x-0 top-[50%] border-t border-white/10" />
              <div className="absolute inset-x-0 top-[75%] border-t border-white/10" />

              <svg
                viewBox="0 0 1000 360"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  d="M40 220 C 95 250, 120 160, 170 180 C 220 200, 245 150, 300 165 C 360 180, 380 105, 440 120 C 500 135, 520 175, 575 160 C 640 142, 675 108, 740 118 C 800 128, 815 178, 875 160 C 920 148, 950 130, 965 118"
                  stroke="rgba(123,211,255,0.95)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M40 220 C 95 250, 120 160, 170 180 C 220 200, 245 150, 300 165 C 360 180, 380 105, 440 120 C 500 135, 520 175, 575 160 C 640 142, 675 108, 740 118 C 800 128, 815 178, 875 160 C 920 148, 950 130, 965 118"
                  stroke="rgba(90,150,255,0.18)"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 border-t border-white/10 bg-[linear-gradient(180deg,rgba(7,10,24,0),rgba(7,10,24,0.92))] px-6 py-5">
                <div className="pr-6">
                  <p className="text-sm text-white/50">Onchain Balance</p>
                  <p className="mt-2 text-[2.3rem] font-semibold tracking-tight">
                    $2.45M
                  </p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <p className="text-sm text-white/50">Upcoming Payouts</p>
                  <p className="mt-2 text-[2.3rem] font-semibold tracking-tight text-cyan-300">
                    $123K
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
            <div className="mb-5 border-b border-white/10 pb-4">
              <h2 className="text-[2rem] font-semibold tracking-tight">
                Verification Status
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: "ID Verified",
                  value: "134 Passed",
                  tone: "emerald",
                },
                {
                  label: "Amount Approved",
                  value: "92 Valid",
                  tone: "emerald",
                },
                {
                  label: "Wallet Issues",
                  value: "3 Flagged",
                  tone: "rose",
                },
                {
                  label: "Rule Violations",
                  value: "2 Errors",
                  tone: "amber",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        item.tone === "emerald"
                          ? "bg-emerald-400"
                          : item.tone === "rose"
                          ? "bg-rose-400"
                          : "bg-amber-400"
                      }`}
                    />
                    <span className="text-[1rem] text-white/85">{item.label}</span>
                  </div>
                  <span className="text-[1rem] font-medium text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_50px_rgba(33,53,120,0.16)]">
          <div className="mb-5 border-b border-white/10 pb-4">
            <h2 className="text-[2rem] font-semibold tracking-tight">
              Recent Activity
            </h2>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="grid grid-cols-4 gap-4 border-b border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/50">
              <div>User</div>
              <div>Type</div>
              <div>Status</div>
              <div>Amount</div>
            </div>

            {activity.map((item) => (
              <div
                key={`${item.name}-${item.amount}`}
                className="grid grid-cols-4 gap-4 border-b border-white/10 px-6 py-4 text-[0.98rem] text-white/82 last:border-b-0"
              >
                <div className="font-medium text-white">{item.name}</div>
                <div>{item.type}</div>
                <div
                  className={
                    item.tone === "rose"
                      ? "text-rose-300"
                      : item.tone === "amber"
                      ? "text-amber-300"
                      : "text-emerald-300"
                  }
                >
                  {item.status}
                </div>
                <div className="font-medium text-white">{item.amount}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}