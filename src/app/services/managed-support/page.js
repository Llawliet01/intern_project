"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Shield, 
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Clock, Activity, AlertCircle, Play, HeartHandshake
} from "lucide-react";

export default function ManagedSupportPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const supportTiers = [
    {
      name: "Starter",
      desc: "Essential security and update patching for low-traffic business applications.",
      rto: "RTO: 24 hours",
      bullets: [
        "Email support (Mon-Fri, 9-5)",
        "Monthly systems health checks",
        "Quarterly dependency updates",
        "Basic host monitoring setup"
      ]
    },
    {
      name: "Growth",
      desc: "Advanced monitoring and response targets for production platforms.",
      rto: "RTO: 8 hours",
      isPopular: true,
      bullets: [
        "Extended hours (Mon-Fri, 7-7)",
        "Phone & email direct support",
        "Weekly automated health checks",
        "Monthly security patch cycles",
        "Advanced monitoring & alerts"
      ]
    },
    {
      name: "Enterprise",
      desc: "Complete 24/7 support coverage with strict recovery parameters.",
      rto: "RTO: 2 hours, RPO: 1 hour",
      bullets: [
        "24/7/365 active live support",
        "Dedicated on-call engineering team",
        "Proactive threat monitoring",
        "Continuous hotfix updates",
        "Custom SLA parameters & rules",
        "Dedicated account manager team"
      ]
    }
  ];

  const whatsIncluded = [
    {
      title: "Active Monitoring",
      desc: "24/7/365 active systems uptime and application performance tracking.",
      icon: Activity
    },
    {
      title: "Routine Maintenance",
      desc: "OS updates, dependency patch management, and critical security rollouts.",
      icon: Settings
    },
    {
      title: "Incident Response",
      desc: "Fast resolution times orchestrated by our on-call developer experts.",
      icon: AlertCircle
    },
    {
      title: "Systems Optimization",
      desc: "Proactive database tuning, cache audits, and server cost optimization.",
      icon: Zap
    }
  ];

  const monitoringScopes = {
    infrastructure: {
      title: "Infrastructure",
      bullets: [
        "CPU, Memory, and Disk capacity",
        "Network latency & active bandwidth",
        "Database indices performance",
        "Kubernetes container health states"
      ]
    },
    application: {
      title: "Application",
      bullets: [
        "API endpoint response latency",
        "Error rates & trace exceptions",
        "High-frequency transaction volumes",
        "User session tracking statistics"
      ]
    },
    security: {
      title: "Security",
      bullets: [
        "Failed authentication attempts",
        "Active DDoS detection alerts",
        "SSL certificate expiry logs",
        "Automated vulnerability scans"
      ]
    },
    business: {
      title: "Business Metrics",
      bullets: [
        "Transaction success rate checks",
        "Active user engagement metrics",
        "Revenue tracking system hooks",
        "Conversion funnel drop-off alerts"
      ]
    }
  };

  const faqs = [
    {
      q: "What is included in the response time SLA?",
      a: "Response time is measured from when an incident is detected or reported until our team acknowledges and begins investigation. P1 critical incidents get immediate attention. Resolution times depend on issue complexity but are typically 2-8x the response time."
    },
    {
      q: "Can I upgrade or downgrade my support tier?",
      a: "Yes. You can change tiers at any time with 30 days notice. Upgrades take effect immediately, while downgrades apply at the next billing cycle. We recommend starting with Growth tier and adjusting based on your needs."
    },
    {
      q: "What happens if you miss the SLA?",
      a: "We provide service credits for SLA breaches: 5% credit for missing SLA once, 10% for twice in a month, 25% for three or more times. Our uptime SLAs have been consistently above 99.95% across all customers."
    },
    {
      q: "Do you provide support for third-party integrations?",
      a: "Yes. We support common integrations (Multi-Cloud, Stripe, Twilio, etc.) as part of all tiers. Custom integrations may require additional setup time but are fully supported once deployed."
    },
    {
      q: "How does incident escalation work?",
      a: "Incidents are auto-classified by severity: P1 (critical outage), P2 (major degradation), P3 (minor issue), P4 (question/request). P1/P2 incidents escalate to senior engineers if not resolved within 1 hour. You receive real-time updates via your preferred channel."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <HeartHandshake className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>24/7 Managed Platform Support</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Managed Support <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  & SLA Tiers
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                24/7 uptime monitoring, active incident response, and continuous maintenance backed by flexible, strict SLA targets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Choose Your Tier
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#tiers" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  SLA Comparison
                </a>
              </div>
            </motion.div>

            {/* Right Side SVG Heartbeat Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-support" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(139, 92, 246, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-support)" />
                  
                  {/* Glowing pulse line */}
                  <path 
                    d="M 20,150 L 120,150 L 140,110 L 160,190 L 180,130 L 190,160 L 200,150 L 380,150" 
                    fill="none" 
                    stroke="#8b5cf6" 
                    strokeWidth="3" 
                    className="support-heartbeat-line" 
                  />
                  
                  <circle cx="200" cy="150" r="6" fill="#c084fc" className="animate-ping" />
                  <circle cx="200" cy="150" r="4" fill="#a78bfa" />
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span>PLATFORM UPTIME: 99.99%</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SUPPORT TIERS SECTION */}
      <section id="tiers" className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">pricing::tiers</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Flexible Support Tiers</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {supportTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`p-8 rounded-3xl border transition-all flex flex-col justify-between h-full bg-white relative ${
                  tier.isPopular ? "border-[#1591dc] shadow-[0_15px_40px_rgba(21,145,220,0.2)] scale-102 z-10" : "border-slate-200 shadow-md"
                }`}
              >
                {tier.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-[#1591dc] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                    Most Popular
                  </span>
                )}
                
                <div className="space-y-4 text-left">
                  <h4 className="text-xl font-bold text-slate-900">{tier.name} Tier</h4>
                  <div className="text-xs text-[#1591dc] font-mono font-bold uppercase tracking-wider">{tier.rto}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{tier.desc}</p>
                  
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {tier.bullets.map((b) => (
                      <li key={b} className="flex items-start text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link href="/contact" className="w-full">
                    <button className={`w-full py-3.5 rounded-full font-bold text-xs transition-all uppercase tracking-wider font-mono ${
                      tier.isPopular 
                        ? "bg-[#1591dc] hover:bg-blue-600 text-white shadow-lg" 
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                    }`}>
                      Activate Support
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">support::features</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">What is Included</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsIncluded.map((feat) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={feat.title}
                  className="p-6 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-purple-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-[#4bb8fa]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SLA COMPARISON MATRIX */}
      <section className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#8da8df] py-20 border-b border-white/5 overflow-hidden text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#4BB8FA] uppercase font-mono">sla::matrix</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">SLA Comparison Matrix</h3>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#090b16]/95 shadow-2xl">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 bg-slate-900/60 font-bold text-[#4BB8FA]">
                  <th className="p-4">Incident Class</th>
                  <th className="p-4">P1 (Critical Outage)</th>
                  <th className="p-4">P2 (Major Slowness)</th>
                  <th className="p-4">P3 (Minor Bug)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="p-4 font-bold text-white bg-white/5">Enterprise SLA</td>
                  <td className="p-4 text-emerald-400">15 Min response</td>
                  <td className="p-4 text-emerald-400">1 Hour response</td>
                  <td className="p-4">4 Hours response</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white bg-white/5">Growth SLA</td>
                  <td className="p-4 text-yellow-400">1 Hour response</td>
                  <td className="p-4">4 Hours response</td>
                  <td className="p-4">12 Hours response</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white bg-white/5">Starter SLA</td>
                  <td className="p-4">4 Hours response</td>
                  <td className="p-4">12 Hours response</td>
                  <td className="p-4">24 Hours response</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE MONITOR */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">monitoring::metrics</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">What We Actively Monitor</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(monitoringScopes).map(([key, scope]) => (
              <div 
                key={key}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider font-mono">{scope.title}</h4>
                  <ul className="space-y-2">
                    {scope.bullets.map((b) => (
                      <li key={b} className="flex items-start text-xs text-slate-600 leading-normal">
                        <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="relative bg-gradient-to-b from-[#f0f5fd] via-[#f8fafc] to-[#edf4fc] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">common::inquiries</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-slate-200/85 rounded-2xl overflow-hidden bg-white/70 hover:bg-white transition-colors shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#2C5EAD]" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#edf4fc] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Need Managed SLA Support?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Choose the right SLA support tier for your infrastructure needs and rest easy knowing your systems are in expert hands.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-[#1591dc] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Get Managed Support
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
