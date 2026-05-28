"use client";

import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CompliancePage() {
  const certifications = [
    { title: "SOC 2 Type II", status: "Aligned & Tested", desc: "Our software development processes and cloud host configurations align with AICPA Trust Services Criteria." },
    { title: "ISO/IEC 27001", status: "Aligned & Certified", desc: "Our Information Security Management System (ISMS) aligns with ISO27001 parameters." },
    { title: "HIPAA Alignment", status: "Audit Ready", desc: "All systems processing Patient Health Information (PHI) implement required logging and encryption safeguards." }
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Compliance & Regulatory Standards
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          We operate under strict information security frameworks to protect customer data.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((c) => (
          <div key={c.title} className="p-6 rounded-2xl glass-card border border-[#1e2038] space-y-4">
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="px-2 py-0.5 text-[9px] font-bold text-primary bg-primary/10 rounded border border-primary/20">
                {c.status}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-100">{c.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
