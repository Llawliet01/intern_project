"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Shield, 
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Eye, AlertTriangle, ShieldAlert, Key, Activity
} from "lucide-react";

export default function CybersecurityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const sdlcFeatures = [
    "Security requirements analysis",
    "Threat modeling (STRIDE, DREAD)",
    "Secure peer code reviews",
    "SAST/DAST gates in CI/CD pipeline",
    "Dependency vulnerability scanning",
    "Security validation testing",
    "Incident response plan drafting"
  ];

  const pentestFeatures = [
    "Web application security audits",
    "API gateway security assessment",
    "Infrastructure configuration testing",
    "Mobile app binaries security",
    "Social engineering simulations",
    "Comprehensive vulnerability reports",
    "Step-by-step remediation guidance"
  ];

  const complianceStandards = [
    {
      title: "Security Standards",
      desc: "Compliance mapping (SOC2, ISO 27001) and preparation audits.",
      badge: "SOC2, ISO 27001 Audit Support"
    },
    {
      title: "Data Protection",
      desc: "Privacy assessments, data flow mappings, and GDPR/CCPA readiness.",
      badge: "GDPR, CCPA Compliance"
    },
    {
      title: "Healthcare Security",
      desc: "HIPAA-ready infrastructure designs and patient PHI secure vaulting.",
      badge: "HIPAA, PHI Data Handling"
    },
    {
      title: "Security Management",
      desc: "Setting up information security management systems (ISMS).",
      badge: "ISMS Setup & Frameworks"
    }
  ];

  const bestPractices = [
    {
      title: "Secrets Management",
      desc: "HashiCorp Vault, cloud secrets vaulting, and encrypted configs.",
      icon: Key
    },
    {
      title: "Access Control",
      desc: "Zero-trust baselines, least-privilege configurations, and enforced MFA.",
      icon: Lock
    },
    {
      title: "Strong Encryption",
      desc: "Enforcing TLS 1.3 in-transit and AES-256 at-rest by default.",
      icon: Shield
    },
    {
      title: "Active Monitoring",
      desc: "Continuous security audit logs, SIEM, and anomaly tracking.",
      icon: Eye
    }
  ];

  const threatScenarios = [
    {
      threat: "SQL Injection (SQLi)",
      severity: "CRITICAL",
      color: "text-red-400 bg-red-950/40 border-red-500/30",
      mitigation: "Enforcing parameterized DB queries, validating input formats, and sanitizing fields."
    },
    {
      threat: "Cross-Site Scripting (XSS)",
      severity: "HIGH",
      color: "text-orange-400 bg-orange-950/40 border-orange-500/30",
      mitigation: "Strict Content Security Policy (CSP) headers, output HTML escaping, and cookies sanitization."
    },
    {
      threat: "Authentication Bypass",
      severity: "CRITICAL",
      color: "text-red-400 bg-red-950/40 border-red-500/30",
      mitigation: "Enforcing Multi-Factor Authentication (MFA), secure HTTP-Only session keys, and password salting."
    },
    {
      threat: "Data Breach",
      severity: "CRITICAL",
      color: "text-red-400 bg-red-950/40 border-red-500/30",
      mitigation: "Encrypting database volumes, strict IAM credentials policies, and network segmentations."
    }
  ];

  const processSteps = [
    {
      title: "Assessment",
      bullets: ["Vulnerability scanning", "Threat modeling", "Risk analysis", "Security audit"]
    },
    {
      title: "Implementation",
      bullets: ["Security controls", "Encryption setup", "Access policies", "Monitoring tools"]
    },
    {
      title: "Testing",
      bullets: ["Penetration testing", "Code review", "Compliance validation", "Red team exercise"]
    },
    {
      title: "Monitoring",
      bullets: ["24/7 SIEM alerts", "Incident response", "Patch management", "Security updates"]
    }
  ];

  const successStories = [
    {
      title: "FinTech Security Hardening",
      challenge: "NeoBank needed to pass rigorous compliance audits and secure transactional assets from outside penetrations.",
      solution: "We deployed zero-trust system vaults, configured 24/7 SIEM monitoring logs, and ran automated compliance pipelines.",
      results: "Achieved full SOC2 security compliance audits within 6 months with zero breach issues."
    },
    {
      title: "Healthcare Security Compliance",
      challenge: "Telehealth provider required end-to-end encrypted tunnels for HIPAA compliance patient consultations.",
      solution: "We engineered encrypted databases storage, secure WebRTC signaling paths, and implemented audit logging triggers.",
      results: "Secured all telemedicine files, successfully passing third-party healthcare security checks."
    }
  ];

  const faqs = [
    {
      q: "How long does security certification take?",
      a: "Security certifications typically take 3-6 months to implement controls and pass audit. Advanced certifications require an additional 6-12 months of monitoring to demonstrate sustained compliance. We guide you through the entire process."
    },
    {
      q: "What is penetration testing and how often should it be done?",
      a: "Penetration testing simulates real-world attacks to identify vulnerabilities. We recommend annual comprehensive pentests, with quarterly focused tests on critical systems or after major changes. High-risk systems may require more frequent testing."
    },
    {
      q: "How do you handle security incidents?",
      a: "We follow NIST incident response framework: Preparation, Detection, Analysis, Containment, Eradication, Recovery, and Post-Incident review. Our 24/7 SOC team responds to alerts within 30 minutes for critical incidents."
    },
    {
      q: "Can you help with data protection compliance?",
      a: "Yes. We implement data protection requirements including data mapping, consent management, right to erasure, data portability, breach notification procedures, and privacy impact assessment processes."
    },
    {
      q: "What is the difference between SAST and DAST?",
      a: "SAST (Static Application Security Testing) analyzes source code without executing it, finding vulnerabilities early. DAST (Dynamic Application Security Testing) tests running applications, finding runtime vulnerabilities. We use both for comprehensive coverage."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-red-400 font-mono">
                <Shield className="w-3.5 h-3.5 text-red-500" />
                <span>Cybersecurity & Compliance Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Cybersecurity <br />
                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-[#4BB8FA] bg-clip-text text-transparent">
                  & Compliance
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Secure SDLC integration, threat modeling, active penetration audits, and compliance validation support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Start Security Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#process" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Threat Matrix
                </a>
              </div>
            </motion.div>

            {/* Right Side SVG Firewall Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-sec" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(239, 68, 68, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-sec)" />
                  
                  {/* Outer shield outline */}
                  <path 
                    d="M 200,60 L 290,100 L 290,190 Q 200,260 110,190 L 110,100 Z" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="3.5" 
                    className="security-shield-glow" 
                  />
                  
                  <g transform="translate(200, 150)">
                    <circle r="22" fill="#090d16" stroke="#f87171" strokeWidth="2.5" />
                    <Lock className="w-5 h-5 text-[#f87171] -translate-x-2.5 -translate-y-2.5" />
                  </g>
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  <span>FIREWALL DEFENSE SHIELD: SECURE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SDLC VS PENTEST */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-red-500 uppercase font-mono">security::strategy</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Continuous Security & Assessment</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: SDLC */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-red-400 uppercase font-mono bg-red-950/40 px-2.5 py-1 rounded border border-red-500/25">Continuous SDLC</span>
                <h4 className="text-xl font-bold text-white mt-4">Secure SDLC</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integrating security check gates directly into active agile development lifecycle loops.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {sdlcFeatures.map((feat) => (
                    <li key={feat} className="flex items-center text-xs text-slate-300">
                      <Check className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Pentest */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-orange-400 uppercase font-mono bg-orange-950/40 px-2.5 py-1 rounded border border-orange-500/25">Penetration testing</span>
                <h4 className="text-xl font-bold text-white mt-4">Penetration Testing</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Simulating multi-vector attacks on applications and configurations to flag weak points.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {pentestFeatures.map((feat) => (
                    <li key={feat} className="flex items-center text-xs text-slate-300">
                      <Check className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPLIANCE & CERTIFICATIONS */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">compliance::roadmap</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Compliance & Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((std) => (
              <div 
                key={std.title}
                className="p-6 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-red-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white">{std.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{std.desc}</p>
                </div>
                <div className="border-t border-white/5 pt-3 mt-4 text-[9px] text-red-400 font-mono">
                  {std.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECURITY BEST PRACTICES */}
      <section className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#8da8df] py-20 border-b border-white/5 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-slate-200 uppercase font-mono">security::blueprints</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Security Architecture Pillars</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestPractices.map((bp) => {
              const Icon = bp.icon;
              return (
                <div 
                  key={bp.title}
                  className="p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-red-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{bp.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{bp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COMMON THREAT SCENARIOS */}
      <section id="process" className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">threats::matrix</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Threat Scenarios & Mitigations</h3>
          </div>

          <div className="space-y-4">
            {threatScenarios.map((sc) => (
              <div 
                key={sc.threat}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900">{sc.threat}</h4>
                    <span className={`text-[8.5px] font-bold px-2 py-0.5 rounded border ${sc.color}`}>
                      {sc.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{sc.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY PROCESS */}
      <section className="relative bg-gradient-to-b from-[#f0f5fd] via-[#f8fafc] to-[#edf4fc] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">implementation::waves</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Security Integration Process</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={step.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider font-mono">0{idx + 1} {step.title}</h4>
                  <ul className="space-y-2">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start text-xs text-slate-700 leading-normal">
                        <Check className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* 7. SUCCESS STORIES */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">case::studies</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Security Hardening Cases</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div 
                key={story.title}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-slate-900">{story.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">Challenge: {story.challenge}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">Solution: {story.solution}</p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono block mb-1">Key Results</span>
                  <span className="text-xs text-slate-800 font-medium">{story.results}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="relative bg-gradient-to-b from-[#d6e5fb] via-[#f1f5f9] to-[#ffffff] py-20 overflow-hidden text-slate-950">
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

      {/* 9. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#ffffff] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Secure Your Systems & Achieve Compliance
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Protect your cloud infrastructure, run full penetration assessments, and secure compliance certifications with our dedicated support team.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Consult Security Team
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
