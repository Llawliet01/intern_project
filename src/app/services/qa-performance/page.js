"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Activity,
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Shield, ShieldAlert, Play, CheckSquare, Search, Gauge
} from "lucide-react";

export default function QaPerformancePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pyramidApproach = {
    unit: {
      title: "Unit Tests",
      desc: "Fast, isolated tests verifying individual code functions and component structures.",
      bullets: [
        "80%+ code coverage target baseline",
        "TDD/BDD writing practices",
        "Mocking & stubbing dependencies",
        "Execution completes in milliseconds"
      ]
    },
    integration: {
      title: "Integration Tests",
      desc: "Verifying data flows and contract interactions between components and services.",
      bullets: [
        "API contract validation tests",
        "Active database state integration",
        "External service mocking layers",
        "Execution completes in seconds"
      ]
    },
    e2e: {
      title: "E2E Tests",
      desc: "Complete end-to-end user journey validations in production-like staging setups.",
      bullets: [
        "Critical business paths coverage",
        "Cross-browser testing (Playwright)",
        "Visual regression comparisons",
        "Execution completes in minutes"
      ]
    }
  };

  const loadTesting = [
    "Baseline performance metrics evaluation",
    "Stress testing systems to absolute breaking points",
    "Spike testing mimicking massive traffic surges",
    "Endurance testing tracking memory leak states"
  ];

  const qualityGates = [
    "Strict code coverage gate thresholds",
    "Automated security vulnerability scanning",
    "Performance regression differential checks",
    "WCAG 2.1 AA accessibility compliance"
  ];

  const strategies = [
    {
      title: "Shift-Left Testing",
      desc: "We run testing cycles early in the developer workflow to catch bugs before compile merges."
    },
    {
      title: "Test Automation Pyramid",
      desc: "We optimize execution speeds: 70% unit tests, 20% integration tests, and 10% E2E UI tests."
    },
    {
      title: "Continuous Testing",
      desc: "Integrating automated testing validation gates directly into your active Git CI/CD pipelines."
    },
    {
      title: "Risk-Based Testing",
      desc: "We prioritize critical, high-impact business payment paths and user onboarding gateways."
    }
  ];

  const techStack = [
    { name: "Cypress", category: "E2E Automation" },
    { name: "Selenium", category: "Legacy E2E" },
    { name: "Playwright", category: "Modern E2E Testing" },
    { name: "JMeter", category: "Performance & Load" },
    { name: "Gatling", category: "Load Testing Scala" },
    { name: "TestRail", category: "Test Case Management" },
    { name: "Allure", category: "Reporting Dashboard" },
    { name: "SonarQube", category: "Static Code Security" }
  ];

  const faqs = [
    {
      q: "What is the ideal test coverage percentage?",
      a: "We target 80%+ code coverage for unit tests, but focus on quality over quantity. Critical business logic should have 95%+ coverage. E2E tests should cover all critical user journeys. Remember: 100% coverage doesn't guarantee bug-free code."
    },
    {
      q: "How do you handle flaky tests?",
      a: "We implement retry mechanisms, proper waits, test isolation, and deterministic test data. Flaky tests are quarantined and fixed immediately. Our CI/CD pipelines track test stability metrics and alert when flakiness exceeds 2%."
    },
    {
      q: "What is your typical test execution time?",
      a: "Unit tests: < 5 minutes. Integration tests: 5-15 minutes. E2E tests: 15-30 minutes. We parallelize tests across multiple machines to keep CI/CD pipelines fast. Total pipeline time including builds is typically 10-20 minutes."
    },
    {
      q: "Do you provide performance testing?",
      a: "Yes. We conduct load testing, stress testing, spike testing, and endurance testing. We identify bottlenecks, determine max capacity, and provide optimization recommendations. Reports include response times, throughput, error rates, and resource utilization."
    },
    {
      q: "Can you integrate testing into our existing CI/CD?",
      a: "Absolutely. We integrate with GitHub Actions, GitLab CI, Jenkins, CircleCI, Cloud DevOps platforms, and more. We set up quality gates, parallel execution, test reporting, and failure notifications. Tests run automatically on every PR and deployment."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>QA & Performance Audit Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                QA Automation <br />
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-[#4BB8FA] bg-clip-text text-transparent">
                  & Performance Testing
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Comprehensive test automation frameworks, stress load testing, and quality assurance gates ensuring bulletproof releases.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Request A Test Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#process" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Our Strategies
                </a>
              </div>
            </motion.div>

            {/* Right Side SVG Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-qa" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(16, 185, 129, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-qa)" />
                  
                  {/* Test Pyramid SVG shapes */}
                  {/* E2E Top */}
                  <polygon points="200,60 230,110 170,110" fill="none" stroke="#f43f5e" strokeWidth="2" />
                  <text x="200" y="95" fill="#f43f5e" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">E2E</text>

                  {/* Integration Mid */}
                  <polygon points="160,120 240,120 260,190 140,190" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                  <text x="200" y="160" fill="#0ea5e9" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">INTEGRATION</text>

                  {/* Unit base */}
                  <polygon points="130,200 270,200 290,270 110,270" fill="none" stroke="#10b981" strokeWidth="2" />
                  <text x="200" y="240" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">UNIT TESTS</text>
                  
                  {/* Radar Scanning Line */}
                  <line x1="80" y1="20" x2="320" y2="20" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="2" className="qa-scanner-line" />
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AUTOMATED PYRAMID PIPELINE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TEST PYRAMID SECTION */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">architecture::pyramid</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">The Test Pyramid Strategy</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              We structure tests at different layers to maximize execution speed while securing complete path coverage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(pyramidApproach).map(([key, val]) => (
              <div 
                key={key}
                className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-[9px] font-black tracking-widest text-emerald-400 uppercase font-mono bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/25">{val.title}</span>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">{val.desc}</p>
                  <ul className="space-y-2 pt-4 border-t border-white/5">
                    {val.bullets.map((b) => (
                      <li key={b} className="flex items-center text-xs text-slate-300">
                        <Check className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
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

      {/* 3. PERFORMANCE & QUALITY GATES */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">performance::validation</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Performance Testing & Quality Gates</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Load testing */}
            <div className="p-8 rounded-3xl bg-slate-950/40 border border-white/5 hover:border-teal-500/30 transition-all">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-teal-400" />
                <span>Load & Stress Auditing</span>
              </h4>
              <ul className="space-y-3">
                {loadTesting.map((lt) => (
                  <li key={lt} className="flex items-start text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{lt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality gates */}
            <div className="p-8 rounded-3xl bg-slate-950/40 border border-white/5 hover:border-teal-500/30 transition-all">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-teal-400" />
                <span>Pipeline Quality Gates</span>
              </h4>
              <ul className="space-y-3">
                {qualityGates.map((qg) => (
                  <li key={qg} className="flex items-start text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{qg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTING STRATEGIES */}
      <section id="process" className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#8da8df] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-slate-300 uppercase font-mono">testing::methodology</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Our Testing Strategies</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strat, idx) => (
              <div 
                key={strat.title}
                className="p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <span className="text-lg font-black font-mono text-emerald-400">0{idx + 1}</span>
                  <h4 className="text-sm font-bold text-white">{strat.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{strat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTING TOOLS BY CATEGORY */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">tools::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Testing Tools Matrix</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div 
                key={tech.name} 
                className="p-4 bg-white/80 border border-slate-200/60 rounded-xl flex flex-col justify-center text-center shadow-sm"
              >
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block font-mono mb-1">{tech.category}</span>
                <span className="text-sm font-bold text-slate-800">{tech.name}</span>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Improve Your QA & Testing Strategy
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Build confidence in your releases with comprehensive automated testing and performance validation workflows. Talk with our testing crew.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Consult QA Engineers
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
