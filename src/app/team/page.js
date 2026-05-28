"use client";

import { Users } from "lucide-react";

export default function TeamPage() {
  const members = [
    { name: "Arvind Krishnan", role: "Chief Technology Officer", bio: "Former SRE Lead at payment scaleups. Specializes in multi-tenant ledger architecture and database performance tuning." },
    { name: "Elena Rostova", role: "Principal Cloud Architect", bio: "DevOps specialist who has configured GitOps CI/CD pipelines for 30+ enterprise networks." },
    { name: "Aarav Sharma", role: "Director of Software Engineering", bio: "Full-stack architect with a focus on high-frequency API design, microservices, and GraphQL." },
    { name: "David Vance", role: "Lead MLOps Engineer", bio: "Designs analytics warehouses and pipelines, automating training loops and predictions." }
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Our People
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Systems Leaders & Architects
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Meet the software engineering leads and operations specialists directing our client project deliverables.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {members.map((m) => (
          <div key={m.name} className="p-6 rounded-2xl glass-card space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-100">{m.name}</h3>
              <p className="text-xs text-primary/95 font-semibold">{m.role}</p>
              <p className="text-xs text-slate-400 leading-relaxed pt-2">{m.bio}</p>
            </div>
            
            <div className="flex items-center space-x-3 pt-4 border-t border-[#1e2038]/40 text-slate-400">
              <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub Profile">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn Profile">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
