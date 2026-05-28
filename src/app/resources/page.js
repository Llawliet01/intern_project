"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { BookOpen, Calendar, ArrowRight, Download, Send } from "lucide-react";

export default function ResourcesPage() {
  const [formData, setFormData] = useState({ name: "", email: "", guide: "" });
  const [activeGuide, setActiveGuide] = useState(null);

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Form submitted successfully");
    setActiveGuide(null);
    setFormData({ name: "", email: "", guide: "" });
  };

  const guides = [
    { title: "Cloud Migration Checklist", id: "cloud-migration", desc: "A 50-point checklist designed for planning and executing enterprise cloud migrations." },
    { title: "SaaS Security Whitepaper", id: "saas-security", desc: "A comprehensive guide to securing multi-tenant SaaS applications." },
    { title: "API Design Best Practices", id: "api-design", desc: "RESTful and GraphQL API design patterns optimized for scalable systems." },
    { title: "DevOps Metrics That Matter", id: "devops-metrics", desc: "An explanatory guide covering DORA metrics, error budgets, and SLOs." },
    { title: "Kubernetes Cost Optimization", id: "k8s-cost", desc: "Practical strategies to reduce Kubernetes (K8s) costs by 40% to 60%." },
    { title: "Healthcare Security Checklist", id: "healthcare-security", desc: "A complete security and compliance roadmap specifically tailored for healthcare software developers." }
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Guides & Audits
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          System Blueprints & Whitepapers
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Download our checklists, whitepapers, and guides developed by our senior software engineers and security compliance leads.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((g) => (
          <div key={g.id} className="p-6 rounded-2xl glass-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100 group-hover:text-primary transition-colors">
                {g.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {g.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-[#1e2038]/60 mt-6">
              <button
                onClick={() => {
                  setActiveGuide(g.title);
                  setFormData(prev => ({ ...prev, guide: g.title }));
                }}
                className="flex items-center justify-center w-full py-2.5 rounded-xl font-bold text-xs text-slate-200 bg-[#0c0d22] border border-[#1e2038] hover:border-slate-500 hover:text-slate-100 transition-all text-center"
              >
                Download Guide
                <Download className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form for Download */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActiveGuide(null)} 
            className="absolute inset-0 bg-[#030308]/80 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md p-8 rounded-2xl glass-panel border border-[#1e2038] space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-100 border-l-2 border-primary pl-3">
                Download Resource
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Submit details to receive the **{activeGuide}** PDF.
              </p>
            </div>

            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400">Full Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Elena Rostova"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-[#1e2038] focus:border-primary text-xs text-slate-100 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400">Corporate Email *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="elena@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-[#1e2038] focus:border-primary text-xs text-slate-100 outline-none"
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <button 
                  type="submit"
                  className="flex-1 py-3 rounded-xl font-bold text-xs text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-center shadow-lg shadow-primary/10"
                >
                  Download Now
                </button>
                <button 
                  type="button" 
                  onClick={() => setActiveGuide(null)}
                  className="px-4 py-3 rounded-xl font-semibold text-xs text-slate-400 bg-white/[0.02] border border-[#1e2038] hover:border-slate-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Need Custom Content */}
      <div className="p-8 sm:p-12 rounded-2xl glass-panel text-center max-w-4xl mx-auto space-y-6 border border-primary/20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
          Need Custom System Documentation?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          We author security blueprints and migration roadmaps tailored to your corporate environments.
        </p>
        <div>
          <button 
            onClick={() => {
              setActiveGuide("Custom Documentation Blueprint");
              setFormData(prev => ({ ...prev, guide: "Custom Blueprint" }));
            }}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/15"
          >
            Request Custom Spec
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

    </div>
  );
}
