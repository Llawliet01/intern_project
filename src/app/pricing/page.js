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
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 text-slate-800">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block uppercase font-mono">
          Engagement Models
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-outfit tracking-tight leading-tight">
          Flexible Pricing & Team Packages
        </h1>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
          Select a structural model that aligns with your product timeline, engineering capacity, and project constraints.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto pt-6 text-left">
        {tiers.map((tier) => (
          <div 
            key={tier.name}
            className={`relative p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-col justify-between space-y-6 overflow-hidden ${
              tier.popular ? "border-blue-600 ring-2 ring-blue-600/10 shadow-xl" : ""
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[9px] font-black tracking-widest text-white bg-blue-600 uppercase font-mono">
                Highly Recommended
              </span>
            )}
            
            <div className="space-y-4 relative z-10">
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{tier.name}</h3>
              <div className="text-2xl font-black text-blue-600 tracking-tight font-outfit">{tier.price}</div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{tier.desc}</p>
              
              <ul className="space-y-3 pt-6 border-t border-slate-100">
                {tier.features.map((f) => (
                  <li key={f} className="text-xs text-slate-600 font-medium flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2.5 flex-shrink-0"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 relative z-10">
              <Link
                href="/contact"
                className={`flex items-center justify-center w-full py-3 rounded-xl font-extrabold text-xs transition-all text-center uppercase tracking-wider ${
                  tier.popular
                    ? "text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/15"
                    : "text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100/50 hover:border-slate-350"
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
