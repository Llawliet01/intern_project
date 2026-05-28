"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { Briefcase, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { careersData } from "@/data/siteData";

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState(careersData[0]?.id || "");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    jobId: careersData[0]?.id || "",
    cover: ""
  });

  const selectedJob = careersData.find(j => j.id === formData.jobId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.cover) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Form submitted successfully");
    setFormData({
      name: "",
      email: "",
      portfolio: "",
      jobId: careersData[0]?.id || "",
      cover: ""
    });
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background visual element */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Join Our Crew
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Shape the Future of Cloud & Code
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          We operate as a remote-first enterprise, building mission-critical platform architectures and tooling. Apply for an active opening below.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
        
        {/* Open Job Listings */}
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-xs font-black tracking-widest text-slate-500 uppercase px-3">
            Open Engineering Positions
          </h2>
          {careersData.map((job) => (
            <button
              key={job.id}
              onClick={() => {
                setActiveJob(job.id);
                setFormData(prev => ({ ...prev, jobId: job.id }));
              }}
              className={`w-full text-left p-6 rounded-2xl border transition-all text-slate-100 block ${
                activeJob === job.id
                  ? "bg-white/[0.04] border-primary"
                  : "bg-white/[0.01] border-[#1e2038] hover:border-slate-500"
              }`}
            >
              <div className="space-y-2">
                <h3 className="text-base font-bold">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-[10px] text-slate-400">
                  <span className="flex items-center">
                    <Briefcase className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    {job.department}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    {job.type}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-2">
                  {job.summary}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Application details / Form */}
        <div className="lg:col-span-6 p-8 rounded-2xl glass-card border border-[#1e2038] space-y-8">
          {selectedJob && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-100 border-l-2 border-primary pl-3">
                Applying for: {selectedJob.title}
              </h2>
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedJob.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-[#1e2038]/60">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400">Full Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Aarav Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-[#1e2038] focus:border-primary text-xs text-slate-100 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400">Email *</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="aarav@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-[#1e2038] focus:border-primary text-xs text-slate-100 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400">Portfolio / LinkedIn Link</label>
              <input 
                type="url" 
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                placeholder="https://github.com/aarav"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-[#1e2038] focus:border-primary text-xs text-slate-100 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400">Cover Letter & Pitch *</label>
              <textarea 
                required
                rows={4}
                value={formData.cover}
                onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                placeholder="Tell us about a complex scaling problem you solved or a CI/CD stack you built..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-[#1e2038] focus:border-primary text-xs text-slate-100 outline-none resize-none"
              />
            </div>

            <div>
              <button 
                type="submit"
                className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-xs text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-center shadow-lg shadow-primary/10"
              >
                Submit Application
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
}
