"use client";

import { CheckCircle2, GitCommit, Sparkles } from "lucide-react";

export default function ChangelogPage() {
  const updates = [
    {
      version: "v2.4.0",
      date: "May 18, 2026",
      title: "Zero-Downtime Migration Middleware Updates",
      items: [
        "Added Strangler Pattern double-write sync validation hooks.",
        "Optimized CDC event streaming payload parsing under load.",
        "Implemented automated schema mapping rules inside Kafka routers."
      ]
    },
    {
      version: "v2.3.2",
      date: "April 05, 2026",
      title: "SRE Kubernetes Scaling Improvements",
      items: [
        "Enabled multi-region cluster auto-scaling thresholds.",
        "Patched OpenSSL vulnerabilities inside baseline SRE docker builds.",
        "Added Datadog telemetry alerts for microservices latency drift."
      ]
    }
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Release Notes
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          System Changelog
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Track technical upgrades, library updates, SRE configurations, and software engine deployments.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {updates.map((up) => (
          <div key={up.version} className="relative p-6 rounded-2xl glass-card border border-[#1e2038] space-y-4">
            <span className="absolute right-6 top-6 px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-primary bg-primary/10 border border-primary/20 uppercase">
              {up.version}
            </span>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-semibold">{up.date}</span>
              <h3 className="text-base font-bold text-slate-100">{up.title}</h3>
            </div>
            <ul className="space-y-3 pt-4 border-t border-[#1e2038]/60">
              {up.items.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary mr-2.5 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}
