"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { Calendar, Clock, ArrowRight, Play } from "lucide-react";

export default function WebinarsPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Form submitted successfully");
    setFormData({ name: "", email: "" });
  };

  const upcomingWebinars = [
    { title: "Strangler Pattern: Dynamic Database Migrations", date: "June 12, 2026", time: "3:00 PM IST", duration: "60 mins" },
    { title: "Hardening Kubernetes Cluster Configurations", date: "June 26, 2026", time: "4:00 PM IST", duration: "45 mins" }
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Events & Webinars
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          System Engineering Webinars
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Learn directly from our senior cloud architects and software leads in live coding and systems design sessions.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
        
        {/* Webinar schedule */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-xs font-black tracking-widest text-slate-500 uppercase px-3">
            Upcoming Schedule
          </h2>
          {upcomingWebinars.map((web) => (
            <div key={web.title} className="p-6 rounded-2xl glass-card border border-[#1e2038] space-y-4">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-100">{web.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-[10px] text-slate-400">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    {web.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    {web.time} ({web.duration})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Access Form */}
        <div className="lg:col-span-5 p-8 rounded-2xl glass-card border border-[#1e2038] space-y-6">
          <h3 className="text-sm font-bold text-slate-100 border-l-2 border-primary pl-3">
            Register for Webinars
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Submit your details below to receive access keys and calendars for all upcoming sessions.
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400">Full Name *</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Marcus Chen"
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
                placeholder="marcus@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-[#1e2038] focus:border-primary text-xs text-slate-100 outline-none"
              />
            </div>

            <div>
              <button 
                type="submit"
                className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-xs text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-center shadow-lg shadow-primary/10"
              >
                Register for Free Access
                <Play className="w-4 h-4 ml-2 fill-[#030308]" />
              </button>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
}
