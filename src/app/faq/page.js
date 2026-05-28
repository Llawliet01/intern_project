"use client";

import { faqData } from "@/data/siteData";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Common Inquiries
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Find fast answers regarding our cloud migration workflows, HIPAA configurations, and support SLA contracts.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqData.map((faq, idx) => (
          <div key={idx} className="p-6 rounded-2xl glass-card border border-[#1e2038] space-y-3">
            <div className="flex items-start space-x-3">
              <HelpCircle className="w-5 h-5 text-primary mr-1 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-slate-100">{faq.q}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
