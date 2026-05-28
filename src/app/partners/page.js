"use client";

import Link from "next/link";
import { Users, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export default function PartnersPage() {
  const partners = [
    { name: "Cloud Services Alliance", type: "Infrastructure Partner", desc: "Co-implementing multi-region failovers, compliance networks, and auto-scaling setups." },
    { name: "Global Security Group", type: "Auditing Partner", desc: "Collaborates on corporate audits (SOC2, HIPAA) and zero-trust perimeter testing." },
    { name: "Database Engineering Labs", type: "Core Database Partner", desc: "Co-designs low-latency cache modules and transactional ledgers under heavy loads." }
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Ecosystem
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Partners & Tech Alliance
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          We collaborate with cloud providers and compliance security organizations to implement production environments.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {partners.map((p) => (
          <div key={p.name} className="p-6 rounded-2xl glass-card flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">{p.name}</h3>
              <p className="text-[11px] text-primary/95 font-semibold">{p.type}</p>
              <p className="text-xs text-slate-400 leading-relaxed pt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-2xl glass-panel text-center max-w-4xl mx-auto space-y-6 border border-primary/20">
        <h2 className="text-2xl font-bold text-slate-100">
          Interested in joining our partner network?
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed max-w-xl mx-auto">
          Contact our alliance team to discuss co-delivering software systems or security audits.
        </p>
        <div>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-bold text-sm text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all shadow-lg shadow-primary/15"
          >
            Connect With Alliance Team
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
}
