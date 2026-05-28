"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Plug,
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Shield, Link2, Code, Terminal, Activity
} from "lucide-react";

export default function ApiIntegrationsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const apiDesignFeatures = [
    "RESTful & GraphQL APIs",
    "OpenAPI/Swagger specification",
    "Contract-first development",
    "Rate limiting & throttling",
    "Authentication (OAuth2, JWT)",
    "Versioning strategies",
    "Comprehensive documentation"
  ];

  const integrationFeatures = [
    "Payment gateways (Stripe, PayPal)",
    "CRM systems (Salesforce, HubSpot)",
    "Marketing platforms & automation",
    "Analytics & telemetry monitoring",
    "Cloud service ecosystem hookups",
    "Custom real-time webhooks",
    "Legacy system adapter connectors"
  ];

  const gatewayPillars = [
    {
      title: "Security Gate",
      desc: "Comprehensive OAuth2/JWT auth, TLS encryption, and active rate limiting.",
      badge: "Auth, encryption, DDoS protection",
      icon: Shield
    },
    {
      title: "Usage Analytics",
      desc: "Tracing traffic loads, measuring error rates, and API performance telemetry.",
      badge: "Usage metrics, performance tracking",
      icon: Activity
    },
    {
      title: "Caching Layer",
      desc: "Edge-caching frameworks and CDN integration to minimize endpoint latency.",
      badge: "Response caching, CDN integration",
      icon: Database
    },
    {
      title: "Resilience Gates",
      desc: "Automated circuit breakers, exponential retries, and default fallback hooks.",
      badge: "Circuit breakers, retries, fallbacks",
      icon: Zap
    }
  ];

  const useCases = [
    {
      title: "Payment Gateway Integration",
      desc: "Stripe, PayPal, and Square integrations handling active transaction states and webhook verifications."
    },
    {
      title: "CRM & Marketing Hubs",
      desc: "Bidirectional syncs with Salesforce, HubSpot, Mailchimp, and Marketo pipelines."
    },
    {
      title: "ERP & Accounting Ledgers",
      desc: "Structured connections with QuickBooks, Xero, SAP, and NetSuite accounting services."
    },
    {
      title: "Cloud Ecosystem Services",
      desc: "Multi-cloud, cloud platform, and dedicated cloud services data integrations."
    }
  ];

  const patterns = [
    {
      title: "Synchronous REST",
      useCase: "Real-time query requests",
      example: "Payment gateway charges, user authentication gates"
    },
    {
      title: "Asynchronous Messaging",
      useCase: "Decoupled background tasks",
      example: "Order processing queues, automated email triggers"
    },
    {
      title: "Event-Driven Webhooks",
      useCase: "Instant event notifications",
      example: "Payment confirmation alerts, shipment status updates"
    },
    {
      title: "GraphQL Federation",
      useCase: "Unified client API gateway",
      example: "Aggregating microservices into a single graph endpoint"
    }
  ];

  const successStory = {
    title: "E-Commerce Platform Integration",
    challenge: "Scaling an e-commerce platform to orchestrate connections with 15+ payment gateways, shipping providers, and ERP networks without increasing latency.",
    solution: "We designed a unified API adapter layer using the adapter pattern and asynchronous webhook queue handlers.",
    results: [
      "Seamlessly integrated 15+ external payment/shipping gateways",
      "Unified client interface under a single GraphQL gateway",
      "Resilient retry mechanisms for third-party service outages"
    ]
  };

  const techStack = [
    { name: "GraphQL", category: "Query Language" },
    { name: "Multi-Cloud API Gateway", category: "Traffic Routing" },
    { name: "Apigee", category: "API Management" },
    { name: "Express", category: "API Web Server" },
    { name: "FastAPI", category: "High Performance API" },
    { name: "Postman", category: "Testing & Specs" },
    { name: "Swagger", category: "API Documentation" }
  ];

  const faqs = [
    {
      q: "How do you handle API versioning?",
      a: "We use semantic versioning with backward compatibility. APIs support multiple versions simultaneously using URL versioning (/v1/, /v2/) or header-based versioning. Deprecation notices are provided 6-12 months in advance."
    },
    {
      q: "What about API security?",
      a: "We implement OAuth2/JWT authentication, rate limiting, DDoS protection, request signing, and encryption in transit. All APIs include comprehensive audit logs and monitor for suspicious activity."
    },
    {
      q: "Can you integrate with legacy systems?",
      a: "Yes. We create adapter layers to modernize legacy SOAP/XML APIs into REST/GraphQL. We handle data transformation, protocol conversion, and maintain backward compatibility while enabling modern integrations."
    },
    {
      q: "How do you ensure API reliability?",
      a: "We implement circuit breakers, automatic retries with exponential backoff, fallback mechanisms, comprehensive monitoring, and SLAs with 99.9% uptime guarantees. All APIs include health check endpoints."
    },
    {
      q: "What is your typical integration timeline?",
      a: "Simple integrations (payment gateways, CRMs) take 2-4 weeks. Complex enterprise integrations with custom workflows can take 6-12 weeks. We provide detailed project plans with milestones."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Plug className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>🔌 API Design & Integrations</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                API Design <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  & Integrations
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Contract-first API design, microservices architecture, and seamless third-party integrations built for scale and security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Connect An API
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
                    <pattern id="bp-grid-api" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(21, 145, 220, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-api)" />
                  
                  {/* Central Gateway Node */}
                  <g transform="translate(200, 150)">
                    <circle r="26" fill="#0c0e1e" stroke="#1591dc" strokeWidth="2.5" className="radar-glow-circle" />
                    <circle r="18" fill="#090d16" stroke="#1591dc" strokeWidth="2.5" />
                    <Layers className="w-5 h-5 text-[#1591dc] -translate-x-2.5 -translate-y-2.5" />
                  </g>

                  {/* REST Client */}
                  <g transform="translate(70, 150)">
                    <circle r="16" fill="#0c0e1e" stroke="#2c5ead" strokeWidth="2" />
                    <Terminal className="w-4 h-4 text-[#2c5ead] -translate-x-2 -translate-y-2" />
                  </g>
                  
                  {/* Internal DB */}
                  <g transform="translate(330, 80)">
                    <circle r="16" fill="#0c0e1e" stroke="#4bb8fa" strokeWidth="2" />
                    <Database className="w-4 h-4 text-[#4bb8fa] -translate-x-2 -translate-y-2" />
                  </g>

                  {/* External CRM */}
                  <g transform="translate(330, 220)">
                    <circle r="16" fill="#0c0e1e" stroke="#4bb8fa" strokeWidth="2" />
                    <Plug className="w-4 h-4 text-[#4bb8fa] -translate-x-2 -translate-y-2" />
                  </g>

                  {/* Connection lines */}
                  <path d="M 86,150 L 174,150" fill="none" stroke="#1591dc" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 224,136 L 314,90" fill="none" stroke="#1591dc" strokeWidth="2.5" className="svg-blueprint-line" />
                  <path d="M 224,164 L 314,210" fill="none" stroke="#1591dc" strokeWidth="2.5" className="svg-blueprint-line" />
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>API ORCHESTRATION GATEWAY</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. DESIGN VS INTEGRATION */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">system::pillars</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Comprehensive API Capabilities</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: API Design */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-[#1591dc] uppercase font-mono bg-blue-950/40 px-2.5 py-1 rounded border border-blue-500/25">Design Strategy</span>
                <h4 className="text-xl font-bold text-white mt-4">API Design</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building consistent, developer-friendly interfaces following modern web standards.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {apiDesignFeatures.map((feat) => (
                    <li key={feat} className="flex items-center text-xs text-slate-300">
                      <Check className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Integrations */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-[#4bb8fa] uppercase font-mono bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-500/25">Ecosystem Sync</span>
                <h4 className="text-xl font-bold text-white mt-4">Seamless Integrations</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connecting third-party applications to share data and trigger workflows in real-time.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {integrationFeatures.map((feat) => (
                    <li key={feat} className="flex items-center text-xs text-slate-300">
                      <Check className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. API GATEWAY & MANAGEMENT */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">gateway::management</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">API Gateway & Traffic Control</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Centralized API management providing security controls, load monitoring, and traffic throttling.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gatewayPillars.map((pil) => {
              const Icon = pil.icon;
              return (
                <div 
                  key={pil.title}
                  className="p-6 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-[#1591dc]/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-[#1591dc]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{pil.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pil.desc}</p>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-4 text-[9px] text-cyan-400 font-mono">
                    {pil.badge}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMMON USE CASES */}
      <section className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#8da8df] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#4BB8FA] uppercase font-mono">common::usecases</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Integration Use Cases</h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTEGRATION PATTERNS */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">architectural::patterns</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Integration Patterns We Use</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {patterns.map((pat) => (
              <div 
                key={pat.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900">{pat.title}</h4>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Use Case</div>
                  <p className="text-xs text-slate-600">{pat.useCase}</p>
                </div>
                <div className="border-t border-slate-100 pt-3 mt-4">
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Example</div>
                  <span className="text-xs text-slate-800 font-semibold">{pat.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORY */}
      <section className="relative bg-gradient-to-b from-[#f0f5fd] via-[#f8fafc] to-[#edf4fc] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">integration::success</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Integration Success Story</h3>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900">{successStory.title}</h4>
              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">The Challenge</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{successStory.challenge}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Our Solution</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{successStory.solution}</p>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2 block">Key Results</span>
                <ul className="space-y-1.5">
                  {successStory.results.map((res, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGIES WE USE */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">technical::modules</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Integration Technologies</h3>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Need API Development or Integration?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Let's build scalable, secure APIs that power your applications and integrate seamlessly with your ecosystem. Talk with our API engineering team.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Start Integration Now
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
