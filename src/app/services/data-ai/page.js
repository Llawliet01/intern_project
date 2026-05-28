"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Database, 
  Zap, Cpu, Sparkles, Lock, Globe, ArrowUpRight, 
  Layers, Settings, BarChart2, GitBranch, Brain, Network
} from "lucide-react";

export default function DataAiPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const engineeringPillars = {
    engineering: {
      title: "Data Engineering",
      bullets: [
        "Reliable ETL/ELT pipeline builds",
        "Modern cloud data warehousing",
        "Real-time data streaming triggers",
        "Data quality & governance gates",
        "Data lakes & lakehouse systems"
      ]
    },
    mlOps: {
      title: "ML & AI Systems",
      bullets: [
        "Continuous MLOps pipelines",
        "Model training & deploy structures",
        "LLM & RAG vector store setup",
        "Predictive analytics engines",
        "Computer vision & NLP parsing"
      ]
    },
    analytics: {
      title: "Analytics & BI",
      bullets: [
        "Interactive analytics dashboards",
        "Custom scheduled business reports",
        "Enterprise Business Intelligence",
        "Responsive data visualizations",
        "Self-service data analytics models"
      ]
    }
  };

  const pragmaticPillars = [
    {
      title: "Start Simple",
      desc: "Begin with rule-based workflows, transitioning into complex ML models only when data signals warrant it."
    },
    {
      title: "Measure Impact",
      desc: "Establishing transparent business performance KPIs and ROI tracking metrics for every AI model project."
    },
    {
      title: "Scale Gradually",
      desc: "Confirm model reliability and user value via pilot programs before scheduling enterprise integrations."
    }
  ];

  const useCases = [
    {
      title: "Predictive Maintenance",
      desc: "Predicting mechanical equipment failures before outages occur.",
      badges: ["Time series forecasting", "Anomaly detection"]
    },
    {
      title: "Customer Churn Prediction",
      desc: "Identifying customer profiles indicating high cancellation risks.",
      badges: ["Classification models", "Feature engineering"]
    },
    {
      title: "Recommendation Engines",
      desc: "Suggesting personalized content recommendations dynamically.",
      badges: ["Collaborative filtering", "Content-based filtering"]
    },
    {
      title: "Document Intelligence",
      desc: "Extracting structured parameters from unstructured corporate files.",
      badges: ["Named entity recognition", "Ensemble methods"]
    }
  ];

  const pipelineSteps = [
    {
      title: "Ingestion",
      desc: "Collecting bulk logs and event streams from disparate source systems."
    },
    {
      title: "Transformation",
      desc: "Cleaning, enrichment, and formatting raw logs into structured matrices."
    },
    {
      title: "Storage",
      desc: "Cataloging datasets into high-performance warehouses and lakehouses."
    },
    {
      title: "Analysis",
      desc: "Serving insights to business applications and intelligence dashboards."
    }
  ];

  const successStories = [
    {
      title: "E-Commerce Recommendation Engine",
      challenge: "Online retailer wanted to optimize conversion rates via personalized product listings.",
      solution: "We engineered a hybrid recommender using collaborative filtering matrices and LLM search embeddings.",
      results: "Increased product discovery rates and drove significant improvements in average order value."
    },
    {
      title: "Manufacturing Predictive Maintenance",
      challenge: "Factory floor suffered from costly, unplanned mechanical line downtimes.",
      solution: "We deployed time series forecasting models auditing sensor heat and vibration telemetry metrics.",
      results: "Significantly reduced unscheduled system downtimes and mechanical maintenance fees."
    }
  ];

  const techStack = [
    { name: "Python", category: "Data Science" },
    { name: "Apache Airflow", category: "Orchestration" },
    { name: "Snowflake", category: "Data Warehouse" },
    { name: "Google BigQuery", category: "Serverless Analytics" },
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "PyTorch", category: "AI Modeling" },
    { name: "OpenAI", category: "Large Language Models" },
    { name: "LangChain", category: "LLM Framework" },
    { name: "Tableau", category: "Visual BI" },
    { name: "PowerBI", category: "Enterprise BI" }
  ];

  const faqs = [
    {
      q: "Do I need a data scientist on staff to work with you?",
      a: "No. We handle the entire ML lifecycle from problem formulation to production deployment. We work with your domain experts to understand business requirements and deliver turnkey solutions with comprehensive documentation."
    },
    {
      q: "How do you ensure AI models remain accurate over time?",
      a: "We implement MLOps pipelines with automated model monitoring, drift detection, and retraining workflows. Models are continuously evaluated against production data, and we alert you when performance degrades below thresholds."
    },
    {
      q: "What is the typical timeline for an ML project?",
      a: "Simple ML projects (classification, regression) take 6-8 weeks. Complex projects (NLP, computer vision, recommendation systems) take 3-6 months. We always start with a 2-week proof-of-concept to validate feasibility."
    },
    {
      q: "Can you help with data quality issues?",
      a: "Yes. We implement data quality frameworks with automated validation, data profiling, and data contracts. We build data lineage mappings and set dashboards monitoring active pipeline health."
    },
    {
      q: "How do you approach LLM projects responsibly?",
      a: "We implement guardrails including prompt injection detection, content filtering, PII redaction, cost controls, and hallucination monitoring. We use RAG (Retrieval Augmented Generation) to ground responses in your data and reduce hallucinations."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Brain className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>Data & Artificial Intelligence Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Data & AI <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Scalable ETL pipelines, robust MLOps orchestrations, interactive dashboards, and pragmatic AI deployments that drive value.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Unlock Your Data
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#process" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Our Process
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
                    <pattern id="bp-grid-data" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-data)" />
                  
                  {/* Neural Net Nodes */}
                  <g transform="translate(100, 150)">
                    <circle r="14" fill="#090d16" stroke="#3b82f6" strokeWidth="2" />
                    <Database className="w-4 h-4 text-[#3b82f6] -translate-x-2 -translate-y-2" />
                  </g>
                  
                  <g transform="translate(200, 90)">
                    <circle r="14" fill="#090d16" stroke="#3b82f6" strokeWidth="2" />
                    <Cpu className="w-4 h-4 text-[#3b82f6] -translate-x-2 -translate-y-2" />
                  </g>

                  <g transform="translate(200, 210)">
                    <circle r="14" fill="#090d16" stroke="#3b82f6" strokeWidth="2" />
                    <Layers className="w-4 h-4 text-[#3b82f6] -translate-x-2 -translate-y-2" />
                  </g>

                  <g transform="translate(300, 150)">
                    <circle r="18" fill="#090d16" stroke="#3b82f6" strokeWidth="2.5" className="radar-glow-circle" />
                    <Brain className="w-5 h-5 text-[#3b82f6] -translate-x-2.5 -translate-y-2.5" />
                  </g>

                  {/* Pulsing connection lines */}
                  <path d="M 114,150 L 186,96" fill="none" stroke="#3b82f6" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 114,150 L 186,204" fill="none" stroke="#3b82f6" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 214,90 L 286,140" fill="none" stroke="#3b82f6" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 214,210 L 286,160" fill="none" stroke="#3b82f6" strokeWidth="2" className="svg-blueprint-line" />
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>ML SYSTEM: ONLINE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. THREE-COLUMN PILLARS */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">system::pillars</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Our Data & AI Framework</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(engineeringPillars).map(([key, val]) => (
              <div 
                key={key}
                className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">{val.title}</h4>
                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {val.bullets.map((b) => (
                      <li key={b} className="flex items-start text-xs text-slate-300">
                        <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* 3. PRAGMATIC AI APPROACH */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">pragmatism::first</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Our Pragmatic AI Approach</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              We focus on practical AI implementations that deliver measurable business value. No hype, just results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pragmaticPillars.map((prag) => (
              <div 
                key={prag.title}
                className="p-6 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-[#1591dc]/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white">{prag.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{prag.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. USE CASES */}
      <section id="process" className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#8da8df] py-20 border-b border-white/5 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-slate-300 uppercase font-mono">vertical::applications</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Key ML/AI Use Cases</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc) => (
              <div 
                key={uc.title}
                className="p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white">{uc.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{uc.desc}</p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {uc.badges.map((b) => (
                      <span key={b} className="text-[8.5px] font-semibold text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/25">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PIPELINE ARCHITECTURE */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">infrastructure::pipeline</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Standard Data Pipeline Architecture</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((step, idx) => (
              <div 
                key={step.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-lg font-black font-mono text-blue-600">0{idx + 1}</span>
                  <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="relative bg-gradient-to-b from-[#f0f5fd] via-[#f8fafc] to-[#edf4fc] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">deployment::outcomes</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Data & AI Success Stories</h3>
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

      {/* 7. TECHNOLOGIES WE USE */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">tools::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Data Tech Stack</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-5xl mx-auto text-center">
            {techStack.map((tech) => (
              <div 
                key={tech.name} 
                className="p-4 bg-white/80 border border-slate-200/60 rounded-xl flex flex-col justify-center shadow-sm"
              >
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block font-mono mb-1">{tech.category}</span>
                <span className="text-xs font-bold text-slate-800 leading-tight">{tech.name}</span>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Unlock the Power of Your Data
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Transform your bulk company logs and records into actionable business insights with our comprehensive data & AI engine builds.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Consult Data Engineers
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
