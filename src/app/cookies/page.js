"use client";

export default function CookiesPage() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Legal
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Cookie Policy
        </h1>
        <p className="text-xs text-slate-500">Last updated: May 25, 2026</p>
      </div>

      <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-6 pt-4 border-t border-[#1e2038]/40">
        <h2 className="text-lg font-bold text-slate-100">1. How We Use Cookies</h2>
        <p>
          We use cookies to maintain active dashboard user sessions, compile anonymized traffic metrics, and improve our web services.
        </p>

        <h2 className="text-lg font-bold text-slate-100">2. Managed Control</h2>
        <p>
          Users can choose to accept or reject non-essential cookies via their browser settings. Disabling essential cookies may prevent access to dashboard sections.
        </p>
      </div>

    </div>
  );
}
