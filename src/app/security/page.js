"use client";

import { ShieldCheck, Lock, Eye, AlertCircle } from "lucide-react";

export default function SecurityPage() {
  const points = [
    { title: "Infrastructure Security", desc: "All systems operate inside secure VPCs with role-based access rules. Multi-factor auth is required for all access.", icon: ShieldCheck },
    { title: "Data Encryption", desc: "Data is encrypted at rest using AES-256 and in transit using TLS 1.3. Key management is controlled via cloud HSMs.", icon: Lock },
    { title: "Compliance Controls", desc: "Our configurations align with SOC2 Type II, ISO27001, and HIPAA compliance specifications.", icon: Eye }
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Trust Center
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Security & Trust Parameters
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Learn how we protect corporate databases, manage API secrets, and defend perimeters.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {points.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="p-6 rounded-2xl glass-card space-y-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">{p.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto p-6 rounded-2xl glass-panel border border-[#1e2038] flex items-start space-x-4">
        <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-slate-100">Vulnerability Disclosure</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            If you discover a vulnerability in our networks or products, please report it to our security response team at <a href="mailto:security@aetheris.com" className="text-primary hover:underline">security@aetheris.com</a>.
          </p>
        </div>
      </div>

    </div>
  );
}
