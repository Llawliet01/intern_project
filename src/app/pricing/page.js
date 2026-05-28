"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function PricingPage() {
  const tiers = [
    {
      name: "Co-Development Support",
      price: "Flexible Commitments",
      desc: "Ideal for growth-stage ventures that need senior developers to build features or configure pipelines.",
      features: [
        "Direct Slack & repository access",
        "Flexible sprint scope planning",
        "Dedicated senior software engineers",
        "Weekly technical review meetings",
        "Daily asynchronous code updates",
        "Comprehensive QA automation setup"
      ]
    },
    {
      name: "Dedicated Scrum Team",
      price: "Enterprise Contracts",
      desc: "A fully staffed software engineering team comprising SREs, backend developers, frontend leads, and QA automated testers.",
      features: [
        "Product owner, SREs, and developers",
        "Continuous automated CI/CD configurations",
        "Comprehensive system logging configurations",
        "Active incident handler escalation schedules",
        "Daily sprint stand-ups & status reviews",
        "Custom infrastructure metrics dashboards"
      ],
      popular: true
    },
    {
      name: "Fixed-Scope Projects",
      price: "Predefined Budget",
      desc: "For projects with clear specifications, legacy system migrations, or compliance readiness audits.",
      features: [
        "Deep discovery system blueprint",
        "Milestone-based delivery stages",
        "Comprehensive API documentation layout",
        "Complete ownership transfer on handoff",
        "Post-launch operations walkthroughs",
        "3 months technical support SLA"
      ]
    }
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Engagement Models
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Flexible Pricing & Team Packages
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Select a structural model that aligns with your product timeline, engineering capacity, and project constraints.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div 
            key={tier.name}
            className={`relative p-8 rounded-2xl glass-card flex flex-col justify-between space-y-6 ${
              tier.popular ? "border-primary/50 shadow-lg shadow-primary/5 bg-white/[0.01]" : ""
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-[#030308] bg-primary uppercase">
                Highly Recommended
              </span>
            )}
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-100">{tier.name}</h3>
              <div className="text-2xl font-black text-primary tracking-tight">{tier.price}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{tier.desc}</p>
              
              <ul className="space-y-3 pt-6 border-t border-[#1e2038]/60">
                {tier.features.map((f) => (
                  <li key={f} className="text-xs text-slate-300 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2.5"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#1e2038]/40">
              <Link
                href="/contact"
                className={`flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm transition-all text-center ${
                  tier.popular
                    ? "text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95"
                    : "text-slate-200 bg-[#0c0d22] border border-[#1e2038] hover:border-slate-500"
                }`}
              >
                Arrange Alignment Call
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
