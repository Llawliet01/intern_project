"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Target } from "lucide-react";
import { caseStudiesData } from "@/data/siteData";

export default function CaseStudiesHub() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Case Studies
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Real Outcomes, Real Impact
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          See how our engineering teams have helped startups and enterprises scale systems performance, secure operations, and automate releases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(caseStudiesData).map(([slug, data]) => {
          return (
            <div key={slug} className="p-8 rounded-2xl glass-card flex flex-col justify-between group">
              <div className="space-y-6">
                
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="font-semibold text-primary">{data.client}</span>
                    <span>•</span>
                    <span>{data.industry}</span>
                    <span>•</span>
                    <span>{data.duration}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors pt-1">
                    {data.title}
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed pt-2">
                    {data.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#1e2038]/60">
                  {data.metrics.slice(0, 3).map((m, idx) => (
                    <div key={idx} className="text-center space-y-1">
                      <div className="text-lg sm:text-xl font-extrabold text-primary">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-500 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {data.techStack.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 text-[10px] text-slate-300 bg-white/[0.02] border border-[#1e2038] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="pt-8 border-t border-[#1e2038]/60 mt-8">
                <Link 
                  href={`/case-studies/${slug}`}
                  className="flex items-center justify-center w-full py-2.5 rounded-xl font-bold text-xs text-slate-200 bg-[#0c0d22] border border-[#1e2038] hover:border-slate-500 hover:text-slate-100 transition-all text-center"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
