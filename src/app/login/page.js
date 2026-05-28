"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { Cpu, Send } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Form submitted successfully");
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-4">
        <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-tr from-primary via-[#4FACFE] to-secondary items-center justify-center mx-auto">
          <Cpu className="w-6 h-6 text-[#030308]" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Login to Aetheris
        </h1>
        <p className="text-xs text-slate-400">
          Access your cloud automation resources and status dashboards.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="p-8 rounded-2xl glass-card border border-[#1e2038] space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400">Corporate Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-[#1e2038] focus:border-primary text-xs text-slate-100 outline-none"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400">Secure Password</label>
              <input 
                type="password" 
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-[#1e2038] focus:border-primary text-xs text-slate-100 outline-none"
              />
            </div>

            <div>
              <button 
                type="submit"
                className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-xs text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-center shadow-lg shadow-primary/10"
              >
                Access Dashboard
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>

          <div className="text-center pt-4 border-t border-[#1e2038]/60 text-xs text-slate-400">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-semibold">
              Create an Account
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
