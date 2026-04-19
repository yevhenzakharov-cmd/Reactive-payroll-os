"use client";

import Image from "next/image";
import Link from "next/link";

type TopNavProps = {
  active: "overview" | "requests" | "batch" | "verification";
};

const navItems = [
  { href: "/", label: "Overview", key: "overview" },
  { href: "/requests", label: "Requests", key: "requests" },
  { href: "/batch", label: "Batch Execution", key: "batch" },
  { href: "/verification", label: "Verification Center", key: "verification" },
] as const;

export default function TopNav({ active }: TopNavProps) {
  return (
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
            <h1 className="text-[2.3rem] font-semibold leading-none tracking-tight text-white">
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
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                $
              </span>
              <span className="text-[1.8rem] font-semibold tracking-tight text-white">
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
                  active === item.key
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
  );
}