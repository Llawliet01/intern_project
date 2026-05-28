"use client";

import Link from "next/link";
import { ArrowRight, Target, ShieldCheck, Zap, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Background visual element */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Our Mission
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Orchestrating the Digital Future
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          At Aetheris Systems, we believe enterprise software must be robust, reliable, and secure by default. We are a team of systems engineers, SREs, and architects dedicated to building high-performance architectures.
        </p>
      </div>

      {/* Content grid */}
      <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-[#1e2038]/40">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100">
            Engineered for Continuous Scale
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Founded in Ahmedabad, Gujarat, India, Aetheris Systems has grown from a specialized systems infrastructure consultancy into a full-scale IT solutions provider. We design systems that withstand volatile traffic spikes and secure critical assets under strict regulatory guidelines.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Our engineering methodology combines microservices design, GitOps-driven deployment, and continuous performance validation. We partner with growth-stage startups and enterprises to accelerate their release speed.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Target, title: "Precision", desc: "Clean code, test coverage, and strict architecture specs." },
            { icon: ShieldCheck, title: "Zero Trust", desc: "End-to-end database encryption and compliance gates." },
            { icon: Zap, title: "High Velocity", desc: "Automated canary deployments and GitOps integrations." },
            { icon: Users, title: "Client First", desc: "SLA-backed responses and dedicated technical teams." }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl glass-card space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100">{item.title}</h3>
                <p className="text-[11px] text-slate-500 leading-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-2xl glass-panel text-center max-w-4xl mx-auto space-y-6 border border-primary/20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
          Want to know more about our engineering divisions?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          Arrange a call with our technical advisory group to map out your infrastructure goals.
        </p>
        <div>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/15"
          >
            Arrange Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
}
