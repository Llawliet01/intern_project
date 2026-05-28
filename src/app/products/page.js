"use client";

import Link from "next/link";
import { ArrowRight, Layers, Cpu, CheckCircle2 } from "lucide-react";
import { productsData } from "@/data/siteData";

export default function ProductsHub() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Enterprise Products
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Aetheris Engineered Systems
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Accelerate code releases and analyze event analytics at scale with our core proprietary software engines.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Object.entries(productsData).map(([slug, data]) => {
          const Icon = slug === "icedeploy" ? Cpu : Layers;
          return (
            <div key={slug} className="p-8 rounded-2xl glass-card flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  {slug === "icedeploy" && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-[#030308] bg-primary uppercase">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                    {data.name}
                  </h2>
                  <p className="text-sm text-primary/95 font-semibold">
                    {data.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-2">
                    {data.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-[#1e2038]/60">
                  {data.features.map((feat) => (
                    <li key={feat} className="flex items-center text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-[#1e2038]/60 mt-8">
                <Link 
                  href={`/products/${slug}`}
                  className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-center"
                >
                  Explore {data.name} Features
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
