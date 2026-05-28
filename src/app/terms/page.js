"use client";

export default function TermsPage() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Legal
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500">Last updated: May 25, 2026</p>
      </div>

      <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-6 pt-4 border-t border-[#1e2038]/40">
        <h2 className="text-lg font-bold text-slate-100">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the services provided by Aetheris Systems, you agree to comply with and be bound by these Terms of Service.
        </p>

        <h2 className="text-lg font-bold text-slate-100">2. Professional Services & Deliverables</h2>
        <p>
          Our teams deliver software engineering, cloud automation, and consulting under individual Statement of Work (SOW) agreements. Specific SLAs, deliverables, and timelines are governed by those documents.
        </p>

        <h2 className="text-lg font-bold text-slate-100">3. Intellectual Property</h2>
        <p>
          Unless otherwise specified in an SOW, all intellectual property in the custom software code delivered to our clients transfers upon final payment.
        </p>
      </div>

    </div>
  );
}
