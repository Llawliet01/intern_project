"use client";

import Link from "next/link";
import { 
  Code, Cpu, Settings, Terminal, UserCheck, 
  Activity, Lock, Database, Sparkles, ArrowRight
} from "lucide-react";
import { servicesData } from "@/data/siteData";

export default function ServicesHub() {
  const serviceIcons = {
    "custom-development": Code,
    "mobile-apps": Cpu,
    "cloud-sre": Settings,
    "api-integrations": Terminal,
    "qa-performance": UserCheck,
    "managed-support": Activity,
    "cybersecurity": Lock,
    "data-ai": Database,
    "ux-ui": Sparkles
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Our Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Comprehensive Engineering Capabilities
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Explore our complete suite of software development, cloud automation, and digital transformation capabilities designed for modern enterprise performance.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(servicesData).map(([slug, data]) => {
          const IconComponent = serviceIcons[slug] || Code;
          return (
            <div key={slug} className="p-8 rounded-2xl glass-card flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-[#1e2038] text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all flex items-center justify-center">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">
                  {data.title}
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {data.description}
                </p>
                <ul className="space-y-2 pt-4 border-t border-[#1e2038]/30">
                  {data.features.map((f) => (
                    <li key={f} className="text-[10px] text-slate-300 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-primary mr-2"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#1e2038]/30">
                <Link 
                  href={`/services/${slug}`}
                  className="inline-flex items-center text-xs font-bold text-primary group-hover:text-cyan-300 transition-colors"
                >
                  Explore Capabilities & Details
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
